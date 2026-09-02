import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    const fullName = String(formData.get('fullName') || '').trim()
    const email = String(formData.get('email') || '').trim()
    const phone = String(formData.get('phone') || '').trim()
    const message = String(formData.get('message') || '').trim()

    if (!fullName || !email || !message) return

    setStatus('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, phone, message }),
      })

      if (!res.ok) throw new Error('Request failed')

      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    } finally {
      window.setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="contact-full-name">Full name</label>
          <input id="contact-full-name" name="fullName" type="text" autoComplete="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="contact-email">Email</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" required />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="contact-phone">Phone <span className="label-optional">(optional)</span></label>
        <input id="contact-phone" name="phone" type="tel" autoComplete="tel" />
      </div>

      <div className="form-group">
        <label htmlFor="contact-message">How can I help?</label>
        <textarea id="contact-message" name="message" rows={5} required />
      </div>

      <button
        type="submit"
        className={`btn btn--primary form-submit${status === 'success' ? ' form-submit--success' : ''}${status === 'error' ? ' form-submit--error' : ''}`}
        disabled={status === 'sending'}
      >
        {status === 'sending' && 'Sending…'}
        {status === 'success' && 'Message sent'}
        {status === 'error' && 'Unable to send — try again'}
        {status === 'idle' && 'Send message'}
      </button>
    </form>
  )
}

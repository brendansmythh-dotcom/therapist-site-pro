const RESEND_URL = 'https://api.resend.com/emails'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev'

  if (!apiKey || !toEmail) {
    return res.status(500).json({ error: 'Missing email configuration' })
  }

  const { fullName, email, phone, message } = req.body ?? {}
  const trimmedFullName = String(fullName || '').trim()
  const trimmedEmail = String(email || '').trim()
  const trimmedPhone = String(phone || '').trim()
  const trimmedMessage = String(message || '').trim()

  if (!trimmedFullName || !trimmedEmail || !trimmedMessage) {
    return res.status(400).json({ error: 'Full name, email, and message are required' })
  }

  const phoneLine = trimmedPhone ? `\nPhone: ${trimmedPhone}` : ''

  try {
    const resendResponse = await fetch(RESEND_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `Website Contact <${fromEmail}>`,
        to: [toEmail],
        subject: `New inquiry from ${trimmedFullName}`,
        reply_to: trimmedEmail,
        text: `Full Name: ${trimmedFullName}\nEmail: ${trimmedEmail}${phoneLine}\n\nMessage:\n${trimmedMessage}`,
      }),
    })

    const result = await resendResponse.json()

    if (!resendResponse.ok) {
      return res.status(500).json({ error: result?.message || 'Unable to send email' })
    }

    return res.status(200).json({ ok: true, id: result.id })
  } catch {
    return res.status(500).json({ error: 'Unable to send email' })
  }
}

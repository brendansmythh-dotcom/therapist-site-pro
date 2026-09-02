import { useEffect, useRef, useState } from 'react'
import { hasFeature } from '../lib/features.js'

export default function FadeIn({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(!hasFeature('animations'))

  useEffect(() => {
    if (!hasFeature('animations')) return undefined

    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`fade-in${visible ? ' fade-in--visible' : ''}${className ? ` ${className}` : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

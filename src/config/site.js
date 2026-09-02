/**
 * Site configuration — customize this file for each client.
 *
 * Starter clients: set tier to 'starter' and turn off pro features.
 * Pro clients: set tier to 'pro' and enable the add-ons they purchased.
 */
export const site = {
  tier: 'pro',

  name: 'Your Name',
  title: 'Licensed Clinical Psychologist',
  tagline: 'Compassionate therapy for anxiety, life transitions, and emotional wellbeing.',
  location: 'Toronto, ON · In-person & virtual sessions',
  siteUrl: 'https://your-domain.com',

  features: {
    booking: true,
    gallery: true,
    blog: true,
    seo: true,
    analytics: true,
    animations: true,
  },

  meta: {
    description:
      'Your Name offers warm, evidence-based therapy for adults navigating anxiety, stress, and life transitions. Book a free consultation.',
    keywords: 'therapist, psychotherapy, anxiety counseling, Toronto therapist, virtual therapy',
    ogImage: '/og-image.svg',
  },

  nav: [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Work', path: '/work' },
    { label: 'Gallery', path: '/gallery', feature: 'gallery' },
    { label: 'Blog', path: '/blog', feature: 'blog' },
    { label: 'Contact', path: '/contact' },
  ],

  booking: {
    defaultBookingUrl: 'https://calendly.com/brendansmythh/30min',
    bookingDisplayMode: 'modal',
    label: 'Book',
    modalPickerTitle: 'What would you like to book?',
    inlineHeadline: 'Schedule online',
    inlineSubhead: 'Choose a free consultation or a therapy session, then pick a time that works for you.',
    options: [
      {
        id: 'consultation',
        label: 'Free consultation',
        description: 'A brief introductory call to discuss your needs and see if we are a good fit.',
        duration: '15 minutes',
        url: 'https://calendly.com/brendansmythh/15-minute-consultation',
      },
      {
        id: 'session',
        label: 'Therapy session',
        description: 'A full 60-minute appointment for ongoing therapy work.',
        duration: '60 minutes',
        url: 'https://calendly.com/brendansmythh/30min',
      },
    ],
  },

  instagram: {
    handle: '@yourpractice',
    url: 'https://instagram.com/yourpractice',
  },

  hero: {
    eyebrow: 'Welcome',
    headline: 'A calm space to heal, grow, and move forward.',
    headlineItalicPhrase: 'forward.',
    subhead:
      'I help adults work through anxiety, burnout, and major life changes with practical tools and genuine care.',
    primaryCta: { label: 'Book a Session', path: '/contact', useBooking: true },
    secondaryCta: { label: 'Learn About My Approach', path: '/about' },
    trustBar: [
      'Licensed Clinical Psychologist',
      '10+ Years Experience',
      'Currently Accepting New Clients',
    ],
  },

  about: {
    headline: 'About me',
    intro:
      'I am a licensed clinical psychologist with over ten years of experience supporting adults through difficult seasons of life. My work is collaborative, grounded in research, and tailored to what you need right now.',
    bio: [
      'Before opening my private practice, I worked in community mental health and hospital settings, where I learned how to meet people where they are — without judgment and at a pace that feels safe.',
      'I draw from cognitive-behavioral therapy, mindfulness-based approaches, and attachment-informed care. Sessions are conversational and structured enough to create real change.',
      'I welcome clients of all backgrounds and identities. My office is a LGBTQ+ affirming space.',
    ],
    credentials: [
      'Ph.D., Clinical Psychology — University of Toronto',
      'Registered Psychologist — College of Psychologists of Ontario',
      'Member, Canadian Psychological Association',
    ],
    photo: '/placeholder-headshot.svg',
    photoAlt: 'Your Name, licensed therapist',
  },

  work: {
    headline: 'How I can help',
    subhead:
      'Every client is different. These are the areas I most often support — we can focus on one or combine approaches as needed.',
    services: [
      {
        title: 'Anxiety & Stress',
        description:
          'Learn to quiet racing thoughts, manage physical symptoms, and build confidence in situations that once felt overwhelming.',
      },
      {
        title: 'Life Transitions',
        description:
          'Navigate career changes, relationship shifts, grief, or becoming a parent with clarity and self-compassion.',
      },
      {
        title: 'Depression & Burnout',
        description:
          'Reconnect with motivation, set healthier boundaries, and rebuild a life that feels meaningful again.',
      },
      {
        title: 'Self-Esteem & Identity',
        description:
          'Explore who you are beyond expectations — and develop a steadier, kinder relationship with yourself.',
      },
    ],
    approach: {
      headline: 'My approach',
      points: [
        'Warm, collaborative, and non-judgmental',
        'Evidence-based methods adapted to your goals',
        'Practical strategies you can use between sessions',
        'Flexible scheduling — in-person or secure video',
      ],
    },
    sessionInfo: {
      headline: 'Session details',
      items: [
        { label: 'Session length', value: '50 minutes' },
        { label: 'Format', value: 'In-person or telehealth' },
        { label: 'Fee', value: '$180 / session' },
        { label: 'Insurance', value: 'Receipts provided for extended health benefits' },
      ],
    },
  },

  gallery: {
    headline: 'Office & space',
    subhead: 'A warm, private environment designed to help you feel at ease.',
    images: [
      {
        src: '/gallery/space-1.svg',
        alt: 'Therapy office waiting area with soft lighting',
        caption: 'Waiting area',
      },
      {
        src: '/gallery/space-2.svg',
        alt: 'Comfortable therapy room with chairs and plants',
        caption: 'Session room',
      },
      {
        src: '/gallery/space-3.svg',
        alt: 'Calm detail of books and tea on a side table',
        caption: 'A quiet moment',
      },
      {
        src: '/gallery/space-4.svg',
        alt: 'Building exterior on a tree-lined street',
        caption: 'Office location',
      },
      {
        src: '/gallery/space-5.svg',
        alt: 'Soft textiles and neutral decor in the therapy space',
        caption: 'Comfort & privacy',
      },
      {
        src: '/gallery/space-6.svg',
        alt: 'Window light in a peaceful consultation room',
        caption: 'Natural light',
      },
    ],
  },

  blog: {
    headline: 'Reflections & resources',
    subhead: 'Short articles on mental health, therapy, and everyday wellbeing.',
  },

  contact: {
    headline: 'Get in touch',
    subhead:
      'Reach out for a free 15-minute consultation. I typically respond within one business day.',
    email: 'hello@yourpractice.com',
    phone: '(416) 555-0123',
    bookingUrl: 'https://calendly.com/brendansmythh/30min',
    office: '123 Wellness Street, Suite 200\nToronto, ON M5V 1A1',
    hours: 'Monday – Thursday, 9am – 6pm',
    formNote: 'Your message is confidential. Please do not include sensitive clinical details in this form.',
  },

  footer: {
    disclaimer:
      'This website is for informational purposes only and does not constitute a therapeutic relationship. If you are in crisis, call 988 or go to your nearest emergency room.',
    copyright: '© 2026 Your Name. All rights reserved.',
  },
}

export function getVisibleNav() {
  return site.nav.filter((item) => !item.feature || site.features[item.feature])
}

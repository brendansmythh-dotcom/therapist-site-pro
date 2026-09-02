export const blogPosts = [
  {
    slug: 'managing-anxiety-daily',
    title: 'Small daily practices that help ease anxiety',
    date: '2026-02-12',
    excerpt:
      'Anxiety rarely disappears overnight. These gentle, evidence-informed habits can help you feel more grounded between sessions.',
    tags: ['Anxiety', 'Self-care'],
    body: [
      'When anxiety shows up, your nervous system is trying to protect you — even when the threat is not immediate. The goal is not to eliminate anxiety entirely, but to build a steadier relationship with it.',
      'Start with the basics: name what you feel, slow your breathing for two minutes, and choose one small action that moves you forward. A short walk, a glass of water, or sending one email can signal safety to your body.',
      'Consistency matters more than intensity. Pick one practice and repeat it for a week before adding another. Therapy can help you tailor these tools to your patterns and triggers.',
    ],
  },
  {
    slug: 'what-to-expect-first-session',
    title: 'What to expect in your first therapy session',
    date: '2026-01-28',
    excerpt:
      'Feeling nervous before your first appointment is normal. Here is how a typical intake session usually unfolds.',
    tags: ['Getting started'],
    body: [
      'Your first session is primarily about getting to know each other. I will ask about what brought you in, your history, and what you hope to change. You are always in control of how much you share.',
      'We will also talk about logistics: session length, fees, cancellation policy, and confidentiality. There is no pressure to commit on the spot — many people use the first meeting to see if the fit feels right.',
      'Come as you are. You do not need a polished story or perfect words. Showing up is already a meaningful step.',
    ],
  },
  {
    slug: 'boundaries-and-burnout',
    title: 'Why boundaries are not selfish',
    date: '2025-12-05',
    excerpt:
      'If you are exhausted from saying yes to everyone else, boundary work can feel uncomfortable — and necessary.',
    tags: ['Burnout', 'Relationships'],
    body: [
      'Burnout often grows in the gap between what you can give and what you are expected to give. Boundaries are not walls; they are clarity about your limits so you can show up sustainably.',
      'Practice short, kind scripts: "I cannot take that on this week." "I need time to think before I answer." "That does not work for me." You may feel guilt at first — that does not mean you are doing something wrong.',
      'In therapy, we explore where your boundaries were learned, what you fear will happen if you set them, and how to rebuild trust with yourself.',
    ],
  },
]

export function getPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug)
}

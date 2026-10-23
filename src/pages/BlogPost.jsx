import { Link, Navigate, useParams } from 'react-router-dom'
import { getPostBySlug } from '../config/blog.js'
import { site } from '../config/site.js'
import FadeIn from '../components/FadeIn.jsx'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) return <Navigate to="/blog" replace />

  const formattedDate = new Date(post.date).toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })

  return (
    <>
      <section className="page-hero page-hero--pro page-hero--article">
        <FadeIn>
          <Link to="/blog" className="back-link">← Back to blog</Link>
          <p className="blog-card__date">{formattedDate}</p>
          <h1>{post.title}</h1>
          <p className="page-hero__lead">{post.excerpt}</p>
        </FadeIn>
      </section>

      <section className="section article-body">
        <FadeIn>
          <div className="prose">
            {post.body.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="section section--soft">
        <FadeIn>
          <div className="article-cta">
            <h2>Want to talk about this?</h2>
            <p>Reach out to schedule a consultation with {site.name}.</p>
            <Link to="/contact" className="btn btn--primary">Get in touch</Link>
          </div>
        </FadeIn>
      </section>
    </>
  )
}

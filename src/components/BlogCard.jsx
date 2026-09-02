import { Link } from 'react-router-dom'
import FadeIn from './FadeIn.jsx'

export default function BlogCard({ post, index = 0 }) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <FadeIn delay={index * 90}>
      <article className="blog-card">
        <p className="blog-card__date">{formattedDate}</p>
        <h2>
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className="blog-card__excerpt">{post.excerpt}</p>
        {post.tags?.length ? (
          <ul className="blog-card__tags">
            {post.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        ) : null}
        <Link to={`/blog/${post.slug}`} className="blog-card__link">
          Read article →
        </Link>
      </article>
    </FadeIn>
  )
}

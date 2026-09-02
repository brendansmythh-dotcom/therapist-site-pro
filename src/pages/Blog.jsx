import { Link } from 'react-router-dom'
import { blogPosts } from '../config/blog.js'
import { site } from '../config/site.js'
import BlogCard from '../components/BlogCard.jsx'
import FadeIn from '../components/FadeIn.jsx'

export default function Blog() {
  return (
    <>
      <section className="page-hero page-hero--pro">
        <FadeIn>
          <p className="eyebrow">Blog</p>
          <h1>{site.blog.headline}</h1>
          <p className="page-hero__lead">{site.blog.subhead}</p>
        </FadeIn>
      </section>

      <section className="section">
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </section>
    </>
  )
}

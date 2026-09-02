import { Routes, Route } from 'react-router-dom'
import { hasFeature } from './lib/features.js'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Work from './pages/Work.jsx'
import Contact from './pages/Contact.jsx'
import Gallery from './pages/Gallery.jsx'
import Blog from './pages/Blog.jsx'
import BlogPost from './pages/BlogPost.jsx'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        {hasFeature('gallery') ? <Route path="/gallery" element={<Gallery />} /> : null}
        {hasFeature('blog') ? (
          <>
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </>
        ) : null}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}

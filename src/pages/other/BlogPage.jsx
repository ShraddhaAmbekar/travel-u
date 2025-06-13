import React from 'react'
import BlogCard from '../ui/BlogCard'
import blogPosts from '../../data/blogData'

const BlogPage = () => {
  return (
    <>
          <section className="blog-section">
                <h2>Blog section: Mindful Retreats</h2>
                <div className="blog-container blog-page">
                    {blogPosts.map((post, index) => (
                        <BlogCard key={index} {...post} />
                    ))}
                </div>
            </section>
    </>
  )
}

export default BlogPage

// BlogSection.jsx
import React from 'react';
import BlogCard from "../ui/BlogCard"
import blogPosts from "../../data/blogData"
import YoutubeData from "../../data/YoutubeData"
import "./BlogSection.css"


const BlogSection = () => {
    return (
        <>
            <section className="blog-section">
                <h2>Blog section: Mindful Retreats</h2>
                <div className="blog-container">
                    {blogPosts.map((post, index) => (
                        <BlogCard key={index} {...post} />
                    ))}
                </div>
            </section>
            <section className="blog-section mb-5">
                <h2>Youtube section: Mindful Retreats</h2>
                <div className="blog-container">

                    {YoutubeData.map((post, index) => (
                        <BlogCard key={index} {...post} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default BlogSection;


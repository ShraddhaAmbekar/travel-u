// BlogSection.jsx
import React from 'react';
import BlogCard from '../components/ui/BlogCard';

const blogPosts = [
    {
        imageUrl: "https://tse1.mm.bing.net/th?id=OIP._BYfOurWW-Vdq9Nen7ZN4gHaE8&pid=Api&P=0&h=180",
        title: "Conquer The Kuari Pass",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ipsum esse nulla ad! Autem, rerum!"
    },
    {
        imageUrl: "https://tse1.mm.bing.net/th?id=OIP.E_1Vxpy6EV1gTbpFP_j0KwHaE8&pid=Api&P=0&h=180",
        title: "Valley of Flowers",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ipsum esse nulla ad! Autem, rerum!"
    },
    {
        imageUrl: "https://tse1.mm.bing.net/th?id=OIP._BYfOurWW-Vdq9Nen7ZN4gHaE8&pid=Api&P=0&h=180",
        title: "Conquer The Kuari Pass",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ipsum esse nulla ad! Autem, rerum!"
    },
    {
        imageUrl: "https://tse1.mm.bing.net/th?id=OIP.E_1Vxpy6EV1gTbpFP_j0KwHaE8&pid=Api&P=0&h=180",
        title: "Kuari Pass",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ipsum esse nulla ad! Autem, rerum!"
    }
];

const BlogSection = () => {
    return (
      <  div>
        <section className="blog-section pb-5">
            <h2>Blog section: Mindful Retreats</h2>
            <div className="blog-container">
                {blogPosts.map((post, index) => (
                    <BlogCard key={index} {...post} />
                ))}
            </div>

        </section>
        <section className="blog-section pb-5">
            <h2>Youtube section: Mindful Retreats</h2>
            <div className="blog-container">
                {blogPosts.map((post, index) => (
                    <BlogCard key={index} {...post} />
                ))}
            </div>
        </section>
        </div>
    );
};

export default BlogSection;


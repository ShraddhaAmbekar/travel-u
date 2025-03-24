import React from 'react'; 
import "./BlogCard.css"

const BlogCard = ({ imageUrl, title, description }) => {
    return (
        <div className="blog-card">
            <img src={imageUrl} className="blog-img" alt={title} />
            <div className="blog-content">
                <h6>{title}: {description}</h6>
            </div>
        </div>
    );
};

export default BlogCard;

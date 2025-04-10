import React, { useState } from 'react';
import './AllImages.css';

const allImages = [
  {
    title:'shdks',
    src: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Destination',
  },
  {
    src: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39',
    category: 'Stay',
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5',
    category: 'Activity',
  },
  {
    src: 'https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa',
    category: 'Sightseeing',
  },
  {

  src:'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'  ,
   category: 'Activity',
  },
  {
    src: 'https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa',
    category: 'Stay',
  },
];

const categories = ['All', 'Destination', 'Stay', 'Activity', 'Sightseeing'];

const AllImages = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages =
    selectedCategory === 'All'
      ? allImages
      : allImages.filter((img) => img.category === selectedCategory);

  return (
    <div className="container py-4 text-white">
      {/* Filter Buttons */}
      <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`btn btn-sm ${selectedCategory === cat ? 'btn-light' : 'btn-outline-light'}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="image-grid">
        {filteredImages.map((img, index) => (
          <div key={index} className="grid-item">
            <img src={img.src} alt={img.category} className="big-img" loading='lazy'/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllImages;

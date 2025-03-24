import React from 'react';
import galleryData from '../../data/gallaryData';

const GallerySection = () => {
  return (
    <div className="container-fluid p-0 my-3">
      <div className="gallery-section d-flex flex-wrap g-0">
        <div className="gallery-item front-title text-uppercase">
          <h2>Land of Gods</h2>
        </div>

        {galleryData.map((item) => (
          <div key={item.id} className="gallery-item">
            <div className="flip-card">
              <div className="front">
                <img src={item.img} alt={item.title} />
                <div className="centered">{item.title}</div>
              </div>
              <div className="back">
                <span className="card-content">{item.back}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GallerySection

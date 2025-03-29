import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import tours from "../../data/TourData";
import TourCard from "../ui/TourCard";


const TourCarousel = () => {
  const carouselRef = useRef(null);
  const cardWidth = 370 + 30; // Card width + margin (adjust if needed)

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= cardWidth;
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += cardWidth;
    }
  };

  return (
    <div className="carousel-container">
      <button className="carousel-btn prev" onClick={scrollLeft}>
        &#10094;
      </button>

      <div className="carousel-wrapper" ref={carouselRef}>
        {tours.map((tour) => (
          <div className="tour-card" key={tour.id}> 
            <TourCard
              id={tour.id}
              imageUrl={tour.imageUrl}
              title={tour.title}
              duration={tour.duration}
              price={tour.price}
              oldPrice={tour.oldPrice}
            />
          </div>
        ))}
      </div>

      <button className="carousel-btn next" onClick={scrollRight}>
        &#10095;
      </button>
    </div>
  );
};

export default TourCarousel;

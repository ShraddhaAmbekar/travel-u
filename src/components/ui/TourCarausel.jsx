import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TourCarousel.css"

const tours = [
  {
    id: 1,
    img: "https://tse3.mm.bing.net/th?id=OIP.SnBdK9GJbj0H7kI6_azEVwHaEK&pid=Api&P=0&h=180",
    title: "Conquer The Kuari Pass",
    duration: "6D - 5N",
    price: "₹ 9,200 / person",
    oldPrice: "₹ 10,000 / person",
  },
  {
    id: 2,
    img: "https://tse3.mm.bing.net/th?id=OIP.I3SRfjRD-kvhF16umTZP7gHaE8&pid=Api&P=0&h=180",
    title: "Discover The Magic of Chopta",
    duration: "5D - 4N",
    price: "₹ 8,500 / person",
    oldPrice: "₹ 9,500 / person",
  },
  {
    id: 3,
    img: "https://tse3.mm.bing.net/th?id=OIP.SnBdK9GJbj0H7kI6_azEVwHaEK&pid=Api&P=0&h=180",
    title: "Rishikesh Adventure Camp",
    duration: "3D - 2N",
    price: "₹ 5,000 / person",
    oldPrice: "₹ 6,500 / person",
  },
  {
    id: 4,
    img: "https://tse3.mm.bing.net/th?id=OIP.SnBdK9GJbj0H7kI6_azEVwHaEK&pid=Api&P=0&h=180",
    title: "Mussoorie Hill Retreat",
    duration: "4D - 3N",
    price: "₹ 7,200 / person",
    oldPrice: "₹ 8,000 / person",
  },
  {
    id: 5,
    img: "https://tse3.mm.bing.net/th?id=OIP.SnBdK9GJbj0H7kI6_azEVwHaEK&pid=Api&P=0&h=180",
    title: "Haridwar & Rishikesh Tour",
    duration: "5D - 4N",
    price: "₹ 6,500 / person",
    oldPrice: "₹ 7,500 / person",
  },
];

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
          <div key={tour.id} className="tour-card">
            <img src={tour.img} alt={tour.title} className="tour-img" />
            <div className="tour-content">
            <p className="duration">{tour.duration}</p>
              <h5>{tour.title}</h5>
             
              <p className="price">{tour.price} <span className="old-price">{tour.oldPrice}</span></p>

              <div className="action-buttons">
                            <div> <a href="tel:+911234567890" className="btn call-btn"><i className="fas fa-phone"></i></a>
                                <a href="https://wa.me/911234567890" target="_blank" className="btn whatsapp-btn"><i
                                        className="fab fa-whatsapp"></i></a>
                            </div>

                            <button className="btn callback-btn">Request Callback</button>
                        </div>
            </div>

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

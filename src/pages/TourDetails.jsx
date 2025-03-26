import React from "react";
import { useLocation } from "react-router-dom";

const TourDetails = () => {
  const location = useLocation();
  const tour = location.state; 

  if (!tour) {
    return <h2>No tour details available</h2>;
  }

  return (
    <div className="tour-details">
      <h2>{tour.title}</h2>
      <img src={tour.imageUrl} alt={tour.title} />
      <p>Duration: {tour.duration}</p>
      <p>Price: ₹{tour.price}</p>
      <p>Old Price: ₹{tour.oldPrice}</p>
    </div>
  );
};

export default TourDetails;

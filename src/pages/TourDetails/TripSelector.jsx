// TripSelector.js
import React from 'react';
import { useState } from 'react';

const TripSelector = ({
  carouselRef,
  selectedOption,
  tripOptions,
  selectedDays,
  setSelectedDays,
  selectedHotelCategory,
  setselectedHotelCategory,
  scroll
  
}) => {

  const [selectedRoute, setSelectedRoute] = useState(tripOptions.routes || "");

  return (
    <div className="container mt-4">
      <h3 className="trip-heading">Choose Trip Duration</h3>
      <div className="trip-container">
        <div className="carousel-container">
          <button className="carousel-btn prev" onClick={() => scroll(carouselRef, -1)}>
            &#10094;
          </button>

          <div className="carousel-wrapper" ref={carouselRef}>
            {tripOptions.map((option) => (
              <div
                key={option.days}
                className={`trip-card ${selectedDays === option.days ? "active" : ""}`}
                onClick={() => setSelectedDays(option.days)}
              >
                <div className="trip-img-container">
                  {option.image && option.image.length > 0 && (
                    <img
                      src={option.image}
                      alt={`${option.days}-day trip`}
                      loading='lazy'
                      className="trip-image"
                    />
                  )}
                  <h3 className="trip-title">{option.days} days</h3>
                </div>
                <p className="trip-subtitle">Starting From</p>
                <h4 className="trip-price">{option.price}</h4>
              </div>
            ))}
          </div>

          <button className="carousel-btn next" onClick={() => scroll(carouselRef, 1)}>
            &#10095;
          </button>
        </div>
      </div>

      {/* Tour Details Section */}
      <div className="row mt-4">
        {/* Left Side - Tour Information */}
        <div className="col-lg-10">
          {/* About Tour */}
          <div className="card mb-4">
        
              <h3 className="trip-heading">About the Tour</h3>
              <p>Explore Dubai in 3 days with an exciting itinerary including Burj Khalifa, Desert Safari, and Dubai Mall shopping.</p>
        
          </div>
          <div className="card mb-4">
           
              <h3 className="trip-heading">Destination Routes</h3>
              <div className="list-group list-group-flush">

                {selectedOption?.routes?.map((category, index) => (
                  <label key={index} className={`routes ${selectedRoute === category ? "active" : ""}`}>
                    <input
                      type="radio"
                      name="category"
                      value={category}
                      checked={selectedRoute === category}
                      onChange={() => setSelectedRoute(category)}
                    />
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </label>
                ))}
            
            </div>
          </div>
          <div className="card mb-4">
      
              <h3 className="trip-heading">Stay Category</h3>
              <div className="stay-category-buttons">
                {selectedOption?.HotelDetails &&
                  Object.keys(selectedOption.HotelDetails[0]).map((category) => (
                    <label
                      key={category}
                      className={`hotel-btn ${selectedHotelCategory === category ? "active" : ""}`}
                    >
                      <input
                        type="radio"
                        name="Category"
                        value={category}
                        checked={selectedHotelCategory === category}
                        onChange={() => setselectedHotelCategory(category)}
                      />
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </label>
                  ))}
              </div>
          
          </div>


          {/* Tour Highlights */}
          <div className="card mb-4">
              <h3 className="trip-heading">Tour Highlights</h3>
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga totam dolorem architecto ut aspernatur, laborum non a illum doloremque ex vel veritatis, numquam minima recusandae. Atque aliquam natus incidunt, fugiat corrupti quod eius tempora ex nisi illo, sit minima quae dolor. Eligendi ut saepe consequatur obcaecati cum officia! Deserunt, quos.
              </div>   
          </div>

          <div className='card mb-4'>
            <h3>What's inside the packages?</h3>
            <div className="inclusion-exclusion card">
              <div className='row'>
                <div className='col-md-6 col-sm-12 inclusion-exclusion-card'>
                  <ul>
                    <h5>Inclusion</h5>
                    <li>Lorem ipsum dolor sit amet c</li>
                    <li> amet consectetur adipisicing elit. Minus, mollitia!</li>
                    <li>Lorem ipsum  amet consectetur adipisicing elit. Minus, mollitia!</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, mollitia!</li>
                  </ul>
                </div>
                <div className='col-md-6 col-sm-12 inclusion-exclusion-card'>
                  <ul>
                    <h5>Exclusion</h5>
                    <li>Lorem ipsuolor sit amet consectetur adipisicing elit. Minus, mollitia!</li>
                    <li>Lorem ipsum dolor sit  adipisicing elit. Minus, mollitia!</li>
                    <li>Lorem ipsum dolor sit dipisicing elit. Minus, mollitia!</li>
                    <li>olor sit dipisicing elit. Minus, mollitia!</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

export default TripSelector;

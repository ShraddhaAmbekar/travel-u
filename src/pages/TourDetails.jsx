import React from 'react';
import { useLocation } from "react-router-dom";
import { useRef, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './TourDetails.css';
import tripOptions from '../data/TourDetails';
import TourCarousel from './sections/TourCarausel';

const TourDetails = () => {
  const carouselRefs = useRef([]);
  const carouselRef2 = useRef(null);
  const cardWidth = 400;
  const location = useLocation();
  const tour = location.state;

  const [selectedDays, setSelectedDays] = useState(tour.day);
  const [selectedCategory, setselectedCategory] = useState("Itinerary");
  const [selectedHotelCategory, setselectedHotelCategory] = useState("standard");
  const [selectedRoute, setSelectedRoute] = useState(tripOptions[0].routes[0]);


  const selectedOption = tripOptions.find(option => option.days === selectedDays);
  if (!tour || Object.keys(tour).length === 0) {
    return <h2>No tour details available</h2>;
  }

  const scroll = (ref, direction) => {
    if (ref.current) {
      console.log("Before Scroll:", ref.current.scrollLeft);
      ref.current.scrollLeft += direction * cardWidth;
      console.log("After Scroll:", ref.current.scrollLeft);
    } else {
      console.log("Error: ref is null");
    }
  };

  return (
    <div className='container-fluid'>

      <div className="container tour-details mt-4e">
        {/* Tour Image */}
        <div className="row mt-3">
          <div className="col-lg-8">
            <img src={tour.imageUrl} alt={tour.title} loading="lazy" className="tour-details-img rounded shadow-sm" />
          </div>
        </div>
        {/* Tour Header */}
        <div className="row">
          <div className="col-lg-8">
            <h1 className="fw-bold">{tour.title}</h1>
            <p className="">Dubai, United Arab Emirates</p>
            <div className="align-items-center">
              <p >{selectedOption.days}D - {selectedOption.days - 1}N</p>
              {selectedHotelCategory && (
                <p className="price">
                  ₹{selectedOption?.HotelDetails?.[0]?.[selectedHotelCategory]?.price} /per person
                </p>
              )}
              {selectedHotelCategory && (
                <p className="old-price">
                  ₹{selectedOption?.HotelDetails?.[0]?.[selectedHotelCategory]?.oldPrice} /per person
                </p>
              )}
              <span className="badge bg-success fs-5 me-2">4.8 ★</span>
              <span className="text-primary fw-bold">Excellent</span>
              <span className="ms-2">(564 Reviews)</span>
            </div>
          </div>
        </div>
        <div className="container">
          {/* Horizontal Scrollable Section */}
          <div className="container mt-4">
            <h3 className="trip-heading">Choose Trip Duration</h3>

            {/* Scrollable Section */}
            <div className="trip-container">
              <div className="carousel-container">
                <button className="carousel-btn prev" onClick={() => scroll(carouselRef2, -1)}>
                  &#10094;
                </button>
                <div className="carousel-wrapper" ref={carouselRef2}>
                  {tripOptions.map((option) => (
                    <div
                      key={option.days}
                      className={`trip-card ${selectedDays === option.days ? "active" : ""}`}
                      onClick={() => setSelectedDays(option.days)

                      }
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

                <button className="carousel-btn next" onClick={() => scroll(carouselRef2, 1)}>
                  &#10095;
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Tour Details Section */}
        <div className="row mt-4">
          {/* Left Side - Tour Information */}
          <div className="col-lg-10">
            {/* About Tour */}
            <div className="card mb-4">
              <div className="card-body">
                <h3 className="trip-heading">About the Tour</h3>
                <p>Explore Dubai in 3 days with an exciting itinerary including Burj Khalifa, Desert Safari, and Dubai Mall shopping.</p>
              </div>
            </div>
            <div className="card mb-4">
              <div className="card-body">
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
            </div>

            <div className="card mb-4">
              <div className="card-body">
                <h3 className="trip-heading">Stay Category</h3>
                <div className="stay-category-buttons">
                  {selectedOption?.HotelDetails &&
                    Object.keys(selectedOption.HotelDetails[0]).map((category, index) => (
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
            </div>


            {/* Tour Highlights */}
            <div className="card mb-4">
              <div className="card-body">
                <h3 className="trip-heading">Tour Highlights</h3>
                <div>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga totam dolorem architecto ut aspernatur, laborum non a illum doloremque ex vel veritatis, numquam minima recusandae. Atque aliquam natus incidunt, fugiat corrupti quod eius tempora ex nisi illo, sit minima quae dolor. Eligendi ut saepe consequatur obcaecati cum officia! Deserunt, quos.
                </div>
              </div>
            </div>

            {/* Itinerary */}
            <div className="card mb-4">
              <div className="card-body">
                <div className="category-buttons">
                  {["Itinerary", "activity", "stay"].map((category) => (
                    <label key={category} className={`category-btn ${selectedCategory === category ? "active" : ""}`}>

                      <input
                        type="radio"
                        name="Category"
                        value="Itinerary"
                        checked={selectedCategory === category}
                        onChange={() => setselectedCategory(category)}
                      />
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG6bWpMlSCf8YBIJgZHxj9kvIeoo80cdhabw&s" alt="img" className="itinerary-main-img" loading="lazy" />
                <div>
                  {selectedOption?.dayDetails?.map((dayInfo, index) => {
                    // Initialize ref if not already present
                    if (!carouselRefs.current[index]) {
                      carouselRefs.current[index] = React.createRef();
                    }

                    return (
                      <div key={index} className="day-info">
                        <button
                          className="btn day-details"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#multiCollapse${dayInfo.day}`}
                          aria-expanded="false"
                          aria-controls={`multiCollapse${dayInfo.day}`}
                        >
                          Day {dayInfo.day}: {dayInfo.dayTitle}
                        </button>

                        <div
                          className={`collapse multi-collapse${dayInfo.day}`}
                          id={`multiCollapse${dayInfo.day}`}
                        >
                          <div className="card card-body">
                            {dayInfo.dayDiscription}
                            <div className="container mt-4">
                              <h5 className="trip-heading">Images</h5>
                              <div className="carousel-container">
                                <button
                                  className="carousel-btn prev"
                                  onClick={() => scroll(carouselRefs.current[index], -1)}
                                >
                                  &#10094;
                                </button>
                                <div
                                  className="carousel-wrapper"
                                  ref={carouselRefs.current[index]}>
                                  {dayInfo.image.map((img, i) => (
                                    <div key={i} className="col-md-4 mb-3 image-gallery">
                                      <img
                                        src={img}
                                        alt={`Tour ${i}`}
                                        className="img-fluid rounded shadow"
                                      />
                                    </div>
                                  ))}
                                </div>
                                <button
                                  className="carousel-btn next"
                                  onClick={() => scroll(carouselRefs.current[index], 1)}
                                >
                                  &#10095;
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container '>
          <h3>Whats inside the packages?</h3>
          <div className="inclusion-exclusion mb-5">
            <div className='row'>
              <div className='card col-md-6 col-sm-12 inclusion-exclusion-card '>
                <ul>
                  <h5>Inclusion</h5>
                  <li>Lorem ipsum dolor sit amet c</li>
                  <li> amet consectetur adipisicing elit. Minus, mollitia!</li>
                  <li>Lorem ipsum  amet consectetur adipisicing elit. Minus, mollitia!</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, mollitia!</li>
                </ul>
              </div>
              <div className='card col-md-6 col-sm-12 inclusion-exclusion-card'>
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


      <div className='mb-5'>
        <h3 className='related-trips'>Related Trips</h3>
        <TourCarousel />
      </div>
    </div>
  );
};

export default TourDetails;

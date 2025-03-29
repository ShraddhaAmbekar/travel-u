import React from 'react';

import { useLocation } from "react-router-dom";
import { useRef, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './TourDetails.css'; 
import Header from '../components/layout/Header';


const tripOptions = [
  { days: 3, price: "₹ 33,309", image: "https://tse4.mm.bing.net/th?id=OIP.mFLCYKuQOHj7C1W-scMbrAHaGU&pid=Api&P=0&h=180" },
  { days: 4, price: "₹ 37,950", image: "https://tse3.mm.bing.net/th?id=OIP.766_B8qkqsk4mITigAkRAwHaG_&pid=Api&P=0&h=180" },
  { days: 5, price: "₹ 68,550", image: "https://tse4.mm.bing.net/th?id=OIP.mFLCYKuQOHj7C1W-scMbrAHaGU&pid=Api&P=0&h=180" },
  { days: 6, price: "₹ 40,930", image: "https://tse3.mm.bing.net/th?id=OIP.766_B8qkqsk4mITigAkRAwHaG_&pid=Api&P=0&h=180" },
  { days: 7, price: "₹ 57,999", image: "https://tse3.mm.bing.net/th?id=OIP.766_B8qkqsk4mITigAkRAwHaG_&pid=Api&P=0&h=180" },
  { days: 8, price: "₹ 68,550", image: "https://tse4.mm.bing.net/th?id=OIP.mFLCYKuQOHj7C1W-scMbrAHaGU&pid=Api&P=0&h=180" },
  { days: 9, price: "₹ 37,950", image: "https://tse3.mm.bing.net/th?id=OIP.766_B8qkqsk4mITigAkRAwHaG_&pid=Api&P=0&h=180" },
  { days: 10, price: "₹ 37,950", image: "https://tse3.mm.bing.net/th?id=OIP.766_B8qkqsk4mITigAkRAwHaG_&pid=Api&P=0&h=180" },
  { days: 15, price: "₹ 68,550", image: "https://tse4.mm.bing.net/th?id=OIP.mFLCYKuQOHj7C1W-scMbrAHaGU&pid=Api&P=0&h=180" },]
const TourDetails = () => {
  const scrollRef = useRef(null);

  // Track drag state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const [selectedDays, setSelectedDays] = useState(5);
  const [selectedCategory, setselectedCategory] = useState("Itinerary");
  const [selectedHotelCategory, setselectedHotelCategory] = useState("standard");



  const location = useLocation();
  const tour = location.state;

  if (!tour || Object.keys(tour).length === 0) {
    return <h2>No tour details available</h2>;
  }

  // Start Dragging
  const startDrag = (e) => {
    isDragging.current = true;
    startX.current = e.pageX || e.touches[0].pageX; // Support touch
    scrollLeft.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = "grabbing"; // Visual feedback
  };

  // Dragging
  const onDrag = (e) => {
    if (!isDragging.current) return;
    const x = e.pageX || e.touches[0].pageX; // Handle touch drag
    const walk = (x - startX.current) * 2; // Adjust speed
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // Stop Dragging
  const stopDrag = () => {
    isDragging.current = false;
    scrollRef.current.style.cursor = "grab"; // Reset cursor
  };


  return (
    <div className='container-fluid'>
      <Header/>
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
            <p >{tour.duration}</p>
            <p className='price'>₹{tour.price} /per person</p>
            <p className='old-price'>₹{tour.oldPrice} /per person</p>
            <span className="badge bg-success fs-5 me-2">4.8 ★</span>
            <span className="text-primary fw-bold">Excellent</span>
            <span className="ms-2">(564 Reviews)</span>
          </div>
        </div>
      </div>


      <div className="trip-container">
        {/* Horizontal Scrollable Section */}
        <div className="container mt-4">
          <h3 className="trip-heading">Choose Trip Duration</h3>

          {/* Scrollable Section */}
          <div
            className="trip-scroll-container"
            ref={scrollRef}
            onMouseDown={startDrag}
            onMouseMove={onDrag}
            onMouseUp={stopDrag}
            onMouseLeave={stopDrag}
            onTouchStart={startDrag}  // For mobile support
            onTouchMove={onDrag}  // For mobile support
            onTouchEnd={stopDrag}  // For mobile support
          >
            {tripOptions.map((option) => (
              <div
                key={option.days}
                className={`trip-card ${selectedDays === option.days ? "active" : ""}`}
                onClick={() => setSelectedDays(option.days)}
              >
                <div className="trip-img-container">
                  <img src={option.image} alt={`${option.days}-day trip`} className="trip-image" />
                  <h3 className="trip-title">{option.days} days</h3>
                </div>
                <p className="trip-subtitle">Starting From</p>
                <h4 className="trip-price">{option.price}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tour Details Section */}
      <div className="row mt-4">
        {/* Left Side - Tour Information */}
        <div className="col-lg-8">
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
              <ul className="list-group list-group-flush">
                <li className="routes">Deharadun--chardham</li>
                <li className="routes">Deharadun--chardham</li>
                <li className="routes">Deharadun--chardham</li>
              </ul>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <h3 className="trip-heading">Stay Category</h3>
              <div className="stay-category-buttons">
                {["standard", "luxury", "deluxe"].map((category) => (
                  <label key={category} className={`hotel-btn ${selectedHotelCategory === category ? "active" : ""}`}>
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
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG6bWpMlSCf8YBIJgZHxj9kvIeoo80cdhabw&s" alt="img" className="itinerary-main-img" loading="lazy"/>
              <div>
                <button className="btn day-details" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse1" aria-expanded="false" aria-controls="collapseExample1">
                  📍 Day 1: Arrival & Visit
                </button>
                <div className="collapse multi-collapse1" id="collapseExample1">
                  <div className="card card-body">
                    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                    <div className='itinerary-gallery'>
                      <div className='card itinerary-gallery-img'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVd-K5o4JlsaKV19TxWsxp5hhbHQSbvSckWA&s" alt="img-2" />
                      </div>
                      <div className='card itinerary-gallery-img'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVd-K5o4JlsaKV19TxWsxp5hhbHQSbvSckWA&s" alt="img-2" />
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button className="btn text-white day-details" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse2" aria-expanded="false" aria-controls="collapseExample2">
                  🏜️ Day 2: Desert Safari & BBQ Dinner
                </button>
                <div className="collapse multi-collapse2" id="collapseExample2">
                  <div className="card card-body">
                    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                  </div>
                  <div className='itinerary-gallery'>
                      <div className='card itinerary-gallery-img'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVd-K5o4JlsaKV19TxWsxp5hhbHQSbvSckWA&s" alt="img-2" />
                      </div>
                      <div className='card itinerary-gallery-img'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVd-K5o4JlsaKV19TxWsxp5hhbHQSbvSckWA&s" alt="img-2" />
                       
                      </div>
                    </div>
                </div>
              </div>
              <div>
                <button className="btn text-white day-details" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse3" aria-expanded="false" aria-controls="collapseExample3">
                  🛍️ Day 3: Dubai Mall Shopping
                </button>
                <div className="collapse multi-collapse3" id="collapseExample3">
                  <div className="card card-body">
                    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                  </div>
                  <div className='itinerary-gallery'>
                      <div className='card itinerary-gallery-img'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVd-K5o4JlsaKV19TxWsxp5hhbHQSbvSckWA&s" alt="img-2" />
                      </div>
                      <div className='card itinerary-gallery-img'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVd-K5o4JlsaKV19TxWsxp5hhbHQSbvSckWA&s" alt="img-2" />
                       
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
   








  );
};

export default TourDetails;

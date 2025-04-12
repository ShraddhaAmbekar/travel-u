import React from 'react';
import { useLocation } from "react-router-dom";
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './TourDetails.css';
import tripOptions from '../../data/TourDetails'
import TourCarousel from '../ui/TourCarausel';
import Itinerary from './Itinerary';
import Activity from './Activity'
import Stay from './Stay'
import TripSelector from "./TripSelector"

const TourDetails = () => {
  const carouselRefs = useRef([]);
  const carouselRef2 = useRef(null);
  const cardWidth = 400;
  const location = useLocation();
  const tour = location.state;
  const [selectedCategory, setselectedCategory] = useState("Itinerary");
  const [selectedHotelCategory, setselectedHotelCategory] = useState("standard");
  const [selectedDays, setSelectedDays] = useState(tour.day);
  const selectedOption = tripOptions.find(option => option.days === selectedDays);

  if (!tour || Object.keys(tour).length === 0) {
    return <h2>No tour details available</h2>;
  }

  const scroll = (ref, direction) => {
    if (ref.current) {
      console.log("Before Scroll:", ref.current.scrollLeft);
      ref.current.scrollLeft += direction * cardWidth;
      console.log("After Scroll:", ref.current.scrollLeft);
      console.log(selectedHotelCategory);
                
                
                console.log("Selected Category: ", selectedCategory,  selectedOption );
    } else {
      console.log("Error: ref is null");
     
    }
  };

  return (
    <div className=''>
      <div className="container tour-details">
        {/* Tour Image */}

        <div className="row align-items-start">

          <div className="col-lg-7">
          <Link to="/all-images">
            <img
              src={tour.imageUrl}
              alt={tour.title}
              loading="lazy"
              className="tour-details-img"
            /></Link>
          </div>

          {/* Right side thumbnails */}
          <div className="thumb-box-container col-lg-3 d-flex flex-column">
            <div className="thumb-box pb-3">
              <Link to="/all-images">
                <img
                  src="https://media.istockphoto.com/id/2175438682/photo/beautiful-businesswoman-greeting-her-female-business-partner.webp?a=1&b=1&s=612x612&w=0&k=20&c=WK9FvdBhsmZFbk70KwToBJmm1H2ettB3EP77w_eCVJ0="
                  alt="Destination"
                  className="thumb-img"
                />
              </Link>
            </div>

            <div className="thumb-box position-relative">
            <Link to="/all-images">
                <img
                  src="https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Sightseeing"
                  className="thumb-img"
                />
              </Link>
              <Link to="/all-images">
                <button className="view-all-btn btn btn-dark btn-sm">View All Images</button>
                </Link>
            </div>
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

                </p>)}
              {selectedHotelCategory && (
                <p className="old-price">
                  ₹{selectedOption?.HotelDetails?.[0]?.[selectedHotelCategory]?.oldPrice} /per person
                </p>)}

              <span className="badge bg-success fs-5 me-2">4.8 ★</span>
              <span className="text-primary fw-bold">Excellent</span>
              <span className="ms-2">(564 Reviews)</span>
            </div>
          </div>
        </div>

        <TripSelector
          selectedOption={selectedOption}
          tripOptions={tripOptions}
          selectedDays={selectedDays}
          setSelectedDays={setSelectedDays}
          selectedHotelCategory={selectedHotelCategory}
          setselectedHotelCategory={setselectedHotelCategory}
          scroll={scroll}
          carouselRef={carouselRef2}
        />

        {/* Tour Details Section */}
        <div className="row mt-4">
          {/* Itinerary */}
          <ul className="category-buttons">
            <li>
              <button
                className={`category-btn ${selectedCategory === "Itinerary" ? "active" : ""}`}

                onClick={() => setselectedCategory("Itinerary")}
              >
                Itinerary
              </button>
            </li>
            <li>
              <button
                className={`category-btn ${selectedCategory === "activity" ? "active" : ""}`}
                onClick={() => setselectedCategory("activity")}
              >
                Activity
              </button>
            </li>
            <li>
              <button
                className={`category-btn ${selectedCategory === "stay" ? "active" : ""}`}
                onClick={() => setselectedCategory("stay")}
              >
                Stay
              </button>
            </li>
          </ul>
          
          {selectedCategory === "Itinerary" && (
              <Itinerary
                selectedOption={selectedOption}
                carouselRefs={carouselRefs}
                scroll={scroll} />
            )}
       
          {selectedCategory === "activity" && <Activity/>}
          {selectedCategory === "stay" && <Stay />}
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

import React from "react";

const Itinerary = ({ selectedOption, carouselRefs, scroll}) => {
  return (
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG6bWpMlSCf8YBIJgZHxj9kvIeoo80cdhabw&s" alt="img" className="itinerary-main-img" loading="lazy" />
      {selectedOption?.dayDetails?.map((dayInfo, index) => {
        if (!carouselRefs.current[index]) {
          carouselRefs.current[index] = React.createRef();
        }
        
        return (
         <div className="container"  key={`day-${dayInfo.day}-${index}`} >
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

            <div className="collapse" id={`multiCollapse${dayInfo.day}`}>
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
                    <div className="carousel-wrapper" ref={carouselRefs.current[index]}>
                      {dayInfo.image.map((img, i) => (
                        <div key={i} className="image-gallery col-md-4 mb-3">
                          <img src={img} alt={`Tour ${i}`} className="img-fluid rounded shadow" />
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
         </div>
        );
      })}
    </div>
  );
};

export default Itinerary;

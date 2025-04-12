// components/FilterNavbar.jsx
import React from 'react';
import "./FilteredTrip.css"

const places = [
  { id: 1, title: 'Chardham', },
  { id: 2, title: 'Himalay',  },
  { id: 3, title: 'ekdham', },
  { id: 4, title: 'dodham',  },
  { id: 5, title: 'Nainital',  },
  { id: 6, title: 'Rushikesh',  },
];

const FilterNavbar = () => {
  return (
    <div className="container-fluid py-2 filter-navbar shadow">
      <div className="row justify-content-center">
        {places.map((place) => (
          <div
            key={place.id}
            className="col-auto text-center filter-item mx-2" 
          > 
            <div classplace="label">{place.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterNavbar;

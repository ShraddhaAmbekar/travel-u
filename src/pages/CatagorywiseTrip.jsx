import React from 'react'
import TourCarousel from './ui/TourCarausel'
import FilterNavbar from './FilteredTrip'

const CatagorywiseTrip = () => {
  
  return (
    <>
    
    <FilterNavbar/>
      <div className="eight-tours">
        <h2>Chardham</h2>
        <TourCarousel />
      </div>
      <div className="eight-tours">
        <h2>Ekdham</h2>
        <TourCarousel />
      </div>
      <div className="eight-tours">
        <h2>Dodham</h2>
        <TourCarousel />
      </div>
      <div className="eight-tours">
        <h2>Chardham</h2>
        <TourCarousel />
      </div>
    </>
  )
}

export default CatagorywiseTrip

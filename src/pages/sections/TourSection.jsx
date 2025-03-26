// ToursSection.jsx
import React from 'react';
import TourCard from '../ui/TourCard';
import TourCarousel from './TourCarausel';
import tours from '../../data/TourData';
import "./TourSection.css";

const TourSection = () => {

    return (
        <div className="eight-tours">
            <h2>Second tour section appears here: all information 8 cards</h2>
            <div className="container tour-container2">

                {tours.map((tour) => (
                    <TourCard
                        key={tour.id}
                        id={tour.id}
                        imageUrl={tour.imageUrl}
                        title={tour.title}
                        duration={tour.duration}
                        price={tour.price}
                        oldPrice={tour.oldPrice}
                    />
                ))}

            </div>
            <div className="tour-section mobile-carousel">
                <TourCarousel /></div>
        </div>
    );
};

export default TourSection;

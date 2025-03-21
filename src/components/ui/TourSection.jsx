// ToursSection.jsx
import React from 'react';
import TourCard from './TourCard';
import TourCarousel from './TourCarausel';

const ToursSection = () => {

    const tours = [
        {
            imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.upkiswG0XgHc9Vb8AydiawHaGN&pid=Api&P=0&h=180',
            title: 'Conquer The Kuari Pass',
            duration: '6D - 5N',
            price: 9200,
            oldPrice: 10000,
            category: "spirutual"
        },
        {
            imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.upkiswG0XgHc9Vb8AydiawHaGN&pid=Api&P=0&h=180',
            title: 'Conquer The Kuari Pass',
            duration: '6D - 5N',
            price: 9000,
            oldPrice: 10100,
            category: "religious"
        },
        {
            imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.upkiswG0XgHc9Vb8AydiawHaGN&pid=Api&P=0&h=180',
            title: 'Conquer The Kuari Pass',
            duration: '6D - 5N',
            price: 8900,
            oldPrice: 70000,
            category: "adventures"
        },
        {
            imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.upkiswG0XgHc9Vb8AydiawHaGN&pid=Api&P=0&h=180',
            title: 'Conquer The Kuari Pass',
            duration: '6D - 5N',
            price: 9900,
            oldPrice: 15000,
            category: "spirutual"
        },
        {
            imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.upkiswG0XgHc9Vb8AydiawHaGN&pid=Api&P=0&h=180',
            title: 'Conquer The Kuari Pass',
            duration: '6D - 5N',
            price: 9200,
            oldPrice: 10000,
            category: "adventures"
        },
        {
            imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.upkiswG0XgHc9Vb8AydiawHaGN&pid=Api&P=0&h=180',
            title: 'Conquer The Kuari Pass',
            duration: '6D - 5N',
            price: 9000,
            oldPrice: 10100,
            category: "adventures"
        },
        {
            imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.upkiswG0XgHc9Vb8AydiawHaGN&pid=Api&P=0&h=180',
            title: 'Conquer The Kuari Pass',
            duration: '6D - 5N',
            price: 8900,
            oldPrice: 70000,
            category: "adventures"
        },
        {
            imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.upkiswG0XgHc9Vb8AydiawHaGN&pid=Api&P=0&h=180',
            title: 'Conquer The Kuari Pass',
            duration: '6D - 5N',
            price: 9900,
            oldPrice: 15000,
            category: "adventures"
        },
        // Add more tour objects as needed
    ];

    return (
        <div className="eight-tours">
            <h2>Second tour section appears here: all information 8 cards</h2>
            <div className="container tour-container2">
                {tours.map((tour, index) => (
                    <TourCard
                        key={index}
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

export default ToursSection;

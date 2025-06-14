// TourCard.jsx
import React from 'react';
import { useNavigate } from "react-router-dom";
import './TourCard.css'


const TourCard = ({ id, imageUrl, title, duration, basePrice, oldBasePrice,day }) => {
    
    const navigate = useNavigate();
    const handleClick = (e) => {
        if (e.target.closest(".action-buttons")) return; 
        navigate(`/tour/${id}`, { state: { id, imageUrl, title, duration, basePrice, oldBasePrice, day } });
        console.log(day,"day")
    };

    return (
        <div className="tour-card2 pb-4" onClick={handleClick}>
        <img src={imageUrl} className="tour-img" alt={title} />
            <div className="tour-content">
                <small className="duration">{day}D - {day-1}N</small>
                <h6 className="">{title}</h6>
                <div>
                    <span className="price">₹ {basePrice} / person </span> 
                    <span className="old-price">₹ {oldBasePrice} / person</span>
                </div>
                <div className="action-buttons">
                    <a href="tel:+911234567890" className="btn call-btn"><i className="fas fa-phone icon"></i></a>
                    <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className="btn whatsapp-btn"><i className="fab fa-whatsapp icon"></i></a>
                    <button className="btn callback-btn">Request Callback</button>
                </div>
            </div>
        </div>
    );
};

export default TourCard;

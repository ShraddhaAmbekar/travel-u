// TourCard.jsx
import React from 'react';

const TourCard = ({ imageUrl, title, duration, price, oldPrice }) => {
    return (
        <div className="tour-card2 pb-4">
            <img src={imageUrl} className="tour-img" alt={title} />
            <div className="tour-content">
                <small className="duration">{duration}</small>
                <h6 className="">{title}</h6>
                <div>
                    <span className="price">₹ {price} / person</span>
                    <span className="old-price">₹ {oldPrice} / person</span>
                </div>
                <div className="action-buttons">
                    <a href="tel:+911234567890" className="btn call-btn"><i className="fas fa-phone"></i></a>
                    <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className="btn whatsapp-btn"><i className="fab fa-whatsapp"></i></a>
                    <button className="btn callback-btn">Request Callback</button>
                </div>
            </div>
        </div>
    );
};

export default TourCard;

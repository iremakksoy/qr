import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ image, title, onClick, className }) => {
  return (
    <div className={`service-card ${className || ''}`} onClick={onClick}>
      <div className="service-image">
        <img src={image} alt={title} />
        <div className="service-title">
          {title}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard; 
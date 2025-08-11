import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ image, title, onClick }) => {
  return (
    <div className="service-card" onClick={onClick}>
      <div className="service-image">
        <img src={image} alt={title} />
      </div>
      <div className="service-title">
        {title}
      </div>
    </div>
  );
};

export default ServiceCard; 
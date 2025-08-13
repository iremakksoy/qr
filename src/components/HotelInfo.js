import React from 'react';
import QRCode from './QRCode';
import './HotelInfo.css';

const HotelInfo = ({ onClose }) => {

  const hotelInfoCards = [
    {
      id: 'about-hotel',
      title: 'About Hotel',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop'
    },
    {
      id: 'check-in-out',
      title: 'Check-in/out Information',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
    },
    {
      id: 'internet-services',
      title: 'Internet Services',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop'
    },
    {
      id: 'kids-club',
      title: 'Kids Club',
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=300&fit=crop'
    },
    {
      id: 'directions-contacts',
      title: 'Directions & Contacts',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop'
    }
  ];

  const handleCardClick = (cardId) => {
    console.log('Card clicked:', cardId);
    // Burada her kart için detay sayfası açılabilir
  };

  return (
    <div className="hotel-info-overlay">
      <div className="hotel-info-container">
        <div className="hotel-info-content">
          <div className="scroll-container">
            <div className="hotel-info-header">
              <button className="back-button" onClick={onClose}>
                <span>←</span>
              </button>
              <h2>Hotel Info</h2>
              <button className="menu-button">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
            
            <div className="services-grid">
                             {hotelInfoCards.map((card) => (
                 <div 
                   key={card.id} 
                   className="service-card"
                   onClick={() => handleCardClick(card.id)}
                 >
                   <div className="service-image">
                     <img 
                       src={card.image} 
                       alt={card.title} 
                     />
                   </div>
                   <div className="service-title">
                     {card.title}
                   </div>
                 </div>
               ))}
            </div>
          </div>
          
          <div className="qr-section-container">
            <QRCode />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelInfo; 
import React, { useState } from 'react';
import QRCode from './QRCode';
import './HotelInfo.css';

const HotelInfo = ({ onClose }) => {
  const [selectedCard, setSelectedCard] = useState(null);

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
    setSelectedCard(cardId);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  const isMobile = window.innerWidth <= 768;

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

      {/* About Hotel Modal/Page */}
      {selectedCard === 'about-hotel' && (
        <div className={`about-hotel-overlay ${isMobile ? 'mobile' : 'desktop'}`}>
          <div className={`about-hotel-container ${isMobile ? 'mobile' : 'desktop'}`}>
            <div className="about-hotel-image">
              <img 
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=400&fit=crop" 
                alt="Hotel Skyline" 
              />
              <button className={`close-button ${isMobile ? 'mobile' : 'desktop'}`} onClick={handleCloseModal}>
                <span>×</span>
              </button>
            </div>
            
                         <div className="about-hotel-content">
               <h2>About Hotel</h2>
               <p>
                 Welcome to our luxurious hotel located on the bustling Dubai Marina. 
                 With stunning views of the waterfront and the iconic skyline, our hotel 
                 offers a perfect blend of modern comfort and unparalleled hospitality.
               </p>
               <button className="map-button">MAP</button>
             </div>
          </div>
        </div>
      )}

      {/* Check In Information Modal/Page */}
      {selectedCard === 'check-in-out' && (
        <div className={`about-hotel-overlay ${isMobile ? 'mobile' : 'desktop'}`}>
          <div className={`about-hotel-container ${isMobile ? 'mobile' : 'desktop'}`}>
            <div className="about-hotel-image">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop" 
                alt="Hotel Reception" 
              />
              <button className={`close-button ${isMobile ? 'mobile' : 'desktop'}`} onClick={handleCloseModal}>
                <span>×</span>
              </button>
            </div>
            
                         <div className="about-hotel-content">
               <h2>Check-in/out Information</h2>
               <p>
                 Check-in time is 3:00 PM and check-out time is 12:00 PM. Early check-in 
                 and late check-out are subject to availability and may incur additional charges. 
                 Please contact our front desk for special arrangements.
               </p>
               <button className="map-button">CONTACT</button>
             </div>
          </div>
        </div>
      )}

      {/* Internet Services Modal/Page */}
      {selectedCard === 'internet-services' && (
        <div className={`about-hotel-overlay ${isMobile ? 'mobile' : 'desktop'}`}>
          <div className={`about-hotel-container ${isMobile ? 'mobile' : 'desktop'}`}>
            <div className="about-hotel-image">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=400&fit=crop" 
                alt="WiFi Network" 
              />
              <button className={`close-button ${isMobile ? 'mobile' : 'desktop'}`} onClick={handleCloseModal}>
                <span>×</span>
              </button>
            </div>
            
                         <div className="about-hotel-content">
               <h2>Internet Services</h2>
               <p>
                 Enjoy high-speed WiFi throughout the entire hotel property. Our complimentary 
                 internet service provides speeds up to 100 Mbps, perfect for streaming, 
                 video calls, and business needs. Network name: "Hotel_Guest_WiFi" - Password: "Welcome2024".
               </p>
             </div>
          </div>
        </div>
      )}

      {/* Kids Club Modal/Page */}
      {selectedCard === 'kids-club' && (
        <div className={`about-hotel-overlay ${isMobile ? 'mobile' : 'desktop'}`}>
          <div className={`about-hotel-container ${isMobile ? 'mobile' : 'desktop'}`}>
            <div className="about-hotel-image">
              <img 
                src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&h=400&fit=crop" 
                alt="Kids Play Area" 
              />
              <button className={`close-button ${isMobile ? 'mobile' : 'desktop'}`} onClick={handleCloseModal}>
                <span>×</span>
              </button>
            </div>
            
                         <div className="about-hotel-content">
               <h2>Kids Club</h2>
               <p>
                 Our Kids Club offers a safe and entertaining environment for children aged 3-12. 
                 Open daily from 9:00 AM to 6:00 PM, our supervised play area features games, 
                 crafts, and educational activities. Professional childcare staff ensures your 
                 children have a memorable and fun experience.
               </p>
             </div>
          </div>
        </div>
      )}

      {/* Directions & Contacts Modal/Page */}
      {selectedCard === 'directions-contacts' && (
        <div className={`about-hotel-overlay ${isMobile ? 'mobile' : 'desktop'}`}>
          <div className={`about-hotel-container ${isMobile ? 'mobile' : 'desktop'}`}>
            <div className="about-hotel-image">
              <img 
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=400&fit=crop" 
                alt="Hotel Location" 
              />
              <button className={`close-button ${isMobile ? 'mobile' : 'desktop'}`} onClick={handleCloseModal}>
                <span>×</span>
              </button>
            </div>
            
                         <div className="about-hotel-content">
               <h2>Directions & Contacts</h2>
               <p>
                 Located in the heart of Dubai Marina, our hotel is easily accessible from 
                 Dubai International Airport (DXB) - approximately 25 minutes by car. 
                 Address: Dubai Marina, Sheikh Zayed Road, Dubai, UAE. Phone: +971 4 XXX XXXX.
               </p>
               <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                 <button className="map-button">CALL US</button>
                 <button className="map-button">WHATSAPP US</button>
               </div>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelInfo; 
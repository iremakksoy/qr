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

  // Modal içerikleri ve uzunlukları
  const modalContents = {
    'about-hotel': {
      title: 'About Hotel',
      paragraphs: [
        'Welcome to our luxurious hotel in Dubai Marina with stunning waterfront views.',
        'Experience modern comfort and exceptional hospitality in the heart of Dubai.'
      ],
      buttonText: 'MAP'
    },
    'check-in-out': {
      title: 'Check-in/out Information',
      paragraphs: [
        'Check-in time is 3:00 PM and check-out time is 11:00 AM.',
        'Early check-in and late check-out available upon request and availability.',
        'Express check-in service available for returning guests and VIP members.'
      ],
      buttonText: 'BOOK NOW'
    },
    'internet-services': {
      title: 'Internet Services',
      paragraphs: [
        'High-speed WiFi available throughout the hotel at no additional cost.',
        'Premium internet packages available for business travelers.',
        '24/7 technical support for all connectivity issues.',
        'Meeting rooms equipped with dedicated high-speed connections.'
      ],
      buttonText: 'CONNECT'
    },
    'kids-club': {
      title: 'Kids Club',
      paragraphs: [
        'Fun and safe activities for children aged 4-12 years old.',
        'Supervised play areas and educational programs available daily.',
        'Special themed events and workshops during weekends.',
        'Professional childcare staff with certified training.',
        'Indoor and outdoor play zones with age-appropriate equipment.'
      ],
      buttonText: 'JOIN NOW'
    },
    'directions-contacts': {
      title: 'Directions & Contacts',
      paragraphs: [
        'Located in Dubai Marina, easily accessible by metro and taxi.',
        'Contact us at +971 4 123 4567 or info@hotel.com for assistance.',
        'Free shuttle service to major attractions and shopping centers.',
        'Valet parking available 24/7 for hotel guests.',
        'Concierge desk open daily from 6:00 AM to 11:00 PM.'
      ],
      buttonText: 'CALL NOW'
    }
  };

  // Modal yüksekliğini hesaplayan fonksiyon
  const calculateModalHeight = (cardId) => {
    const content = modalContents[cardId];
    if (!content) return 70; // Varsayılan %70

    const totalLength = content.paragraphs.reduce((total, paragraph) => total + paragraph.length, 0);
    
    // Uzunluk bazında yükseklik hesaplama (%50-%80 arası)
    let heightPercentage;
    
    if (totalLength <= 150) {
      heightPercentage = 50; // Kısa içerik
    } else if (totalLength <= 250) {
      heightPercentage = 60; // Orta kısa içerik
    } else if (totalLength <= 350) {
      heightPercentage = 70; // Orta içerik
    } else if (totalLength <= 450) {
      heightPercentage = 75; // Orta uzun içerik
    } else {
      heightPercentage = 80; // Uzun içerik
    }
    
    return heightPercentage;
  };

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

      {/* About Hotel Modal */}
      {selectedCard === 'about-hotel' && (
        <div className={`about-hotel-overlay ${isMobile ? 'mobile' : 'desktop'}`}>
          <div 
            className={`about-hotel-container ${isMobile ? 'mobile' : 'desktop'}`}
            style={isMobile ? { height: `${calculateModalHeight('about-hotel')}vh` } : {}}
          >
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
              <h2>{modalContents['about-hotel'].title}</h2>
              {modalContents['about-hotel'].paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <button className="map-button">{modalContents['about-hotel'].buttonText}</button>
            </div>
          </div>
        </div>
      )}

      {/* Check-in/out Information Modal */}
      {selectedCard === 'check-in-out' && (
        <div className={`about-hotel-overlay ${isMobile ? 'mobile' : 'desktop'}`}>
          <div 
            className={`about-hotel-container ${isMobile ? 'mobile' : 'desktop'}`}
            style={isMobile ? { height: `${calculateModalHeight('check-in-out')}vh` } : {}}
          >
            <div className="about-hotel-image">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop" 
                alt="Check-in/out" 
              />
              <button className={`close-button ${isMobile ? 'mobile' : 'desktop'}`} onClick={handleCloseModal}>
                <span>×</span>
              </button>
            </div>
            
            <div className="about-hotel-content">
              <h2>{modalContents['check-in-out'].title}</h2>
              {modalContents['check-in-out'].paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <button className="map-button">{modalContents['check-in-out'].buttonText}</button>
            </div>
          </div>
        </div>
      )}

      {/* Internet Services Modal */}
      {selectedCard === 'internet-services' && (
        <div className={`about-hotel-overlay ${isMobile ? 'mobile' : 'desktop'}`}>
          <div 
            className={`about-hotel-container ${isMobile ? 'mobile' : 'desktop'}`}
            style={isMobile ? { height: `${calculateModalHeight('internet-services')}vh` } : {}}
          >
            <div className="about-hotel-image">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=400&fit=crop" 
                alt="Internet Services" 
              />
              <button className={`close-button ${isMobile ? 'mobile' : 'desktop'}`} onClick={handleCloseModal}>
                <span>×</span>
              </button>
            </div>
            
            <div className="about-hotel-content">
              <h2>{modalContents['internet-services'].title}</h2>
              {modalContents['internet-services'].paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <button className="map-button">{modalContents['internet-services'].buttonText}</button>
            </div>
          </div>
        </div>
      )}

      {/* Kids Club Modal */}
      {selectedCard === 'kids-club' && (
        <div className={`about-hotel-overlay ${isMobile ? 'mobile' : 'desktop'}`}>
          <div 
            className={`about-hotel-container ${isMobile ? 'mobile' : 'desktop'}`}
            style={isMobile ? { height: `${calculateModalHeight('kids-club')}vh` } : {}}
          >
            <div className="about-hotel-image">
              <img 
                src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&h=400&fit=crop" 
                alt="Kids Club" 
              />
              <button className={`close-button ${isMobile ? 'mobile' : 'desktop'}`} onClick={handleCloseModal}>
                <span>×</span>
              </button>
            </div>
            
            <div className="about-hotel-content">
              <h2>{modalContents['kids-club'].title}</h2>
              {modalContents['kids-club'].paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <button className="map-button">{modalContents['kids-club'].buttonText}</button>
            </div>
          </div>
        </div>
      )}

      {/* Directions & Contacts Modal */}
      {selectedCard === 'directions-contacts' && (
        <div className={`about-hotel-overlay ${isMobile ? 'mobile' : 'desktop'}`}>
          <div 
            className={`about-hotel-container ${isMobile ? 'mobile' : 'desktop'}`}
            style={isMobile ? { height: `${calculateModalHeight('directions-contacts')}vh` } : {}}
          >
            <div className="about-hotel-image">
              <img 
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=400&fit=crop" 
                alt="Directions & Contacts" 
              />
              <button className={`close-button ${isMobile ? 'mobile' : 'desktop'}`} onClick={handleCloseModal}>
                <span>×</span>
              </button>
            </div>
            
            <div className="about-hotel-content">
              <h2>{modalContents['directions-contacts'].title}</h2>
              {modalContents['directions-contacts'].paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <button className="map-button">{modalContents['directions-contacts'].buttonText}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelInfo; 
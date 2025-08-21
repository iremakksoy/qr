import React, { useState } from 'react';
import QRCode from './QRCode';
import './Pastane.css';

const Pastane = ({ onClose }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const pastaneCards = [
    {
      id: 'pastane-ana',
      title: 'Pastane',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop'
    }
  ];

  // Modal içerikleri ve uzunlukları
  const modalContents = {
    'pastane-ana': {
      title: 'Pastane',
      paragraphs: [
        'Taze ve lezzetli pastane ürünlerimizle gününüzü tatlandırın.',
        'Geleneksel Türk tatlılarından modern pastane ürünlerine kadar geniş bir yelpazede hizmet veriyoruz.',
        'Börek, poğaça, kek, kurabiye ve özel tariflerimizle unutulmaz lezzetler sunuyoruz.'
      ],
      buttonText: 'VIEW MENU'
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
              <h2>Pastane</h2>
              <button className="menu-button">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
            
            <div className="services-grid">
              {pastaneCards.map((card) => (
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

      {/* Pastane Modal */}
      {selectedCard === 'pastane-ana' && (
        <div className={`about-hotel-overlay ${isMobile ? 'mobile' : 'desktop'}`}>
          <div 
            className={`about-hotel-container ${isMobile ? 'mobile' : 'desktop'}`}
            style={isMobile ? { height: `${calculateModalHeight('pastane-ana')}vh` } : {}}
          >
            <div className="about-hotel-image">
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop" 
                alt="Pastane" 
              />
              <button className={`close-button ${isMobile ? 'mobile' : 'desktop'}`} onClick={handleCloseModal}>
                <span>×</span>
              </button>
            </div>
            
            <div className="about-hotel-content">
              <h2>{modalContents['pastane-ana'].title}</h2>
              {modalContents['pastane-ana'].paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <button className="map-button">{modalContents['pastane-ana'].buttonText}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pastane;

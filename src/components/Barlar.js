import React, { useState } from 'react';
import QRCode from './QRCode';
import MenuPage from './MenuPage';
import './Barlar.css';

const Barlar = ({ onClose }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [showMenuPage, setShowMenuPage] = useState(false);
  const [menuRestaurantName, setMenuRestaurantName] = useState('');

  const barlarCards = [
    {
      id: 'dbar',
      title: 'DBar',
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=300&fit=crop'
    },
    {
      id: 'coffeehouse',
      title: 'CoffeeHouse',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop'
    },
    {
      id: 'beachbar',
      title: 'BeachBar',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
    }
  ];

  // Modal içerikleri ve uzunlukları
  const modalContents = {
    'dbar': {
      title: 'DBar',
      paragraphs: [
        'Modern ve şık atmosferde eğlenceli bir gece deneyimi yaşayın.',
        'Özel kokteyller, canlı müzik ve profesyonel barmenlerimizle unutulmaz anlar yaratın.',
        'Geniş içki menümüz, özel tariflerimiz ve kaliteli hizmetimizle sizleri bekliyoruz.'
      ],
      buttonText: 'VIEW MENU'
    },
    'coffeehouse': {
      title: 'CoffeeHouse',
      paragraphs: [
        'Sıcak ve samimi bir ortamda kaliteli kahve deneyimi yaşayın.',
        'Taze çekilmiş kahveler, özel kahve çeşitleri ve lezzetli atıştırmalıklar sunuyoruz.',
        'Sakin bir ortamda kahve keyfi yapmak, çalışmak veya sohbet etmek için ideal mekan.'
      ],
      buttonText: 'VIEW MENU'
    },
    'beachbar': {
      title: 'BeachBar',
      paragraphs: [
        'Deniz manzarası eşliğinde rahatlatıcı bir bar deneyimi yaşayın.',
        'Tropikal kokteyller, soğuk içecekler ve hafif atıştırmalıklar ile gününüzü güzelleştirin.',
        'Güneş batımında romantik bir akşam veya gündüz keyfi için mükemmel seçenek.'
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

  const handleViewMenu = (restaurantName) => {
    setMenuRestaurantName(restaurantName);
    setShowMenuPage(true);
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
              <h2>Barlar</h2>
              <button className="menu-button">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
            
            <div className="services-grid">
              {barlarCards.map((card) => (
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

      {/* DBar Modal */}
      {selectedCard === 'dbar' && (
        <div className={`about-hotel-overlay ${isMobile ? 'mobile' : 'desktop'}`}>
          <div 
            className={`about-hotel-container ${isMobile ? 'mobile' : 'desktop'}`}
            style={isMobile ? { height: `${calculateModalHeight('dbar')}vh` } : {}}
          >
            <div className="about-hotel-image">
              <img 
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=400&fit=crop" 
                alt="DBar" 
              />
              <button className={`close-button ${isMobile ? 'mobile' : 'desktop'}`} onClick={handleCloseModal}>
                <span>×</span>
              </button>
            </div>
            
            <div className="about-hotel-content">
              <h2>{modalContents['dbar'].title}</h2>
              {modalContents['dbar'].paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <button className="map-button" onClick={() => handleViewMenu('DBar')}>{modalContents['dbar'].buttonText}</button>
            </div>
          </div>
        </div>
      )}

      {/* CoffeeHouse Modal */}
      {selectedCard === 'coffeehouse' && (
        <div className={`about-hotel-overlay ${isMobile ? 'mobile' : 'desktop'}`}>
          <div 
            className={`about-hotel-container ${isMobile ? 'mobile' : 'desktop'}`}
            style={isMobile ? { height: `${calculateModalHeight('coffeehouse')}vh` } : {}}
          >
            <div className="about-hotel-image">
              <img 
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=400&fit=crop" 
                alt="CoffeeHouse" 
              />
              <button className={`close-button ${isMobile ? 'mobile' : 'desktop'}`} onClick={handleCloseModal}>
                <span>×</span>
              </button>
            </div>
            
            <div className="about-hotel-content">
              <h2>{modalContents['coffeehouse'].title}</h2>
              {modalContents['coffeehouse'].paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <button className="map-button" onClick={() => handleViewMenu('CoffeeHouse')}>{modalContents['coffeehouse'].buttonText}</button>
            </div>
          </div>
        </div>
      )}

      {/* BeachBar Modal */}
      {selectedCard === 'beachbar' && (
        <div className={`about-hotel-overlay ${isMobile ? 'mobile' : 'desktop'}`}>
          <div 
            className={`about-hotel-container ${isMobile ? 'mobile' : 'desktop'}`}
            style={isMobile ? { height: `${calculateModalHeight('beachbar')}vh` } : {}}
          >
            <div className="about-hotel-image">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop" 
                alt="BeachBar" 
              />
              <button className={`close-button ${isMobile ? 'mobile' : 'desktop'}`} onClick={handleCloseModal}>
                <span>×</span>
              </button>
            </div>
            
            <div className="about-hotel-content">
              <h2>{modalContents['beachbar'].title}</h2>
              {modalContents['beachbar'].paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <button className="map-button" onClick={() => handleViewMenu('BeachBar')}>{modalContents['beachbar'].buttonText}</button>
            </div>
          </div>
        </div>
      )}

      {showMenuPage && (
        <MenuPage 
          onClose={() => setShowMenuPage(false)} 
          restaurantName={menuRestaurantName}
        />
      )}
    </div>
  );
};

export default Barlar;

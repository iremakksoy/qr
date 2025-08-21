import React, { useState } from 'react';
import QRCode from './QRCode';
import MenuPage from './MenuPage';
import './AnaRestoran.css';

const AnaRestoran = ({ onClose }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [showMenuPage, setShowMenuPage] = useState(false);
  const [menuRestaurantName, setMenuRestaurantName] = useState('');

  const anaRestoranCards = [
    {
      id: 'kahvalti',
      title: 'Kahvaltı',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop'
    },
    {
      id: 'ogle-yemegi',
      title: 'Öğle Yemeği',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop'
    },
    {
      id: 'aksam-yemegi',
      title: 'Akşam Yemeği',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop'
    }
  ];

  // Modal içerikleri ve uzunlukları
  const modalContents = {
    'kahvalti': {
      title: 'Kahvaltı',
      paragraphs: [
        'Günün en önemli öğünü olan kahvaltımızda taze ve çeşitli seçenekler sunuyoruz.',
        'Taze pişmiş ekmekler, peynir çeşitleri, zeytin, bal, reçel ve taze meyveler ile zengin bir kahvaltı deneyimi yaşayabilirsiniz.',
        'Omlet, menemen, sucuklu yumurta gibi sıcak seçenekler de mevcuttur.'
      ],
      buttonText: 'VIEW MENU'
    },
    'ogle-yemegi': {
      title: 'Öğle Yemeği',
      paragraphs: [
        'Öğle yemeğimizde hem geleneksel hem de uluslararası mutfak seçenekleri bulabilirsiniz.',
        'Çorba, ana yemek, salata ve tatlıdan oluşan set menülerimiz ile doyurucu bir öğle yemeği deneyimi yaşayın.',
        'Vejetaryen ve vegan seçenekler de mevcuttur.'
      ],
      buttonText: 'VIEW MENU'
    },
    'aksam-yemegi': {
      title: 'Akşam Yemeği',
      paragraphs: [
        'Akşam yemeğimizde lüks ve lezzet bir araya geliyor.',
        'Şefin özel tarifleri ile hazırlanan ana yemekler, deniz ürünleri, et çeşitleri ve özel soslar ile unutulmaz bir akşam yemeği deneyimi yaşayın.',
        'Özel şarap eşleştirmeleri ve tatlı seçenekleri ile tamamlanan menümüzde her damak zevkine uygun seçenekler bulabilirsiniz.'
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
              <h2>Ana Restoran</h2>
              <button className="menu-button">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
            
            <div className="services-grid">
              {anaRestoranCards.map((card) => (
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

      {/* Kahvaltı Modal */}
      {selectedCard === 'kahvalti' && (
        <div className={`about-hotel-overlay ${isMobile ? 'mobile' : 'desktop'}`}>
          <div 
            className={`about-hotel-container ${isMobile ? 'mobile' : 'desktop'}`}
            style={isMobile ? { height: `${calculateModalHeight('kahvalti')}vh` } : {}}
          >
            <div className="about-hotel-image">
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop" 
                alt="Kahvaltı" 
              />
              <button className={`close-button ${isMobile ? 'mobile' : 'desktop'}`} onClick={handleCloseModal}>
                <span>×</span>
              </button>
            </div>
            
            <div className="about-hotel-content">
              <h2>{modalContents['kahvalti'].title}</h2>
              {modalContents['kahvalti'].paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <button className="map-button" onClick={() => handleViewMenu('Kahvaltı')}>{modalContents['kahvalti'].buttonText}</button>
            </div>
          </div>
        </div>
      )}

      {/* Öğle Yemeği Modal */}
      {selectedCard === 'ogle-yemegi' && (
        <div className={`about-hotel-overlay ${isMobile ? 'mobile' : 'desktop'}`}>
          <div 
            className={`about-hotel-container ${isMobile ? 'mobile' : 'desktop'}`}
            style={isMobile ? { height: `${calculateModalHeight('ogle-yemegi')}vh` } : {}}
          >
            <div className="about-hotel-image">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=400&fit=crop" 
                alt="Öğle Yemeği" 
              />
              <button className={`close-button ${isMobile ? 'mobile' : 'desktop'}`} onClick={handleCloseModal}>
                <span>×</span>
              </button>
            </div>
            
            <div className="about-hotel-content">
              <h2>{modalContents['ogle-yemegi'].title}</h2>
              {modalContents['ogle-yemegi'].paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <button className="map-button" onClick={() => handleViewMenu('Öğle Yemeği')}>{modalContents['ogle-yemegi'].buttonText}</button>
            </div>
          </div>
        </div>
      )}

      {/* Akşam Yemeği Modal */}
      {selectedCard === 'aksam-yemegi' && (
        <div className={`about-hotel-overlay ${isMobile ? 'mobile' : 'desktop'}`}>
          <div 
            className={`about-hotel-container ${isMobile ? 'mobile' : 'desktop'}`}
            style={isMobile ? { height: `${calculateModalHeight('aksam-yemegi')}vh` } : {}}
          >
            <div className="about-hotel-image">
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop" 
                alt="Akşam Yemeği" 
              />
              <button className={`close-button ${isMobile ? 'mobile' : 'desktop'}`} onClick={handleCloseModal}>
                <span>×</span>
              </button>
            </div>
            
            <div className="about-hotel-content">
              <h2>{modalContents['aksam-yemegi'].title}</h2>
              {modalContents['aksam-yemegi'].paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <button className="map-button" onClick={() => handleViewMenu('Akşam Yemeği')}>{modalContents['aksam-yemegi'].buttonText}</button>
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

export default AnaRestoran;

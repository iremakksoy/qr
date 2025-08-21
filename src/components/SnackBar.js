import React, { useState } from 'react';
import QRCode from './QRCode';
import MenuPage from './MenuPage';
import './SnackBar.css';

const SnackBar = ({ onClose }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [showMenuPage, setShowMenuPage] = useState(false);
  const [menuRestaurantName, setMenuRestaurantName] = useState('');

  const snackBarCards = [
    {
      id: 'pizza',
      title: 'Pizza',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop'
    },
    {
      id: 'burger',
      title: 'Burger',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop'
    },
    {
      id: 'kebab',
      title: 'Kebab',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop'
    },
    {
      id: 'salad',
      title: 'Salad',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop'
    }
  ];

  // Modal içerikleri ve uzunlukları
  const modalContents = {
    'pizza': {
      title: 'Pizza',
      paragraphs: [
        'Taze hamur ve özel soslarla hazırlanan pizzalarımızla lezzet dolu bir deneyim yaşayın.',
        'Margherita, Pepperoni, Quattro Stagioni ve özel tariflerimizle çeşitli pizza seçenekleri sunuyoruz.',
        'Taze mozzarella peyniri, domates sosu ve özenle seçilmiş malzemelerle hazırlanan pizzalarımızı deneyin.'
      ],
      buttonText: 'VIEW MENU'
    },
    'burger': {
      title: 'Burger',
      paragraphs: [
        'Özel soslar ve taze malzemelerle hazırlanan burgerlerimizle doyurucu bir lezzet deneyimi yaşayın.',
        'Klasik cheeseburger, bacon burger, veggie burger ve özel tariflerimizle geniş bir seçenek sunuyoruz.',
        'Taze ekmek, kaliteli et ve özel soslarla hazırlanan burgerlerimizi mutlaka deneyin.'
      ],
      buttonText: 'VIEW MENU'
    },
    'kebab': {
      title: 'Kebab',
      paragraphs: [
        'Geleneksel tariflerle hazırlanan kebablarımızla otantik lezzetleri keşfedin.',
        'Döner kebab, şiş kebab, adana kebab ve çeşitli kebab seçenekleri ile hizmet veriyoruz.',
        'Taze et, özel baharatlar ve geleneksel pişirme yöntemleriyle hazırlanan kebablarımızı deneyin.'
      ],
      buttonText: 'VIEW MENU'
    },
    'salad': {
      title: 'Salad',
      paragraphs: [
        'Taze sebzeler ve özel soslarla hazırlanan salatalarımızla sağlıklı ve lezzetli bir deneyim yaşayın.',
        'Caesar salad, Greek salad, Cobb salad ve çeşitli salata seçenekleri sunuyoruz.',
        'Taze yeşillikler, sebzeler ve özel soslarla hazırlanan salatalarımızı mutlaka deneyin.'
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
              <h2>Snack Bar</h2>
              <button className="menu-button">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
            
            <div className="services-grid">
              {snackBarCards.map((card) => (
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

      {/* Pizza Modal */}
      {selectedCard === 'pizza' && (
        <div className={`about-hotel-overlay ${isMobile ? 'mobile' : 'desktop'}`}>
          <div 
            className={`about-hotel-container ${isMobile ? 'mobile' : 'desktop'}`}
            style={isMobile ? { height: `${calculateModalHeight('pizza')}vh` } : {}}
          >
            <div className="about-hotel-image">
              <img 
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=400&fit=crop" 
                alt="Pizza" 
              />
              <button className={`close-button ${isMobile ? 'mobile' : 'desktop'}`} onClick={handleCloseModal}>
                <span>×</span>
              </button>
            </div>
            
            <div className="about-hotel-content">
              <h2>{modalContents['pizza'].title}</h2>
              {modalContents['pizza'].paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <button className="map-button" onClick={() => handleViewMenu('Pizza')}>{modalContents['pizza'].buttonText}</button>
            </div>
          </div>
        </div>
      )}

      {/* Burger Modal */}
      {selectedCard === 'burger' && (
        <div className={`about-hotel-overlay ${isMobile ? 'mobile' : 'desktop'}`}>
          <div 
            className={`about-hotel-container ${isMobile ? 'mobile' : 'desktop'}`}
            style={isMobile ? { height: `${calculateModalHeight('burger')}vh` } : {}}
          >
            <div className="about-hotel-image">
              <img 
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=400&fit=crop" 
                alt="Burger" 
              />
              <button className={`close-button ${isMobile ? 'mobile' : 'desktop'}`} onClick={handleCloseModal}>
                <span>×</span>
              </button>
            </div>
            
            <div className="about-hotel-content">
              <h2>{modalContents['burger'].title}</h2>
              {modalContents['burger'].paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <button className="map-button" onClick={() => handleViewMenu('Burger')}>{modalContents['burger'].buttonText}</button>
            </div>
          </div>
        </div>
      )}

      {/* Kebab Modal */}
      {selectedCard === 'kebab' && (
        <div className={`about-hotel-overlay ${isMobile ? 'mobile' : 'desktop'}`}>
          <div 
            className={`about-hotel-container ${isMobile ? 'mobile' : 'desktop'}`}
            style={isMobile ? { height: `${calculateModalHeight('kebab')}vh` } : {}}
          >
            <div className="about-hotel-image">
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop" 
                alt="Kebab" 
              />
              <button className={`close-button ${isMobile ? 'mobile' : 'desktop'}`} onClick={handleCloseModal}>
                <span>×</span>
              </button>
            </div>
            
            <div className="about-hotel-content">
              <h2>{modalContents['kebab'].title}</h2>
              {modalContents['kebab'].paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <button className="map-button" onClick={() => handleViewMenu('Kebab')}>{modalContents['kebab'].buttonText}</button>
            </div>
          </div>
        </div>
      )}

      {/* Salad Modal */}
      {selectedCard === 'salad' && (
        <div className={`about-hotel-overlay ${isMobile ? 'mobile' : 'desktop'}`}>
          <div 
            className={`about-hotel-container ${isMobile ? 'mobile' : 'desktop'}`}
            style={isMobile ? { height: `${calculateModalHeight('salad')}vh` } : {}}
          >
            <div className="about-hotel-image">
              <img 
                src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&h=400&fit=crop" 
                alt="Salad" 
              />
              <button className={`close-button ${isMobile ? 'mobile' : 'desktop'}`} onClick={handleCloseModal}>
                <span>×</span>
              </button>
            </div>
            
            <div className="about-hotel-content">
              <h2>{modalContents['salad'].title}</h2>
              {modalContents['salad'].paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <button className="map-button" onClick={() => handleViewMenu('Salad')}>{modalContents['salad'].buttonText}</button>
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

export default SnackBar;

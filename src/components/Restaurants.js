import React, { useState } from 'react';
import QRCode from './QRCode';
import AnaRestoran from './AnaRestoran';
import SnackBar from './SnackBar';
import MenuPage from './MenuPage';
import './Restaurants.css';

const Restaurants = ({ onClose }) => {
  const [showAnaRestoran, setShowAnaRestoran] = useState(false);
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showMenuPage, setShowMenuPage] = useState(false);
  const [menuRestaurantName, setMenuRestaurantName] = useState('');


  const restaurantCards = [
    {
      id: 'ana-restoran',
      title: 'Ana Restoran',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop'
    },
    {
      id: 'snack-bar',
      title: 'Snack Bar',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop'
    },
    {
      id: 'pastane',
      title: 'Pastane',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop'
    },
    {
      id: 'alacarte-restoran',
      title: 'Alacarte Restoran',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop'
    }
  ];



  const handleCardClick = (cardId) => {
    if (cardId === 'ana-restoran') {
      setShowAnaRestoran(true);
    } else if (cardId === 'snack-bar') {
      setShowSnackBar(true);
    } else if (cardId === 'pastane') {
      setSelectedCard('pastane');
    } else if (cardId === 'alacarte-restoran') {
      setSelectedCard('alacarte-restoran');
    } else {
      // Diğer kartlar için sadece console'a yazdırıyoruz
      console.log('Restaurant card clicked:', cardId);
    }
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  const handleViewMenu = (restaurantName) => {
    setMenuRestaurantName(restaurantName);
    setShowMenuPage(true);
  };

  const isMobile = window.innerWidth <= 768;

  const calculateModalHeight = (cardId) => {
    if (cardId === 'pastane') {
      return 70; // Pastane modal için %70 yükseklik
    } else if (cardId === 'alacarte-restoran') {
      return 70; // Alacarte Restoran modal için %70 yükseklik
    }
    return 70; // Varsayılan %70
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
              <h2>Restaurants</h2>
              <button className="menu-button">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
            
            <div className="services-grid">
              {restaurantCards.map((card) => (
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
      
            {showAnaRestoran && (
        <AnaRestoran onClose={() => setShowAnaRestoran(false)} />
      )}
      
      {showSnackBar && (
        <SnackBar onClose={() => setShowSnackBar(false)} />
      )}
      
      {showMenuPage && (
        <MenuPage 
          onClose={() => setShowMenuPage(false)} 
          restaurantName={menuRestaurantName}
        />
      )}
      
              {/* Pastane Modal */}
        {selectedCard === 'pastane' && (
         <div className={`about-hotel-overlay ${isMobile ? 'mobile' : 'desktop'}`}>
           <div 
             className={`about-hotel-container ${isMobile ? 'mobile' : 'desktop'}`}
             style={isMobile ? { height: `${calculateModalHeight('pastane')}vh` } : {}}
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
                <h2>Pastane</h2>
                <p>Taze ve lezzetli pastane ürünlerimizle gününüzü tatlandırın.</p>
                <p>Geleneksel Türk tatlılarından modern pastane ürünlerine kadar geniş bir yelpazede hizmet veriyoruz.</p>
                <p>Börek, poğaça, kek, kurabiye ve özel tariflerimizle unutulmaz lezzetler sunuyoruz.</p>
                <button className="map-button" onClick={() => handleViewMenu('Pastane')}>VIEW MENU</button>
              </div>
           </div>
         </div>
       )}

       {/* Alacarte Restoran Modal */}
       {selectedCard === 'alacarte-restoran' && (
         <div className={`about-hotel-overlay ${isMobile ? 'mobile' : 'desktop'}`}>
           <div 
             className={`about-hotel-container ${isMobile ? 'mobile' : 'desktop'}`}
             style={isMobile ? { height: `${calculateModalHeight('alacarte-restoran')}vh` } : {}}
           >
             <div className="about-hotel-image">
               <img 
                 src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=400&fit=crop" 
                 alt="Alacarte Restoran" 
               />
               <button className={`close-button ${isMobile ? 'mobile' : 'desktop'}`} onClick={handleCloseModal}>
                 <span>×</span>
               </button>
             </div>
             
             <div className="about-hotel-content">
               <h2>Alacarte Restoran</h2>
               <p>Özel lezzetler ve benzersiz deneyimler için a la carte restoranımızda sizleri bekliyoruz.</p>
               <p>Şefimizin özenle hazırladığı menülerimizde geleneksel ve modern mutfakların en iyi örneklerini bulabilirsiniz.</p>
               <p>Romantik akşam yemekleri, özel kutlamalar ve iş yemekleri için ideal ortam sunuyoruz.</p>
                               <div className="button-group">
                  <button className="map-button" onClick={() => handleViewMenu('Alacarte Restoran')}>VIEW MENU</button>
                  <button className="map-button">REZERVASYON</button>
                </div>
             </div>
           </div>
         </div>
       )}
    </div>
  );
};

export default Restaurants;

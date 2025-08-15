import React, { useState } from 'react';
import QRCode from './QRCode';
import './SpaFitness.css';

const SpaFitness = ({ onClose }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  // Modal içerikleri
  const modalContents = {
    'massage-beauty': {
      paragraphs: [
        "Experience ultimate relaxation with our professional massage and beauty treatments. Our skilled therapists provide a range of therapeutic massages designed to relieve stress and promote wellness.",
        "From traditional Swedish massage to deep tissue therapy, our treatments are tailored to your individual needs. We also offer specialized beauty treatments including facials, body wraps, and aromatherapy sessions."
      ]
    },
    'spa-ritual': {
      paragraphs: [
        "Indulge in the luxurious Spa Ritual by L'Occitane, featuring premium natural ingredients from Provence. This exclusive treatment combines traditional techniques with modern wellness practices.",
        "Each ritual is carefully crafted to provide a complete sensory experience, from the aromatic essential oils to the gentle massage techniques. Perfect for those seeking a truly indulgent spa experience."
      ]
    },
    'gym': {
      paragraphs: [
        "Stay active during your stay with our state-of-the-art fitness center. Equipped with the latest cardio and strength training equipment, our gym offers everything you need for a complete workout.",
        "Open 24/7 for your convenience, our fitness center features personal trainers, group classes, and a variety of equipment to suit all fitness levels. Enjoy panoramic views while you exercise."
      ]
    },
    'sauna': {
      paragraphs: [
        "Relax and detoxify in our traditional Finnish sauna. Our sauna facilities provide the perfect environment for deep relaxation and stress relief, helping you unwind after a long day.",
        "The sauna is maintained at optimal temperature and humidity levels for maximum therapeutic benefits. Towels, robes, and refreshments are provided for your comfort and convenience."
      ]
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

  const spaFitnessCards = [
    {
      id: 'massage-beauty',
      title: 'Massage & Beauty Treatments',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop'
    },
    {
      id: 'spa-ritual',
      title: 'Spa Ritual by L\'Occitane',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop'
    },
    {
      id: 'gym',
      title: 'Gym',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop'
    },
    {
      id: 'sauna',
      title: 'Sauna',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop'
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
    <div className="spa-fitness-overlay">
      <div className="spa-fitness-container">
        <div className="spa-fitness-content">
          <div className="scroll-container">
            <div className="spa-fitness-header">
              <button className="back-button" onClick={onClose}>
                <span>←</span>
              </button>
              <h2>Spa & Fitness</h2>
              <button className="menu-button">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
            
            <div className="services-grid">
              {spaFitnessCards.map((card) => (
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
          
          {!isMobile && (
            <div className="qr-section-container">
              <QRCode />
            </div>
          )}
        </div>
      </div>

      {/* Massage & Beauty Treatments Modal/Page */}
      {selectedCard === 'massage-beauty' && (
        <div className={`about-hotel-overlay ${isMobile ? 'mobile' : 'desktop'}`}>
          <div 
            className={`about-hotel-container ${isMobile ? 'mobile' : 'desktop'}`}
            style={isMobile ? { height: `${calculateModalHeight('massage-beauty')}vh` } : {}}
          >
            <div className="about-hotel-image">
              <img 
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=400&fit=crop" 
                alt="Massage & Beauty Treatments" 
              />
              <button className={`close-button ${isMobile ? 'mobile' : 'desktop'}`} onClick={handleCloseModal}>
                <span>×</span>
              </button>
            </div>
            
            <div className="about-hotel-content">
              <h2>Massage & Beauty Treatments</h2>
              <p>
                Experience ultimate relaxation with our professional massage and beauty treatments. Our skilled 
                therapists provide a range of therapeutic massages designed to relieve stress and promote wellness.
              </p>
              <p>
                From traditional Swedish massage to deep tissue therapy, our treatments are tailored to your 
                individual needs. We also offer specialized beauty treatments including facials, body wraps, 
                and aromatherapy sessions.
              </p>
              <button className="map-button">BOOK TREATMENT</button>
            </div>
          </div>
        </div>
      )}

      {/* Spa Ritual by L'Occitane Modal/Page */}
      {selectedCard === 'spa-ritual' && (
        <div className={`about-hotel-overlay ${isMobile ? 'mobile' : 'desktop'}`}>
          <div 
            className={`about-hotel-container ${isMobile ? 'mobile' : 'desktop'}`}
            style={isMobile ? { height: `${calculateModalHeight('spa-ritual')}vh` } : {}}
          >
            <div className="about-hotel-image">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop" 
                alt="Spa Ritual by L'Occitane" 
              />
              <button className={`close-button ${isMobile ? 'mobile' : 'desktop'}`} onClick={handleCloseModal}>
                <span>×</span>
              </button>
            </div>
            
            <div className="about-hotel-content">
              <h2>Spa Ritual by L'Occitane</h2>
              <p>
                Indulge in the luxurious Spa Ritual by L'Occitane, featuring premium natural ingredients from 
                Provence. This exclusive treatment combines traditional techniques with modern wellness practices.
              </p>
              <p>
                Each ritual is carefully crafted to provide a complete sensory experience, from the aromatic 
                essential oils to the gentle massage techniques. Perfect for those seeking a truly indulgent 
                spa experience.
              </p>
              <button className="map-button">BOOK RITUAL</button>
            </div>
          </div>
        </div>
      )}

      {/* Gym Modal/Page */}
      {selectedCard === 'gym' && (
        <div className={`about-hotel-overlay ${isMobile ? 'mobile' : 'desktop'}`}>
          <div 
            className={`about-hotel-container ${isMobile ? 'mobile' : 'desktop'}`}
            style={isMobile ? { height: `${calculateModalHeight('gym')}vh` } : {}}
          >
            <div className="about-hotel-image">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop" 
                alt="Gym" 
              />
              <button className={`close-button ${isMobile ? 'mobile' : 'desktop'}`} onClick={handleCloseModal}>
                <span>×</span>
              </button>
            </div>
            
            <div className="about-hotel-content">
              <h2>Gym</h2>
              <p>
                Stay active during your stay with our state-of-the-art fitness center. Equipped with the latest 
                cardio and strength training equipment, our gym offers everything you need for a complete workout.
              </p>
              <p>
                Open 24/7 for your convenience, our fitness center features personal trainers, group classes, 
                and a variety of equipment to suit all fitness levels. Enjoy panoramic views while you exercise.
              </p>
              <button className="map-button">VISIT GYM</button>
            </div>
          </div>
        </div>
      )}

      {/* Sauna Modal/Page */}
      {selectedCard === 'sauna' && (
        <div className={`about-hotel-overlay ${isMobile ? 'mobile' : 'desktop'}`}>
          <div 
            className={`about-hotel-container ${isMobile ? 'mobile' : 'desktop'}`}
            style={isMobile ? { height: `${calculateModalHeight('sauna')}vh` } : {}}
          >
            <div className="about-hotel-image">
              <img 
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=400&fit=crop" 
                alt="Sauna" 
              />
              <button className={`close-button ${isMobile ? 'mobile' : 'desktop'}`} onClick={handleCloseModal}>
                <span>×</span>
              </button>
            </div>
            
            <div className="about-hotel-content">
              <h2>Sauna</h2>
              <p>
                Relax and detoxify in our traditional Finnish sauna. Our sauna facilities provide the perfect 
                environment for deep relaxation and stress relief, helping you unwind after a long day.
              </p>
              <p>
                The sauna is maintained at optimal temperature and humidity levels for maximum therapeutic benefits. 
                Towels, robes, and refreshments are provided for your comfort and convenience.
              </p>
              <button className="map-button">VISIT SAUNA</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpaFitness;

import React, { useState } from 'react';
import QRCode from './QRCode';
import './Events.css';

const Events = ({ onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Üstteki yana kaydırmalı kartlar
  const promotionalCards = [
    {
      id: 1,
      title: "TITLE",
      description: "description",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=400&fit=crop"
    },
    {
      id: 2,
      title: "TITLE",
      description: "description",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=400&fit=crop"
    },
    {
      id: 3,
      title: "TITLE",
      description: "description",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=400&fit=crop"
    }
  ];

  // Alttaki 6 etkinlik kartı
  const eventCards = [
    {
      id: 'yoga-session',
      title: 'Sabah Yoga',
      time: '07:00',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop'
    },
    {
      id: 'cooking-class',
      title: 'Aşçılık Dersi',
      time: '10:00',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop'
    },
    {
      id: 'wine-tasting',
      title: 'Şarap Tadımı',
      time: '15:00',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop'
    },
    {
      id: 'live-music',
      title: 'Canlı Müzik',
      time: '19:00',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop'
    },
    {
      id: 'dance-party',
      title: 'Dans Gecesi',
      time: '21:00',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop'
    },
    {
      id: 'movie-night',
      title: 'Açık Hava Sinema',
      time: '22:00',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=300&fit=crop'
    }
  ];

  const nextCard = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === promotionalCards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? promotionalCards.length - 1 : prevIndex - 1
    );
  };

  const goToCard = (index) => {
    setCurrentIndex(index);
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <div className="events-overlay">
      <div className="events-container">
        <div className="events-content">
          <div className="scroll-container">
            <div className="events-header">
              <button className="back-button" onClick={onClose}>
                <span>←</span>
              </button>
              <h2>Etkinlikler</h2>
              <button className="menu-button">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
            
            {/* Üstteki yana kaydırmalı kartlar */}
            <div className="promotional-cards-container">
              <div className="promotional-cards-wrapper">
                <div 
                  className="promotional-cards"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {promotionalCards.map((card) => (
                    <div 
                      key={card.id} 
                      className="promotional-card"
                    >
                      <div className="card-content">
                        <div className="card-image">
                          <img src={card.image} alt={card.title} />
                        </div>
                        <div className="card-text">
                          <h3 className="card-title">{card.title}</h3>
                          <p className="card-description">{card.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button className="nav-button prev-button" onClick={prevCard}>
                  ‹
                </button>
                <button className="nav-button next-button" onClick={nextCard}>
                  ›
                </button>
              </div>
              
              <div className="card-indicators">
                {promotionalCards.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => goToCard(index)}
                  />
                ))}
              </div>
            </div>

            {/* Alttaki 6 etkinlik kartı */}
            <div className="events-grid">
              {eventCards.map((event) => (
                <div key={event.id} className="event-card">
                  <div className="event-image">
                    <img src={event.image} alt={event.title} />
                    <div className="event-time">{event.time}</div>
                  </div>
                  <div className="event-title">{event.title}</div>
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
    </div>
  );
};

export default Events;

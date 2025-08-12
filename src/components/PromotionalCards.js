import React, { useState } from 'react';
import './PromotionalCards.css';

const PromotionalCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
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
  );
};

export default PromotionalCards;

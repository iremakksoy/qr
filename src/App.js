import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import ServiceCard from './components/ServiceCard';
import QRCode from './components/QRCode';
import HotelInfo from './components/HotelInfo';
import SpaFitness from './components/SpaFitness';
import Events from './components/Events';
import Restaurants from './components/Restaurants';
import Barlar from './components/Barlar';
import PromotionalCards from './components/PromotionalCards';
import './App.css';

function App() {
  const [showHotelInfo, setShowHotelInfo] = useState(false);
  const [showSpaFitness, setShowSpaFitness] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  const [showRestaurants, setShowRestaurants] = useState(false);
  const [showBarlar, setShowBarlar] = useState(false);

  const services = [
    {
      id: 'personalize',
      title: 'Personalize Your Stay',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop',
      row: 1,
      width: 'half'
    },
    {
      id: 'transfer',
      title: 'Transfer',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      row: 1,
      width: 'half'
    },
    {
      id: 'hotel-info',
      title: 'Hotel Info',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
      row: 2,
      width: 'third'
    },
    {
      id: 'restaurants',
      title: '---',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
      row: 2,
      width: 'third'
    },
    {
      id: 'offers',
      title: 'Spa & Fitness',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop',
      row: 2,
      width: 'third'
    },
    {
      id: 'spa-fitness',
      title: 'Etkinlikler',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop',
      row: 3,
      width: 'full'
    },
    {
      id: 'menu-bars',
      title: 'Restaurants',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
      row: 4,
      width: 'half'
    },
    {
      id: 'spa-wellness',
      title: 'Barlar',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop',
      row: 4,
      width: 'half'
    }
  ];



  const handleServiceClick = (serviceId) => {
    if (serviceId === 'hotel-info') {
      setShowHotelInfo(true);
    } else if (serviceId === 'offers') {
      setShowSpaFitness(true);
    } else if (serviceId === 'spa-fitness') {
      setShowEvents(true);
    } else if (serviceId === 'menu-bars') {
      setShowRestaurants(true);
    } else if (serviceId === 'spa-wellness') {
      setShowBarlar(true);
    } else {
      console.log('Service clicked:', serviceId);
      // Burada diğer servis detay sayfalarına yönlendirme yapılabilir
    }
  };



  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        
        <div className="main-container">
          <div className="content-section">
            <PromotionalCards />
            <div className="scroll-container">
              <div className="services-grid">
                {[1, 2, 3, 4].map((row) => (
                  <div key={row} className={`services-row row-${row}`}>
                    {services
                      .filter(service => service.row === row)
                      .map((service) => (
                        <ServiceCard
                          key={service.id}
                          image={service.image}
                          title={service.title}
                          onClick={() => handleServiceClick(service.id)}
                          className={`service-card-${service.width}`}
                        />
                      ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="qr-section-container">
            <QRCode />
          </div>
        </div>

        {showHotelInfo && (
          <HotelInfo onClose={() => setShowHotelInfo(false)} />
        )}
        {showSpaFitness && (
          <SpaFitness onClose={() => setShowSpaFitness(false)} />
        )}
        {showEvents && (
          <Events onClose={() => setShowEvents(false)} />
        )}
        {showRestaurants && (
          <Restaurants onClose={() => setShowRestaurants(false)} />
        )}
        {showBarlar && (
          <Barlar onClose={() => setShowBarlar(false)} />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;

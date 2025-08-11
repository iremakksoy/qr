import React, { useState } from 'react';
import Header from './components/Header';
import ServiceCard from './components/ServiceCard';
import QuickAction from './components/QuickAction';
import QRCode from './components/QRCode';
import HotelInfo from './components/HotelInfo';
import './App.css';

function App() {
  const [showHotelInfo, setShowHotelInfo] = useState(false);

  const services = [
    {
      id: 'personalize',
      title: 'Personalize Your Stay',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop'
    },
    {
      id: 'transfer',
      title: 'Transfer',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
    },
    {
      id: 'hotel-info',
      title: 'Hotel Info',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop'
    },
    {
      id: 'restaurants',
      title: 'Restaurants & Bars',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop'
    },
    {
      id: 'offers',
      title: 'Special Offers',
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=300&fit=crop'
    },
    {
      id: 'spa-fitness',
      title: 'Spa & Fitness',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop'
    }
  ];

  const quickActions = [
    {
      id: 'messages',
      title: 'Messages',
      icon: '✉️'
    },
    {
      id: 'mobile-key',
      title: 'Mobile Key',
      icon: '📱'
    },
    {
      id: 'view-bill',
      title: 'View Bill',
      icon: '📄'
    }
  ];

  const handleServiceClick = (serviceId) => {
    if (serviceId === 'hotel-info') {
      setShowHotelInfo(true);
    } else {
      console.log('Service clicked:', serviceId);
      // Burada diğer servis detay sayfalarına yönlendirme yapılabilir
    }
  };

  const handleQuickActionClick = (actionId) => {
    console.log('Quick action clicked:', actionId);
    // Burada hızlı aksiyon işlemleri yapılabilir
  };

  return (
    <div className="App">
      <Header />
      
      <div className="main-container">
        <div className="content-section">
          <div className="scroll-container">
            <div className="services-grid">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  image={service.image}
                  title={service.title}
                  onClick={() => handleServiceClick(service.id)}
                />
              ))}
            </div>
            
            <div className="quick-actions">
              {quickActions.map((action) => (
                <QuickAction
                  key={action.id}
                  icon={action.icon}
                  title={action.title}
                  onClick={() => handleQuickActionClick(action.id)}
                />
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
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import QRCode from './QRCode';
import './MenuPage.css';

const MenuPage = ({ onClose, restaurantName = "Restaurant" }) => {
  const [selectedCategory, setSelectedCategory] = useState('breakfasts');
  const [scrollPosition, setScrollPosition] = useState(0);

  const categories = [
    { id: 'breakfasts', name: 'Breakfasts', time: '07:00-11:00' },
    { id: 'starters', name: 'Starters', time: '12:00-23:00' },
    { id: 'salads', name: 'Salads', time: '12:00-23:00' },
    { id: 'soups', name: 'Soups', time: '12:00-23:00' },
    { id: 'mains', name: 'Mains', time: '12:00-23:00' },
    { id: 'desserts', name: 'Desserts', time: '12:00-23:00' },
    { id: 'drinks', name: 'Drinks', time: '12:00-23:00' },
    { id: 'hot-drinks', name: 'Hot Drinks', time: '12:00-23:00' },
    { id: 'alkol', name: 'Alkol', time: '12:00-23:00' }
  ];

  const menuItems = {
    breakfasts: [
      {
        id: 1,
        name: 'Continental Breakfast',
        price: '₺150.00',
        image: 'https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?w=100&h=100&fit=crop',
        description: 'Fresh bread, butter, jam, cheese, eggs, and coffee'
      },
      {
        id: 2,
        name: 'Oatmeal Breakfast',
        price: '₺120.00',
        image: 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=100&h=100&fit=crop',
        description: 'Oatmeal with bananas, blueberries, and walnuts'
      },
      {
        id: 3,
        name: 'French Toast',
        price: '₺85.00',
        image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=100&h=100&fit=crop',
        description: 'French toast with powdered sugar and berries'
      },
      {
        id: 4,
        name: 'Biscuits n\' Gravy with Bacon',
        price: '₺120.00',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=100&h=100&fit=crop',
        description: 'Biscuits with gravy, scrambled eggs, and bacon'
      }
    ],
    starters: [
      {
        id: 5,
        name: 'Bruschetta',
        price: '₺75.00',
        image: 'https://images.unsplash.com/photo-1572445271230-a78b5944a659?w=100&h=100&fit=crop',
        description: 'Toasted bread with tomatoes, garlic, and basil'
      },
      {
        id: 6,
        name: 'Spring Rolls',
        price: '₺90.00',
        image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=100&h=100&fit=crop',
        description: 'Fresh vegetables wrapped in rice paper'
      }
    ],
    salads: [
      {
        id: 7,
        name: 'Caesar Salad',
        price: '₺85.00',
        image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=100&h=100&fit=crop',
        description: 'Romaine lettuce, croutons, parmesan cheese'
      },
      {
        id: 8,
        name: 'Greek Salad',
        price: '₺95.00',
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=100&h=100&fit=crop',
        description: 'Cucumber, tomatoes, olives, feta cheese'
      }
    ],
    soups: [
      {
        id: 9,
        name: 'Tomato Soup',
        price: '₺65.00',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=100&h=100&fit=crop',
        description: 'Creamy tomato soup with croutons'
      },
      {
        id: 10,
        name: 'Chicken Noodle Soup',
        price: '₺75.00',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=100&h=100&fit=crop',
        description: 'Homemade chicken soup with vegetables'
      }
    ],
    mains: [
      {
        id: 11,
        name: 'Grilled Salmon',
        price: '₺180.00',
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=100&h=100&fit=crop',
        description: 'Fresh salmon with seasonal vegetables'
      },
      {
        id: 12,
        name: 'Beef Steak',
        price: '₺220.00',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=100&h=100&fit=crop',
        description: 'Premium beef steak with mashed potatoes'
      }
    ],
    desserts: [
      {
        id: 13,
        name: 'Chocolate Cake',
        price: '₺60.00',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=100&h=100&fit=crop',
        description: 'Rich chocolate cake with vanilla ice cream'
      },
      {
        id: 14,
        name: 'Tiramisu',
        price: '₺70.00',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=100&h=100&fit=crop',
        description: 'Classic Italian tiramisu with coffee'
      }
    ],
    drinks: [
      {
        id: 15,
        name: 'Fresh Orange Juice',
        price: '₺35.00',
        image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=100&h=100&fit=crop',
        description: 'Freshly squeezed orange juice'
      },
      {
        id: 16,
        name: 'Lemonade',
        price: '₺30.00',
        image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=100&h=100&fit=crop',
        description: 'Refreshing homemade lemonade'
      },
      {
        id: 17,
        name: 'Iced Tea',
        price: '₺25.00',
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=100&h=100&fit=crop',
        description: 'Cold brewed iced tea with lemon'
      },
      {
        id: 18,
        name: 'Coca Cola',
        price: '₺20.00',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop',
        description: 'Classic Coca Cola'
      }
    ],
    'hot-drinks': [
      {
        id: 19,
        name: 'Turkish Coffee',
        price: '₺25.00',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=100&h=100&fit=crop',
        description: 'Traditional Turkish coffee'
      },
      {
        id: 20,
        name: 'Espresso',
        price: '₺20.00',
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=100&h=100&fit=crop',
        description: 'Strong Italian espresso'
      },
      {
        id: 21,
        name: 'Cappuccino',
        price: '₺30.00',
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=100&h=100&fit=crop',
        description: 'Cappuccino with foamed milk'
      },
      {
        id: 22,
        name: 'Hot Chocolate',
        price: '₺35.00',
        image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=100&h=100&fit=crop',
        description: 'Rich hot chocolate with whipped cream'
      },
      {
        id: 23,
        name: 'Tea',
        price: '₺15.00',
        image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=100&h=100&fit=crop',
        description: 'Traditional Turkish tea'
      }
    ],
    alkol: [
      {
        id: 24,
        name: 'Red Wine',
        price: '₺120.00',
        image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=100&h=100&fit=crop',
        description: 'Premium red wine selection'
      },
      {
        id: 25,
        name: 'White Wine',
        price: '₺110.00',
        image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b0d?w=100&h=100&fit=crop',
        description: 'Crisp white wine'
      },
      {
        id: 26,
        name: 'Beer',
        price: '₺45.00',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop',
        description: 'Local and imported beers'
      },
      {
        id: 27,
        name: 'Whiskey',
        price: '₺180.00',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop',
        description: 'Premium whiskey selection'
      },
      {
        id: 28,
        name: 'Vodka',
        price: '₺160.00',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=100&h=100&fit=crop',
        description: 'Premium vodka with mixers'
      },
      {
        id: 29,
        name: 'Gin & Tonic',
        price: '₺140.00',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop',
        description: 'Classic gin and tonic'
      }
    ]
  };

  const currentCategory = categories.find(cat => cat.id === selectedCategory);
  const currentMenuItems = menuItems[selectedCategory] || [];

  const handleScrollLeft = () => {
    const container = document.querySelector('.categories-scroll');
    if (container) {
      container.scrollBy({ left: -200, behavior: 'smooth' });
      setScrollPosition(Math.max(0, scrollPosition - 200));
    }
  };

  const handleScrollRight = () => {
    const container = document.querySelector('.categories-scroll');
    if (container) {
      container.scrollBy({ left: 200, behavior: 'smooth' });
      setScrollPosition(scrollPosition + 200);
    }
  };

  return (
    <div className="menu-page-overlay">
      <div className="menu-page-container">
        <div className="menu-page-content">
          <div className="menu-scroll-container">
            <div className="menu-header">
              <button className="back-button" onClick={onClose}>
                <span>←</span>
              </button>
                             <h2>Menu</h2>
              <button className="menu-button">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
            
            <div className="categories-container">
              <button 
                className="scroll-arrow scroll-left" 
                onClick={handleScrollLeft}
                style={{ display: scrollPosition > 0 ? 'flex' : 'none' }}
              >
                <span>‹</span>
              </button>
              
              <div className="categories-scroll">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`category-button ${selectedCategory === category.id ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
              
              <button 
                className="scroll-arrow scroll-right" 
                onClick={handleScrollRight}
                style={{ display: scrollPosition < 400 ? 'flex' : 'none' }}
              >
                <span>›</span>
              </button>
            </div>

            <div className="menu-section">
              <h3 className="section-title">
                {currentCategory?.name.toUpperCase()} ({currentCategory?.time})
              </h3>
              
              <div className="menu-items">
                {currentMenuItems.map((item) => (
                  <div key={item.id} className="menu-item">
                    <div className="menu-item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="menu-item-content">
                      <div className="menu-item-header">
                        <h4 className="menu-item-name">{item.name}</h4>
                        <span className="menu-item-price">{item.price}</span>
                      </div>
                      <p className="menu-item-description">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="qr-section-container">
            <QRCode />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;

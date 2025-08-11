import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' }
  ];

  const currentLanguage = languages.find(lang => lang.code === selectedLanguage);

  const handleLanguageSelect = (languageCode) => {
    setSelectedLanguage(languageCode);
    setIsLanguageOpen(false);
  };

  return (
    <header className="header">
      <div className="header-left">
        <div className="language-selector">
          <div 
            className="language-current"
            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
          >
            <span className="flag">{currentLanguage.flag}</span>
            <span className="language-text">{currentLanguage.code.toUpperCase()}</span>
          </div>
          
          {isLanguageOpen && (
            <div className="language-dropdown">
              {languages.map((language) => (
                <div
                  key={language.code}
                  className={`language-option ${selectedLanguage === language.code ? 'active' : ''}`}
                  onClick={() => handleLanguageSelect(language.code)}
                >
                  <span className="flag">{language.flag}</span>
                  <span className="language-name">{language.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="header-center">
        <div className="logo">
          <div className="logo-text-container">
            <span className="logo-text-main">DOSINIA</span>
            <span className="logo-text-sub">LUXURY RESORT</span>
          </div>
        </div>
      </div>
      
      <div className="header-right">
        <button className="menu-button">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header; 
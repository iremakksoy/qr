import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button 
      className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`}
      onClick={toggleTheme}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="toggle-icon">
        {isDarkMode ? (
          <span className="sun-icon">☀️</span>
        ) : (
          <span className="moon-icon">🌙</span>
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;

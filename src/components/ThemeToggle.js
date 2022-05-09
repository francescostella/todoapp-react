import React from 'react';
import './ThemeToggle.scss';

function ThemeToggle() {
  const toggleTheme = (event) => {
    event.preventDefault();
    document.documentElement.classList.toggle('dark-theme');
  };

  return (
    <div className="theme-toggle">
      <button className="theme-toggle__button" onClick={toggleTheme}>
        <span className="theme-toggle__icon theme-toggle__icon--light">☀️</span>
        <span className="theme-toggle__icon theme-toggle__icon--dark">🌚</span>
      </button>
    </div>
  );
}

export default ThemeToggle;

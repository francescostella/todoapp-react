import React from 'react';
import './ThemeToggle.scss';

function ThemeToggle() {
  return (
    <div className="theme-toggle">
      <button className="theme-toggle__button">
        <span className="theme-toggle__icon theme-toggle__icon--light">☀️</span>
        <span className="theme-toggle__icon theme-toggle__icon--dark">🌚</span>
      </button>
    </div>
  );
}

export default ThemeToggle;

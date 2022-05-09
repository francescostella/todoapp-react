import React, { useState, useEffect } from 'react';
import './ThemeToggle.scss';

let isOSDarkThemed; 
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

if (prefersDarkScheme.matches) {
  isOSDarkThemed = true;
} else {
  isOSDarkThemed = false;
}

function ThemeToggle() {
  const [isDarkTheme, setIsDarkTheme] = useState(isOSDarkThemed);

  useEffect(() => {
    document.documentElement.classList.toggle('dark-theme', isDarkTheme);
    console.log('useEffect: ', isDarkTheme);
  }, [isDarkTheme]);

  return (
    <div className="theme-toggle">
      <button className="theme-toggle__button" onClick={() => setIsDarkTheme(!isDarkTheme)}>
        <span className="theme-toggle__icon theme-toggle__icon--light">☀️</span>
        <span className="theme-toggle__icon theme-toggle__icon--dark">🌚</span>
      </button>
    </div>
  );
}

export default ThemeToggle;

import React from 'react';
import ThemeToggle from './ThemeToggle';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <ThemeToggle />
      <h1 className="header__title">TodoApp</h1>
      <p className="header__subtitle">
        Application written in vanilla Javascript
      </p>
    </header>
  );
}

function name(params) {
  return <div></div>;
}

export default Header;

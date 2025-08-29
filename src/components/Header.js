import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1 className="logo-text">Cosmic Insights</h1>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="/" className="nav-link">Home</a></li>
            <li><a href="#horoscopes" className="nav-link">Horoscopes</a></li>
            <li><a href="#zodiac" className="nav-link">Zodiac Signs</a></li>
            <li><a href="/ai" className="nav-link">AI Insights</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
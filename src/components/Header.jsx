import React from 'react';
import './Header.css';
import logo from '../assets/logo.jpg'

const Header = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className="header glass">
      <div className="container header-content">
        <div className="logo">
          <img className="logo-icon" src={logo} alt="Logo" />
          <span className="logo-text">Product Discovery</span>
        </div>
        <div className="search-container">
          <input
            type="text"
            className="input search-input"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;

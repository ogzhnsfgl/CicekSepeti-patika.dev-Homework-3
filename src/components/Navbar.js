import React from 'react';

const Navbar = () => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <p className="header-logo">ListofDay</p>
        <div className="header-input">
          <i className="fas fa-search"></i>
          <input type="search" name="search" className="header-input" />
        </div>
        <div className="header-social-menu">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-spotify fa-2x"></i>
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube fa-2x"></i>
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

//rafce for shortcut
import React from "react";
import treasureMapLogo from '../images/treasuremap_logo.png'; 

const Banner = () => {
  return (
    <header className="banner">
      {/*Container for header content */}
      <div className="banner-title-logo">
        {/* Logo section */}
        <img 
          src={treasureMapLogo} 
          alt="Site Logo" 
          className="banner-image" 
        />
        
        {/* Main Title */}
        <a href="index" className="banner-title">
          treasuremap
        </a>
        {/* Navigation Menu */}
      </div>

      <div className="banner-links">
        <nav className="banner-navigation">
          <ul className="nav-links">
            {/* List of links for Navigation */}
            <li>
              <a href="#">Home</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Banner;

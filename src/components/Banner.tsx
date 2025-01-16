//rafce for shortcut
import React from "react";
import treasureMapLogo from "../images/treasuremap_logo.png";

interface Props {
    bannerStyle?: React.CSSProperties;
    bannerTitleStyle?: React.CSSProperties;
}

const Banner = ({bannerStyle, bannerTitleStyle}: Props) => {
  return (
    <header className="banner" style={bannerStyle}>
      {/*Container for header content */}
      <div className="banner-title-logo" >
        {/* Logo section */}
        <img src={treasureMapLogo} alt="Site Logo" className="banner-image" />

        {/* Main Title */}
        <a href="/" className="banner-title" style={bannerTitleStyle}>
          treasuremap
        </a>
        {/* Navigation Menu */}
      </div>

    {/*tentatively don't need this
      <div className="banner-links">
        <nav className="banner-navigation">
          <ul
            className="nav-links"
          >
            {/* List of links for Navigation 
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
      </div>*/}
    </header>
  );
};

export default Banner;

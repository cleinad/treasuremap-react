//rafce for shortcut
import React from "react";
import treasureMapLogo from "../images/treasuremap_logo.png";
import ConceptsGallery from "../pages/ConceptsGallery";

interface Props {
    bannerStyle?: React.CSSProperties;
    bannerTitleStyle?: React.CSSProperties;
    linkColours?: React.CSSProperties;
}

const Banner = ({bannerStyle, bannerTitleStyle, linkColours}: Props) => {
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

    {
      <div className="banner-links">
        <nav className="banner-navigation">
          <ul
            className="nav-links"
          >
            {/* List of links for Navigation */}
            <li>
              <a href="ConceptsGallery" style={linkColours}>Concepts Gallery</a>
            </li>
          </ul>
        </nav>
      </div>}
    </header>
  );
};

export default Banner;

import React, { useState } from "react";
import Banner from "../components/Banner";

import DollarCostAveragingImg from "../images/concept-gallery/dollar-cost-averaging.png";
import HowMoneyWorksImg from "../images/concept-gallery/how-money-works.png";
import RuleOf72Img from "../images/concept-gallery/rule-of-72.png";
import HighCostOfWaitingImg from "../images/concept-gallery/the-high-cost-of-waiting.png";
import WealthFormulaImg from "../images/concept-gallery/wealth-formula.png";

interface Image {
  src: string;
  alt: string;
  //maybe other properties
  //description?: string;
}

const images: Image[] = [
  { src: DollarCostAveragingImg, alt: "Dollar Cost Averaging" },
  { src: HowMoneyWorksImg, alt: "How Money Works" },
  { src: RuleOf72Img, alt: "The Rule of 72" },
  { src: HighCostOfWaitingImg, alt: "The High Cost of Waiting" },
  { src: WealthFormulaImg, alt: "The Wealth Formula" },
];

const ConceptsGallery = () => {
  //State to track expanded image
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const imageElements = images.map((image, index) => (
    <div
      key={index}
      id="img-box"
      style={{ position: "relative" }} // needed for absolute positioning of overlay
      onMouseEnter={(e) => {
        //add a class on hover
        e.currentTarget.classList.add("hovered");
      }}
      onMouseLeave={(e) => {
        //remove class on mouse leave
        e.currentTarget.classList.remove("hovered");
      }}
      //expand on click
      onClick={() => setExpandedImage(image.src)}
    >
      <img src={image.src} alt={image.alt} id="img-preview" />
      <div id="image-label">
        <h3> {image.alt}</h3>
      </div>
    </div>
  ));

  const handleClose = () => {
    setExpandedImage(null); //close expanded image
  };

  return (
    <>
      <Banner />
      <div id="concept-gallery-grid">{imageElements}</div>

      {/*Conditionally render expanded image overlay*/}

      {expandedImage && (
        <div id="expanded-image-overlay" onClick={handleClose}>
          {/*Close on overlay click */}

          <img src={expandedImage} alt="Expanded Image" id="expanded-image" />
        </div>
      )}
    </>
  );
};

export default ConceptsGallery;

/*

// Method 1: Using map() for simple display
const imageElements1 = images.map((image, index) => (
  <img key={index} src={image.src} alt={image.alt} />
));

// Method 2: Using map() and a separate component (good for more complex image display)
const ImageComponent: React.FC<Image> = ({ src, alt, description }) => (
  <div>
    <img src={src} alt={alt} />
    {description && <p>{description}</p>}{" "}
    {/* Conditionally render description }
  </div>
);

const imageElements2 = images.map((image, index) => (
  <ImageComponent key={index} {...image} /> // Spread the image props
)); */

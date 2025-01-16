import React from "react";

import Banner from "../components/Banner";
import ArticleHeader from "../components/ArticleHeader";
import Footer from "../components/Footer";

import HowMoneyWorksPic from "../images/how-money-works.png";

const HowMoneyWorks = () => {
  return (
    <>
      <Banner></Banner>
      <div className="content">
        <ArticleHeader
          title="Strategy"
          updateDate="January 15, 2025"
        ></ArticleHeader>
        <div className="text-block">
          <div id="how-money-works">
            <div className="header">
              <h2>How Money Works</h2>
            </div>
            <img
              src={HowMoneyWorksPic}
              alt="How Money Works Equation"
              className="general-image"
            />
            <p>Maximize Gains</p>
          </div>
        </div>
      </div>

      <Footer
        previousPageLink="Wealth"
        nextPageLink="HighCostOfWaiting"
      ></Footer>
    </>
  );
};

export default HowMoneyWorks;

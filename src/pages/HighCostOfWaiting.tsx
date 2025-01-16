import React from "react";

import Banner from "../components/Banner";
import ArticleHeader from "../components/ArticleHeader";
import Footer from "../components/Footer";

import HighCostOfWaitingPic from "../images/the-high-cost-of-waiting.png";

const HighCostOfWaiting = () => {
  return (
    <>
      <Banner></Banner>
      <div className="content">
        <ArticleHeader
          title="Start today"
          updateDate="January 15, 2025"
        ></ArticleHeader>
        <div className="text-block">
          <div id="how-money-works">
            <div className="header">
              <h2>How Money Works</h2>
            </div>
            <img
              src={HighCostOfWaitingPic}
              alt="The High Cost of Waiting"
              className="general-image"
            />
            <p>Maximize Gains</p>
          </div>
        </div>
      </div>

      <Footer previousPageLink="HowMoneyWorks" nextPageLink="RuleOf72"></Footer>
    </>
  );
};

export default HighCostOfWaiting;

import React from "react";

import Banner from "../components/Banner";
import ArticleHeader from "../components/ArticleHeader";
import Footer from "../components/Footer";

import DollarCostAveragingPic from "../images/dollar-cost-averaging.png";

const DollarCostAveraging = () => {
  return (
    <>
      <Banner></Banner>
      <div className="content">
        <ArticleHeader
          title="Consistency!"
          updateDate="January 15, 2025"
        ></ArticleHeader>
        <div className="text-block">
          <div id="how-money-works">
            <div className="header">
              <h2>How Money Works</h2>
            </div>
            <img
              src={DollarCostAveragingPic}
              alt="The High Cost of Waiting"
              className="general-image"
            />
            <p>Maximize Gains</p>
          </div>
        </div>
      </div>

      <Footer nextPageLink="RuleOf72"></Footer>
    </>
  );
};

export default DollarCostAveraging;

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
              <h2>Dollar Cost Averaging</h2>
            </div>
            <img
              src={DollarCostAveragingPic}
              alt="The High Cost of Waiting"
              className="general-image"
            />
            <p><br/>
            There is only one world where making a lump sum contribution is profitable - when your investment grows in value. 
            Unfortunately for us, that is not always the world we live in. Luckily, there is a handy tool called Dollar Cost Averaging
            that can help us curb market fluctuations. As you see for yourself, you capture the lows and highs, ultimately building
            a profitable investment in the long run.</p>
          </div>
        </div>
      </div>

      <Footer nextPageLink="Rainforest"></Footer>
    </>
  );
};

export default DollarCostAveraging;

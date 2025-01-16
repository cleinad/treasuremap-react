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
          title="What're you waiting for?!"
          updateDate="January 15, 2025"
        ></ArticleHeader>
        <div className="text-block">
          <div id="how-money-works">
            
            <img
              src={HighCostOfWaitingPic}
              alt="The High Cost of Waiting"
              className="general-image"
            />
            <p>Your money is worth more now, than it will likely be again. Inflation chews it up slowly, 
                and as we can see above, the sooner you start, the sooner you can get the law of compound interest working for you.
            </p>
          </div>
        </div>
      </div>

      <Footer previousPageLink="Wealth" nextPageLink="RuleOf72"></Footer>
    </>
  );
};

export default HighCostOfWaiting;

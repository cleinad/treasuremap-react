import React from "react";

import Banner from "../components/Banner";
import ArticleHeader from "../components/ArticleHeader";
import Footer from "../components/Footer";

import RuleOf72Pic from "../images/concept-gallery/rule-of-72.png";

const RuleOf72 = () => {
  return (
    <>
      <Banner></Banner>
      <div className="content">
        <ArticleHeader
          title="How many years?"
          updateDate="January 15, 2025"
        ></ArticleHeader>
        <div className="text-block">
          <div id="how-money-works">
            <img
              src={RuleOf72Pic}
              alt="The High Cost of Waiting"
              className="general-image"
            />
            <p>If you divide 72 by your rate of return, that's approximately how long
                it'll take for your money to double.
                <br/><br/>
                A helpful tool to help us along the way.
            </p>
          </div>
        </div>
      </div>

      <Footer previousPageLink="HowMoneyWorks" nextPageLink="DollarCostAveraging"></Footer>
    </>
  );
};

export default RuleOf72;

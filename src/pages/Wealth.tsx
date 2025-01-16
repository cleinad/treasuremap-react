import React from "react";
import Banner from "../components/Banner";
import ArticleHeader from "../components/ArticleHeader";
import Footer from "../components/Footer";

import WealthFormula from "../images/wealth-formula.png";

const Wealth = () => {
  return (
    <>
      <Banner
        bannerStyle={{ backgroundColor: "transparent" }}
        bannerTitleStyle={{ color: "var(--text-color)" }}
      ></Banner>

      <div className="content">
        <ArticleHeader
          title="Where are we going?"
          updateDate="January 15, 2025"
        ></ArticleHeader>

        <div id="wealth-formula">
          <div className="text-block">
            <div className="header">
              <h2>The Wealth Formula</h2>
            </div>
            <p>
              The principles of growing your wealth through investing depends on
              a couple of factors. Essentially, we want to be able to invest a
              sum of money and let it grow over a period of time.
              <br />
              <br />
              <img
                src={WealthFormula}
                alt="The Wealth Formula"
                className="general-image"
              />
              What makes or breaks everything for us is our rate of return - the
              law of compounding can help our money grow exponentially, but the
              reverse is true too.
              <br />
              <br />
              Put plain and simple, the plan is to maximize the amount we can
              invest - and for as long as possible, while minimizing the amount
              we give away (taxes). The success of our investment depends on the
              rate of return - and usually the longer our investment horizon the
              riskier we can be. It's also important to factor in inflation, as
              it acts as a negative rate of return for us.
            </p>
          </div>
        </div>
      </div>

      <Footer previousPageLink="financialFoundation" nextPageLink="HighCostOfWaiting"></Footer>
    </>
  );
};

export default Wealth;

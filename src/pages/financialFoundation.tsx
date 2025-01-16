import React from "react";
import Banner from "../components/Banner";
import ArticleHeader from "../components/ArticleHeader";
import Footer from "../components/Footer";

const FinancialFoundation = () => {
  return (
    <>
      <Banner/>

      <div className="content">
        <ArticleHeader title="Alright. What's the plan?"
        updateDate="January 14, 2025"></ArticleHeader>

        <div className="text-block">
          <p>
            In our journey, there are places we must pass through to obtain the
            loot, and we must prepare well from them - building a solid team
            from the ground up. These are the steps we should follow to help us
            find treasure! 
            <br/>(Read from bottom to top)
          </p>
        </div>

        <div className="pyramid">
          <div className="layer">
            <h3>Investments</h3>
            <p>Additional money used to generate future returns.</p>
          </div>

          <div className="layer">
            <h3>Emergency Fund</h3>
            <p>Build up our emergency supply for potential disasters.</p>
          </div>

          <div className="layer">
            <h3>Debt Management</h3>
            <p>
              If you're in debt, it doesn't have to be that way. Now that it's
              already happened, we must battle this monster. Conquering debt is
              an astronomical step in our journeys.
            </p>
          </div>

          <div className="layer">
            <h3>Protection</h3>
            <p>
              We have to start off by protecting ourselves for future
              uncertainties, from layoffs, to injuries and even death. These
              disasters like a tsunami can completely change the course of your
              journey.
              <br />
              Find out how to protect yourself and your family.
            </p>
          </div>

          <div className="layer">
            <h3>Knowing our position</h3>
            <p>
              Most importantly, we have to understand where we are in our
              financial journeys. This information is only for you, so{" "}
              <b>be honest with yourself.</b>
              <br />
              We will figure if we have debts, assets, income and everything
              else necessary!
            </p>
          </div>

          <p>
            Our journey starts at the base of the pyramid, and we work our way
            up as we progress.
          </p>
        </div>
      </div>

      <Footer previousPageLink="" nextPageLink="Wealth"></Footer>
    </>
  );
};

export default FinancialFoundation;

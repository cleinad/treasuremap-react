import React from "react";
import Banner from "../components/Banner";
import ArticleHeader from "../components/ArticleHeader";
import Footer from "../components/Footer";
import SmallDivider from "../components/SmallDivider";
import KeyPointsAccordion from "../components/KeyPointsAccordion";

const TFSA = () => {

        const keyPoints = [
          {
            id: "eligibility",
            title: "Eligibility",
            content: "You must be a Canadian resident aged 18 or older with a valid Social Insurance Number (SIN)."
          },
          {
            id: "tax-free-growth",
            title: "Tax-Free Growth",
            content: "All investment income (interest, dividends, and capital gains) earned within a TFSA is completely tax-free."
          },
          {
            id: "contribution-limit",
            title: "Annual Contribution Limit",
            content: "In 2025, the contribution limit is $7,000, with total contribution room since 2009 being $102,000 if you've never contributed before."
          },
          {
            id: "unused-room",
            title: "Unused Contribution Room Carries Over",
            content: "Any unused contribution room is carried forward indefinitely."
          }
        ];

  return (
    <>
      <Banner />
      <div className="content">
        <ArticleHeader
          title="Using the TFSA"
          updateDate="January 27, 2025"
        ></ArticleHeader>

        <div className="text-block">
          <h3>What is it?</h3>
          <SmallDivider colour="var(--secondary-color)" />
          <p>
            A Tax-Free Savings Account (TFSA) is a flexible, registered savings
            account available to Canadian residents aged 18 and older. It allows
            you to earn investment income, such as interest, dividends,
            and capital gains, tax-free throughout their lifetime. Unlike other
            registered accounts, contributions to a TFSA are not tax-deductible;
            however, withdrawals are tax-free.
          </p>
        </div>

        <div id="key-points-boundary">
          <h3>Key Points</h3>
          <SmallDivider colour="var(--golden-color)" />
          <KeyPointsAccordion items={keyPoints} />
        </div>
        

        <div className="text-block">
          <h3>Benefits</h3>
          <SmallDivider colour="var(--rainforest-mid-color)" />
          <p>
            <div id="subheading-bold">Tax-Free Growth:</div> All investment
            income earned within a TFSA is exempt from taxes, enabling your
            savings to grow more efficiently. <br />
            <br />
            <div id="subheading-bold">Flexible Withdrawals:</div> Funds can be
            withdrawn at any time for any purpose without incurring taxes,
            making it ideal for both short-term and long-term financial goals.{" "}
            <br />
            <br />
            <div id="subheading-bold">No Impact on Benefits:</div> Withdrawals
            do not affect eligibility for federal income-tested benefits and
            credits, such as the Canada Child Benefit or Old Age Security.
          </p>
        </div>
      </div>

      <Footer previousPageLink="" nextPageLink="Upcoming"></Footer>
    </>
  );
};

export default TFSA;

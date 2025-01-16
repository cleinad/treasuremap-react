import React from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Rainforest = () => {
  return (
    <>
      <Banner bannerTitleStyle={{ color: "var(--rainforest-light-color)" }} />
      <section className="rainforest-cinematic">
        <div className="gradient" />
        <div className="hero-content">
          <h1>
            Chapter II, <br /> Protection
          </h1>
          <h3>
            Protect ourselves,
            <br />
            preparing for the worst case scenario
            <br />
            along our adventure.
          </h3>
        </div>
      </section>
    </>
  );
};

export default Rainforest;

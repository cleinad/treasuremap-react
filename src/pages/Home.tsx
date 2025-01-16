import React from "react";
import Banner from "../components/Banner";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <Banner bannerTitleStyle={{color: "var(--background-color)"}}/>
      <section className="hero-section">
        <div className="gradient" />
        <div className="hero-content">
          <h1>Welcome, <br/> Adventurer</h1>
          <h3>
            Embark on a journey to<br/>conquer your financial fears and<br/>uncover
            life's greatest treasures.
          </h3>
        </div>
      </section>

      {/*<!-- Regular content section -->*/}
      <section className="info-section">
        <h2>Chart Your Course</h2>
        <p>
          Discover simple steps to navigate your financial journey, from
          understanding where you are today to preparing for a bright tomorrow.
          <br />
          <br />
          Welcome to you personal finance map! Here, you'll uncover the secrets
          to financial treasure: the knowledge, tools and strategies to navigate
          life's adventures with confidence
        </p>
        <button className="cta-button">
            <Link to="/financialFoundation">Start your Journey!</Link>
        </button>
      </section>
    </>
  );
};

export default Home;

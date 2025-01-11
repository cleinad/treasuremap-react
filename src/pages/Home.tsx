import React from 'react'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <>
        <section className="hero-section">
            <div className ="gradient"/>
            <div className="hero-content">
                <h1>Welcome, Adventurer</h1>
                <h3 style={{color: "var(--background-color)"}}>Embark on a journey to conquer your financial fears and uncover life's greatest treasures.</h3>
                <button className="cta-button">
                    <a href="financial-foundation">Embark!</a>
                </button>
            </div>
        </section>

        {/*<!-- Regular content section -->*/}
        <section className="info-section">
            <h2>Chart Your Course</h2>
            <p>Discover simple steps to navigate your financial journey, from understanding where you are today to preparing for a bright tomorrow.</p>
            <p><br/>
                Welcome to you personal finance map! Here, you'll uncover the secrets to financial treasure: 
                the knowledge, tools and strategies to navigate life's adventures with confidence
            </p>
        </section>

        <Banner />
    </>
  )
}

export default Home
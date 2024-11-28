import React from 'react';
import '../../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Solving Global Issues Through Practical Love</h1>
        <p>Fostering collaboration and innovation globally.</p>
        <div className="hero-buttons">
          <button className="btn-learn">Learn More</button>
          <button className="btn-involved">Get Involved</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

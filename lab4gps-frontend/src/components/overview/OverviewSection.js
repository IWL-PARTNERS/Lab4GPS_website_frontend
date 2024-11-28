import React from "react";
import "../../styles/OverviewSection.css";
import introImage from "../../assets/Images/Lab4GPS_Logo_2024-1.jpg"; // Add a relevant image in the assets folder

const OverviewSection = () => {
  return (
    <div className="overview-section">
      <div className="overview-container">
        {/* Left: Image or Infographic */}
        <div className="overview-left">
          <img
            src={introImage}
            alt="Introduction to Lab4GPS"
            className="overview-image"
          />
        </div>

        {/* Right: Text and CTA */}
        <div className="overview-right">
          <h2 className="overview-title">Introduction to Lab4GPS</h2>
          <p className="overview-description">
            At Lab4GPS, we solve global challenges through education, research,
            and practical application. Our mission is to transform global
            problem-solving into sustainable and scalable solutions, enabling
            individuals to practice love through innovative actions.
          </p>
          <p className="overview-details">
            We aim to inspire, educate, and connect individuals and
            organizations passionate about making a meaningful impact. From our
            mission and vision to our core values and achievements, Lab4GPS is
            your gateway to solving global challenges.
          </p>
          <button className="cta-button" onClick={() => alert("Explore more!")}>
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;

import React from 'react';
import '../../styles/AboutSection.css';

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        {/* Left Section: YouTube Video */}
        <div className="about-left">
          <iframe
            className="about-video"
            src="https://www.youtube.com/embed/savPHzThsZc"
            title="Lab4GPS Introduction Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Right Section: Mission, Vision, Core Values */}
        <div className="about-right">
          <h2>About Lab4GPS</h2>
          <div className="about-content">
            <h3>Mission</h3>
            <p>Solving global problems through practical love by empowering individuals and fostering collaboration.</p>

            <h3>Vision</h3>
            <p>A world where empathy and innovation transform global challenges into sustainable solutions.</p>

            <h3>Core Values</h3>
            <p>
              <strong>Love:</strong> Solving others' problems with compassion.<br />
              <strong>Courage:</strong> Innovating despite challenges.<br />
              <strong>Wisdom:</strong> Applying knowledge to create lasting impact.
            </p>

            <h3>Who We Are</h3>
            <p>
              Lab4GPS is a community of Global Problem Solvers dedicated to making the world a better place through education,
              research, and purposeful innovation.
            </p>

            <button className="cta-button">Explore Our Story</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

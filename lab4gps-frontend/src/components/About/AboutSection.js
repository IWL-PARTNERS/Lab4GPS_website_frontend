import React, { useState } from "react";
import "../../styles/AboutSection.css"; // Import your CSS file for styling

const AboutSection = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("why");

  // Dummy data for the tabs
  const content = {
    why: "Our purpose is to solve global challenges through practical love and collaboration.",
    who: "Lab4GPS consists of a dedicated team of innovators, educators, and problem-solvers.",
    what: "Lab4GPS creates scalable solutions for pressing global issues by fostering collaboration.",
    where: "We envision a world where empathy and innovation transform global challenges into opportunities.",
    how: "Our core values of love, courage, and wisdom guide our efforts in addressing these challenges.",
    team: [
      { name: "Alice Johnson", role: "CEO", bio: "Alice leads Lab4GPS with a passion for innovation." },
      { name: "Bob Smith", role: "CTO", bio: "Bob drives our technical vision and solutions." },
    ],
    timeline: [
      { title: "Founded", date: "2020", description: "Lab4GPS was established to tackle global challenges." },
      { title: "First Milestone", date: "2021", description: "Launched our first successful project." },
    ],
    testimonials: [
      { name: "John Doe", organization: "Partner Org", testimonial: "Lab4GPS is an inspiring partner!" },
    ],
    socialMedia: [
      { platform: "LinkedIn", url: "https://linkedin.com" },
      { platform: "Twitter", url: "https://twitter.com" },
    ],
  };

  // Render content for each tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "why":
        return <p>{content.why}</p>;
      case "who":
        return <p>{content.who}</p>;
      case "what":
        return <p>{content.what}</p>;
      case "where":
        return <p>{content.where}</p>;
      case "how":
        return <p>{content.how}</p>;
      case "team":
        return (
          <div className="team-section">
            {content.team.map((member, index) => (
              <div key={index} className="team-card">
                <h4>{member.name}</h4>
                <p><strong>{member.role}</strong></p>
                <p>{member.bio}</p>
              </div>
            ))}
          </div>
        );
      case "timeline":
        return (
          <div className="timeline-section">
            {content.timeline.map((event, index) => (
              <div key={index} className="timeline-card">
                <h4>{event.title}</h4>
                <p>{event.date}</p>
                <p>{event.description}</p>
              </div>
            ))}
          </div>
        );
      case "testimonials":
        return (
          <div className="testimonial-section">
            {content.testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p><strong>{testimonial.name}</strong> ({testimonial.organization})</p>
                <blockquote>{testimonial.testimonial}</blockquote>
              </div>
            ))}
          </div>
        );
      case "socialMedia":
        return (
          <div className="social-media-section">
            {content.socialMedia.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                {link.platform}
              </a>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="about-container">
      {/* Description */}
      <div className="about-description">
        <h2>About Lab4GPS</h2>
        <p>
          Lab4GPS is committed to solving global challenges through practical love, collaboration,
          and innovative solutions. Discover our mission, vision,purpose, and the core values that guide us.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="tabs">
        {["why", "who", "what", "where", "how", "team", "timeline", "testimonials", "socialMedia"].map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">{renderTabContent()}</div>
    </div>
  );
};

export default AboutSection;

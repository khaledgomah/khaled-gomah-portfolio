import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const About = ({ about, location }) => {
  return (
    <section className="section about-section" id="about">
      <div className="section-container">
        <h2 className="section-title" data-aos="fade-up">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="about-content" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
          <div className="about-card">
            <p className="about-text">{about}</p>
            {location && (
              <div className="about-location">
                <FaMapMarkerAlt className="location-icon" />
                <span>Based in {location}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

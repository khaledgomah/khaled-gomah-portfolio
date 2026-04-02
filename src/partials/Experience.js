import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const Experience = ({ experience, education }) => {
  return (
    <section className="section experience-section" id="experience">
      <div className="section-container">
        <h2 className="section-title">
          Experience & <span className="gradient-text">Education</span>
        </h2>
        <p className="section-subtitle">
          My professional journey and academic background in engineering.
        </p>

        <div className="experience-grid">
          {/* Experience Column */}
          <div className="experience-col" data-aos="fade-right">
            <div className="col-header">
              <FaBriefcase className="col-icon" />
              <h3>Work Experience</h3>
            </div>
            <div className="timeline">
              {experience.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content card">
                    <span className="item-period">{item.period}</span>
                    <h4 className="item-role">{item.role}</h4>
                    <h5 className="item-company text-gradient">{item.company}</h5>
                    <ul className="item-desc">
                      {item.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="experience-col" data-aos="fade-left">
            <div className="col-header">
              <FaGraduationCap className="col-icon" />
              <h3>Education</h3>
            </div>
            <div className="timeline">
              {education.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content card">
                    <span className="item-period">{item.period}</span>
                    <h4 className="item-degree">{item.degree}</h4>
                    <h5 className="item-school text-gradient">{item.school}</h5>
                    <p className="item-details">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

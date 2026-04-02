import React from "react";

const Skills = ({ skills }) => {
  return (
    <section className="section" id="skills">
      <div className="section-container">
        <h2 className="section-title">
          Tech <span className="gradient-text">Stack</span>
        </h2>
        <p className="section-subtitle">
          Technologies and patterns I use to build production-grade apps.
        </p>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card"
              data-aos="zoom-in"
              data-aos-duration="400"
              data-aos-delay={index * 80}
            >
              <div
                className="skill-icon-wrapper"
                style={{
                  background: skill.color + '18',
                  color: skill.color,
                }}
              >
                {skill.icon}
              </div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

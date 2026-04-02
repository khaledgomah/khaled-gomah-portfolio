import React from "react";
import { FaGithub, FaGooglePlay, FaApple, FaArrowRight } from "react-icons/fa";

const ProjectCard = ({ project: { title, description, tags, appStore, playStore, github, link, gradient, emoji }, index }) => {
  return (
    <div
      className="project-card"
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-delay={index * 100}
    >
      <div className="project-card-header" style={{ background: gradient }}>
        <span className="project-emoji">{emoji}</span>
      </div>
      <div className="project-card-body">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-desc">{description}</p>
        <div className="project-tags">
          {tags.map((tag, i) => (
            <span key={i} className="project-tag">{tag}</span>
          ))}
        </div>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "auto" }}>
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="project-link">
              <FaGithub /> GitHub <FaArrowRight className="project-link-arrow" style={{ fontSize: '0.8rem' }} />
            </a>
          )}
          {playStore && (
            <a href={playStore} target="_blank" rel="noopener noreferrer" className="project-link" title="Play Store">
              <FaGooglePlay /> Play Store <FaArrowRight className="project-link-arrow" style={{ fontSize: '0.8rem' }} />
            </a>
          )}
          {appStore && (
            <a href={appStore} target="_blank" rel="noopener noreferrer" className="project-link" title="App Store">
              <FaApple /> App Store <FaArrowRight className="project-link-arrow" style={{ fontSize: '0.8rem' }} />
            </a>
          )}
          {link && !github && !playStore && !appStore && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project <FaArrowRight className="project-link-arrow" style={{ fontSize: '0.8rem' }} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

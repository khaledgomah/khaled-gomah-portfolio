import React from "react";
import { FaGithub, FaArrowRight } from "react-icons/fa";

const ProjectCard = ({ project: { title, description, tags, link, gradient, emoji }, index }) => {
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
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <FaGithub /> View on GitHub <FaArrowRight className="project-link-arrow" style={{ fontSize: '0.8rem' }} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

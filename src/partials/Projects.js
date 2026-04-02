import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = ({ projects }) => {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-container">
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle">
          Here are some of the apps I've built with Flutter, showcasing clean architecture and modern design.
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
import React from "react";
import { FaGithub, FaLinkedinIn, FaRegEnvelope } from "react-icons/fa";

function Contact({ social }) {
  return (
    <section className="section contact-section" id="contact">
      <div className="section-container">
        <div className="contact-content">
          <h2 className="contact-heading">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="contact-text">
            I'm always excited to collaborate on Flutter projects or discuss mobile development ideas. Feel free to reach out!
          </p>
          <div className="contact-links">
            <a
              href={"mailto:" + social.email}
              className="contact-link-card"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <FaRegEnvelope className="contact-icon" />
              <span className="contact-label">{social.email}</span>
            </a>
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-card"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              <FaGithub className="contact-icon" />
              <span className="contact-label">github.com/khaledgomah</span>
            </a>
            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-card"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="200"
              >
                <FaLinkedinIn className="contact-icon" />
                <span className="contact-label">LinkedIn</span>
              </a>
            )}
          </div>
          <div className="contact-cta">
            <a href={"mailto:" + social.email} className="btn btn-primary">
              <FaRegEnvelope /> Send me an email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

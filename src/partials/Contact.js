import React from "react";
import { FaGithub, FaLinkedinIn, FaRegEnvelope, FaWhatsapp, FaPhone } from "react-icons/fa";

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
              style={{ flex: "1 1 300px", maxWidth: "320px" }}
            >
              <FaRegEnvelope className="contact-icon" />
              <span className="contact-label">Email</span>
            </a>
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-card"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
              style={{ flex: "1 1 300px", maxWidth: "320px" }}
            >
              <FaGithub className="contact-icon" />
              <span className="contact-label">GitHub</span>
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
                style={{ flex: "1 1 300px", maxWidth: "320px" }}
              >
                <FaLinkedinIn className="contact-icon" />
                <span className="contact-label">LinkedIn</span>
              </a>
            )}
            {social.phone && (
              <a
                href={`https://wa.me/${social.phone.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-card"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="300"
                style={{ flex: "1 1 300px", maxWidth: "320px" }}
              >
                <FaWhatsapp className="contact-icon" />
                <span className="contact-label">WhatsApp</span>
              </a>
            )}
            {social.phone && (
              <a
                href={`tel:${social.phone}`}
                className="contact-link-card"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="400"
                style={{ flex: "1 1 300px", maxWidth: "320px" }}
              >
                <FaPhone className="contact-icon" />
                <span className="contact-label">Phone</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

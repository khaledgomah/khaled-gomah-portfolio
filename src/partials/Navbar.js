import React, { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={"navbar" + (scrolled ? " scrolled" : "")}>
      <div className="navbar-inner">
        <a href="#hero" className="navbar-logo">
          {'<'}Khaled{' />'}
        </a>
        <div className="navbar-links">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <a href="/Khaled_Gomah_CV.pdf" className="cv-link" download>Download CV</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        Built with <span className="footer-heart">♥</span> by{" "}
        <a
          href="https://github.com/khaledgomah"
          target="_blank"
          rel="noopener noreferrer"
        >
          Khaled Gomah
        </a>{" "}
        &middot; {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
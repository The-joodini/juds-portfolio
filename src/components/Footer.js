import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Footer.css';          // local styles

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-inner">
      <p className="footer-name">
        © {new Date().getFullYear()} Joudi Abas — All Rights Reserved.
      </p>

      <ul className="footer-links">
        <li>
          <a
            href="https://github.com/The-joodini"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/joudiabas/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>

        {/* Smooth‑scroll back to header / top */}
        <li>
          <ScrollLink to="top" smooth duration={600}>
            Back&nbsp;to&nbsp;Top ↑
          </ScrollLink>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;

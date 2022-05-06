import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer>
      <footer className="footer">
        <ul className="footer__nav">
          <li className="footer__nav-item">
            <a
              href="https://github.com/francescostella"
              className="footer__nav-link"
            >
              Github
            </a>
          </li>
          <li className="footer__nav-item">
            <a
              href="https://www.linkedin.com/in/francescostella/"
              className="footer__nav-link"
            >
              LinkedIn
            </a>
          </li>
          <li className="footer__nav-item">
            <a href="https://www.francesco.work/" className="footer__nav-link">
              About
            </a>
          </li>
        </ul>
        <p>
          Implemented by <b>Francesco Stella</b>
        </p>
      </footer>
    </footer>
  );
}

export default Footer;

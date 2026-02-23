import React from "react";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright {currentYear} John Ludlow</p>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/john-ludlow-3333333333/">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/john_ludlow/">Instagram</a>
        </li>
        <li>
          <a href="https://www.facebook.com/john.ludlow">Youtube</a>
        </li>
        <li>
          <a href="https://www.github.com/john_ludlow">GitHub</a>
        </li>
        <li>
          <a href="https://www.reddit.com/user/john_ludlow">
            Business OmbrinStudios
          </a>
        </li>
        <li>
          <a href="https://www.business.com/ombrinstudios">Business Vanyx</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;

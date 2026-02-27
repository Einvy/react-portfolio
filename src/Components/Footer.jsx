import React from "react";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright {currentYear} John Ludlow</p>
      <ul>
        <li>
          <a href="https://www.instagram.com/woazfgbb/">Instagram</a>
        </li>
        <li>
          <a href="https://www.youtube.com/@Einvyy">Youtube</a>
        </li>
        <li>
          <a href="https://github.com/Einvy">GitHub</a>
        </li>
        <li>
          <a href="https://ombrinstudios.com/">Business OmbrinStudios</a>
        </li>
        <li>
          <a href="">Business Vanyx</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;

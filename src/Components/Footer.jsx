import React from "react";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright {currentYear} John Ludlow</p>
      <ul>
        <li>
          <a href="">Instagram</a>
        </li>
        <li>
          <a href="">Youtube</a>
        </li>
        <li>
          <a href="">GitHub</a>
        </li>
        <li>
          <a href="">Business OmbrinStudios</a>
        </li>
        <li>
          <a href="">Business Vanyx</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;

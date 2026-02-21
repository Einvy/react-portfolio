import React from "react";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright {currentYear} Ombrin studdios</p>
    </footer>
  );
}

export default Footer;

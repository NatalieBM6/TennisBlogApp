import React from "react";
import Logo from "../img/tennis-ball-logo.png";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        Made with ♥️ to <b>Tennis</b>.
      </span>
    </footer>
  );
};

export default Footer;

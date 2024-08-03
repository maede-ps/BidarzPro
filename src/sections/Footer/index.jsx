import React from "react";
import Socials from "../../components/Socials";
import name from "../../assets/harmony.png";
import headerLogo from "../../assets/headerLogo.png";
import { FaInstagram } from "react-icons/fa6";
import { RxLinkedinLogo } from "react-icons/rx";
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerLogo">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="nav-logo"
          />
          <h2>بیدارز پرو</h2>
        </a>
      </div>
      <Socials />

      <div className="mobileSocials">
        <FaInstagram/>
        <RxLinkedinLogo/>
      </div>
      <div className="footerName">
        <img src={name} alt="footerName" /> <span> Designed by</span>
      </div>
    </div>
  );
};

export default Footer;

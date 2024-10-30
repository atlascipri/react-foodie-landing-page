import React from "react";
import Logo from "../Assets/Logo.svg";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="footer-wrapper" id="footer">
      <div>
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <a href="" target="_blank">
            <FiTwitter />
          </a>
          <a href="" target="_blank">
            <FiLinkedin />
          </a>
          <a href="" target="_blank">
            <FiYoutube />
          </a>
          <a href="" target="_blank">
            <FiFacebook />
          </a>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
        <span> Home </span>
        <span> About </span>
        <span> Work </span>
        <span> Testimonials </span>
        <span> Contact </span>
        <span> Cart </span>
        </div>
      </div>
      <div className="footer-section-columns">
        <span> (99) 98999-9999</span>
        <span>hello@food.com</span>
        <span>press@food.com</span>
        <span>contact@food.com</span>
      </div>
      <div className="footer-section-columns">
        <span> Terms & Conditions </span>
        <span> Privacy Policy </span>
      </div>
    </div>
  );
};

export default Footer;

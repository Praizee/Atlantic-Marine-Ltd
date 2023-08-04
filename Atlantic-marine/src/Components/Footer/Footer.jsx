import React from "react";
import "./Footer.css";
import AtlanticLogo from "../../assets/AtlanticLogo.png";
import { FaLinkedin, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-items">
        <div className="footer-web-logo">
          <img src={AtlanticLogo} alt="footer web logo" />
        </div>
        <div className="footer-items-detail">
          <div className="footer-contact">
            <h3>CONTACT(S)</h3>
            <ul className="contacts-items">
              <li>+234 (0) 803 465 7847</li>
              <li>info@atlanticmarineoil.com</li>
              <li>Port-Harcourt Tel: +234 (0) 818 886 6115</li>
              <li>Takoradi Tel: +233 24 221 5798</li>
            </ul>
          </div>
          <div className="footer-lagos-office">
            <h3>LAGOS OFFICE</h3>
            <p className="lagos-office-details">
              YMCA House, 1st Floor, 77, Awolowo Road Ikoyi, Lagos, Nigeria
            </p>
          </div>
          <div className="footer-lagos-office">
            <h3>LAGOS OFFICE</h3>
            <p className="lagos-office-details">
              YMCA House, 1st Floor, 77, Awolowo Road Ikoyi, Lagos, Nigeria
            </p>
          </div>
          <div className="footer-port-office">
            <h3>PORT HARCOURT OFFICE</h3>
            <p className="lagos-office-details">
              Atlantic Marine yard, 312 Port Harcourt/Aba Road.
            </p>
          </div>
          <div className="footer-takoradi-office">
            <h3>TAKORADI OFFICE</h3>
            <p className="lagos-office-details">
              Navy Air-base, SOPC/GNPC Shore Base, Takoradi, Ghana
            </p>
          </div>
          <div className="socials">
            <h3>SOCIALS</h3>
            <FaLinkedin />
            <FaFacebookF />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

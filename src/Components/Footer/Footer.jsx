import React from "react";
import "./Footer.css";
import AtlanticLogo from "../../assets/AtlanticLogo.png";
import { FaLinkedin, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  // date for copyright
  const theDate = new Date().getFullYear();
  // end of date

  return (
    <div className="footer-items bg-[#893232] text-slate-100 pb-4">
      <footer className="footer p-10">
        {/* border-b-[2px] */}
        <div className="">
          <img src={AtlanticLogo} alt="footer web logo" />

          <span className="footer-title">Contact(s)</span>
          <a className="link link-hover">+234 (0) 803 465 7847</a>
          <a className="link link-hover">info@atlanticmarineoil.com</a>
          <a className="link link-hover">Port-Harcourt Tel: +234 (0) 818 886 6115</a>
          <a className="link link-hover">Takoradi Tel: +233 24 221 5798</a>
        </div>

        <div>
          <span className="footer-title">Lagos office</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>

        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>

        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>

        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <FaLinkedin className="social-icon" />
            <FaFacebookF className="social-icon" />
          </div>
        </div>
      </footer>

      {/* <hr /> */}

      {/* copyright */}
      <p className="pt-6 pb-4 copyright float-right">
        Copyright
        @
        <span>{theDate} </span>
        Atlantic Marine & Oilfield Services Limited. All rights reserved
      </p>

    </div>

  );
};

export default Footer;

import React from "react";
import "./Footer.css";
import AtlanticLogo from "../../assets/AtlanticLogo.png";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  // date for copyright
  const theDate = new Date().getFullYear();
  // end of date

  return (
    <div className="footer-items bg-[#893232] text-slate-100 pb-4">
      <footer className="footer p-10">
        {/* border-b-[2px] */}

        <div className="">
          <img src={AtlanticLogo} alt="footer web logo" className="mb-10" />

          <span className="footer-title">Contact(s)</span>
          <a className="link link-hover">+234 (0) 803 465 7847</a>
          <a className="link link-hover">info@atlanticmarineoil.com</a>
          <a className="link link-hover">Port-Harcourt Tel: +234 (0) 818 886 6115</a>
          <a className="link link-hover">Takoradi Tel: +233 24 221 5798</a>
        </div>

        <div className="pt-28">
          <span className="footer-title">Lagos office</span>
          <a className="link link-hover">YMCA House,</a>
          <a className="link link-hover">1st Floor, 77, Awolowo Road</a>
          <a className="link link-hover">Ikoyi, Lagos, Nigeria</a>
        </div>

        <div className="pt-28">
          <span className="footer-title">port harcourt office</span>
          <a className="link link-hover">Atlantic</a>
          <a className="link link-hover">Marine yard, 312 Port</a>
          <a className="link link-hover">Harcourt/Aba</a>
          <a className="link link-hover">Road.</a>
        </div>

        <div className="pt-28">
          <span className="footer-title">takoradi office</span>
          <a className="link link-hover">Navy Air-base, SOPC/</a>
          <a className="link link-hover">GNPC Shore Base,</a>
          <a className="link link-hover">Takoradi, Ghana</a>
        </div>

        <div className="pt-28">
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <LinkedInIcon className="social-icon border bg-[#eae7e741]" />
            <FacebookIcon className="social-icon border bg-[#eae7e741]" />
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

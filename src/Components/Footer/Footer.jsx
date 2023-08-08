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
    <div className="footer-items bg-[#893232] text-slate-100 pb-4 laptop:px-16">
      <footer className="footer p-10">
        {/* border-b-[2px] */}

        <div className="">
          <img src={AtlanticLogo} alt="footer web logo" className="mb-10" />

          <span className="footer-title">Contact(s)</span>
          <a className="">+234 (0) 803 465 7847</a>
          <a className="link link-hover" href="mailto:info@atlanticmarineoil.com">info@atlanticmarineoil.com</a>
          <a className="">Port-Harcourt Tel: +234 (0) 818 886 6115</a>
          <a className="">Takoradi Tel: +233 24 221 5798</a>
        </div>

        <div className="laptop:pt-28 tablet:pt-28 lg:pt-28">
          <span className="footer-title">Lagos office</span>
          <a className="">YMCA House,</a>
          <a className="">1st Floor, 77, Awolowo Road</a>
          <a className="">Ikoyi, Lagos, Nigeria</a>
        </div>

        <div className="laptop:pt-28 tablet:pt-28 lg:pt-28">
          <span className="footer-title">port harcourt office</span>
          <a className="">Atlantic</a>
          <a className="">Marine yard, 312 Port</a>
          <a className="">Harcourt/Aba</a>
          <a className="">Road.</a>
        </div>

        <div className="laptop:pt-28 tablet:pt-28 lg:pt-28">
          <span className="footer-title">takoradi office</span>
          <a className="">Navy Air-base, SOPC/</a>
          <a className="">GNPC Shore Base,</a>
          <a className="">Takoradi, Ghana</a>
        </div>

        <div className="laptop:pt-28 tablet:pt-28 lg:pt-28">
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <LinkedInIcon sx={{ fontSize: "2rem" }} className="social-icon border-none rounded-md p-1 bg-[#eae7e741]" />
            <FacebookIcon sx={{ fontSize: "2rem" }} className="social-icon border-none rounded-md p-1 bg-[#eae7e741]" />
          </div>
        </div>

      </footer>

      {/* <hr /> */}

      {/* copyright */}
      <p className="pt-6 pb-4 copyright laptop:float-right tablet:float-right lg:float-right text-center">
        Copyright
        @
        <span>{theDate} </span>
        Atlantic Marine & Oilfield Services Limited. All rights reserved
      </p>

    </div>

  );
};

export default Footer;

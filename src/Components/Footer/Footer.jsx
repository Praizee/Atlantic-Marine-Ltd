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
    <div className="footer-items bg-[#893232] text-slate-100  laptop:px-16">
      <footer className="footer bg-[#893232] text-slate-100 p-10 leading-[1rem]">
        {/* border-b-[2px] */}

        <div className="">
          <img src={AtlanticLogo} alt="footer web logo" className="mb-5" />

          <span className="footer-title">Contact(s)</span>
          <p className="">+234 (0) 803 465 7847</p>
          <a className="link link-hover" href="mailto:info@atlanticmarineoil.com">info@atlanticmarineoil.com</a>
          <p className="">Port-Harcourt Tel: +234 (0) 818 886 6115</p>
          <p className="">Takoradi Tel: +233 24 221 5798</p>
        </div>

        <div className="laptop:pt-28 tablet:pt-28 lg:pt-28">
          <span className="footer-title">Lagos office</span>
          <p className="">YMCA House,</p>
          <p className="">1st Floor, 77, Awolowo Road</p>
          <p className="">Ikoyi, Lagos, Nigeria</p>
        </div>

        <div className="laptop:pt-28 tablet:pt-28 lg:pt-28">
          <span className="footer-title">port harcourt office</span>
          <p className="">Atlantic</p>
          <p className="">Marine yard, 312 Port</p>
          <p className="">Harcourt/Aba</p>
          <p className="">Road.</p>
        </div>

        <div className="laptop:pt-28 tablet:pt-28 lg:pt-28">
          <span className="footer-title">takoradi office</span>
          <p className="">Navy Air-base, SOPC/</p>
          <p className="">GNPC Shore Base,</p>
          <p className="">Takoradi, Ghana</p>
        </div>

        <div className="laptop:pt-28 tablet:pt-28 lg:pt-28">
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <a href="#">
              <LinkedInIcon sx={{ fontSize: "2rem" }} className="social-icon border-none rounded-md p-1 bg-[#eae7e741]" />
            </a>
            <a href="#">
              <FacebookIcon sx={{ fontSize: "2rem" }} className="social-icon border-none rounded-md p-1 bg-[#eae7e741]" />
            </a>
          </div>
        </div>

      </footer>

      {/* <hr /> */}

      {/* copyright */}
      <p className="pt-3 pb-4 copyright laptop:float-right tablet:float-right lg:float-right text-center">
        Copyright
        @
        <span>{theDate} </span>
        Atlantic Marine & Oilfield Services Limited. All rights reserved
      </p>

    </div>

  );
};

export default Footer;

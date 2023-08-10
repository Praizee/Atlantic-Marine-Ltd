import React from "react";
import { Link, NavLink } from "react-router-dom";
import { NavbarData } from "./NavbarData"
import AtlanticLogo from "../../assets/AtlanticLogo.png"
// import { BiEnvelope } from "react-icons/bi";
// import "./Navbar.css";

const Navbar = () => {
  return (
    <main id="navbar-components" className="hidden laptop:px-[12rem] pb-2 tablet:flex laptop:flex bg-base-100 fixed z-[1] top-0 tablet:w-full laptop:w-full">
      <div className="hidden laptop:flex smaller:hidden tablet:flex  mt-2">


        <div className="web-logo">
          <a>
            <img className="logo laptop:w-[70%] ml-[3rem] mr-0" src={AtlanticLogo} alt="web Logo" />
          </a>
        </div>

        <nav tabIndex={0} className="nav-menu">
          <ul className="nav-menu-items flex">
            {NavbarData.map((item, index) => {
              return (
                <li key={index} className="">
                  {/* "flex min-w-max p-4" */}
                  <NavLink to={item.path} className={({ isActive }) =>
                    isActive ? 'flex min-w-max p-4 border-b-[3px] border-[#305D96]' : 'flex min-w-max p-4'
                  }>
                    <span className="item-title">{item.title}</span>
                    <span className="item-icon">{item.icon}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* contact button */}
        <div className="contact-link">
          <Link to="/contact">
            <button className="btn overflow-y-hidden flex ml-[3rem] laptop:py-1 rounded-md bg-[#305D96] hover:bg-[#204476] text-slate-100">
              Contact
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 block">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>

            </button>
          </Link>

        </div>
      </div>
    </main >
  );
};

export default Navbar;

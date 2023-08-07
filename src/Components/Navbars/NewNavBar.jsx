import React from "react";
import { Link } from "react-router-dom";
import { NavbarData } from "./NavbarData"
import AtlanticLogo from "../../assets/AtlanticLogo.png"
import { BiEnvelope } from "react-icons/bi";
import "./Navbar.css";

const NewNavBar = () => {
    return (
        <main id="">
            <div className="flex laptop:hidden smaller:hidden tablet:hidden">
                <img className="logo" src={AtlanticLogo} alt="web Logo" />


                {/* <nav tabIndex={0} className="nav-menu">
                    <ul className="nav-menu-items">
                        {NavbarData.map((item, index) => {
                            return (
                                <li key={index} className={item.className}>
                                    <Link to={item.path} className="list-item">
                                        <span className="item-title">{item.title}</span>
                                        <span className="item-icon">{item.icon}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav> */}

                {/* contact button */}
                <Link to="/contact">
                    <button className="btn rounded-md bg-[#305D96] hover:bg-[#204476] text-slate-100">
                        Contact
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>

                    </button>
                </Link>

            </div>
        </main>
    );
};

export default NewNavBar;
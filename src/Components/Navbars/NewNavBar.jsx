import React from "react";
import { Link } from "react-router-dom";
import { NavbarData } from "./NavbarData"
import AtlanticLogo from "../../assets/AtlanticLogo.png"
import { BiEnvelope } from "react-icons/bi";
import "./Navbar.css";

const NewNavBar = () => {
    return (
        <main id="">
            <div className="flex laptop:hidden smaller:flex tablet:hidden fixed z-[1] top-0">
                {/* <a className="btn btn-ghost normal-case text-xl">
                    <img className="web-logo" src={AtlanticLogo} alt="web Logo" />
                </a> */}

                {/* navbar */}
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            {/* 'hamburger' icon */}
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 -ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            {/* end of icon */}

                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li>
                                    <a>Parent</a>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </li>
                                <li><a>Item 3</a></li>
                            </ul>
                        </div>
                        <a className="btn btn-ghost normal-case text-xl w-full -mr-5">
                            <img className="w-full" src={AtlanticLogo} alt="web Logo" />
                        </a>
                    </div>

                    <div className="navbar-end">
                        <button className="btn rounded-md bg-[#305D96] hover:bg-[#204476] text-slate-100">
                            Contact
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>

                        </button>
                    </div>
                    {/* <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">

                            <li><a>Item 1</a></li>
                            <li tabIndex={0}>
                                <details>
                                    <summary>Services</summary>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div> */}

                </div>
                {/* end of navbar */}

                {/* contact button */}
                <Link to="/contact" className="hidden">
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

import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { NavbarData } from "./NavbarData"
import AtlanticLogo from "../../assets/AtlanticLogo.png"
// import { BiEnvelope } from "react-icons/bi";
// import "./Navbar.css";

const NewNavBar = () => {
    const [showNav, setshowNav] = useState(true)

    // const showNav = () => {
    //     console.log('okay')
    //     setShowNav(true)
    // }
    return (
        <main className="">
            <div className="flex laptop:hidden smaller:flex w-full tablet:hidden fixed z-[10] bg-white">
                {/* navbar */}
                <div className="navbar bg-white w-full">
                    <div className="navbar-start">

                        {/* 'hamburger' icon */}
                        <label onClick={() => setshowNav(!showNav)}
                            tabIndex={0} className="btn flex bg-white border-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 -ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        {/* end of icon */}
                    </div>

                    <div className=" w-[50%]">
                        <a className="">
                            <img className="web-logo" src={AtlanticLogo} alt="web Logo" />
                        </a>
                    </div>

                    {/* contact button */}
                    <div className="navbar-end">
                        <Link to="/contact" className="btn rounded-md bg-[#305D96] hover:bg-[#204476] text-slate-100">
                            Contact
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                        </Link>
                    </div>
                    {/* end of contact button */}
                </div>
            </div>

            {/* navbar content */}
            {showNav && <nav tabIndex={0} className="mt-[5rem] p-2 absolute h-full font-medium z-10 bg-[#893232] text-white rounded-box w-full">
                <ul>
                    {NavbarData.map((item, index) => {
                        return (
                            <li key={index} className={item.className}>
                                <Link to={item.path} className="">
                                    <span className="">{item.title}</span>
                                    <span className="">{item.icon}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>}
            {/* end of navbar content */}
            {/* end of navbar */}

        </main >
    );
};

export default NewNavBar;

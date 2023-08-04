import React from "react";
import { Link } from "react-router-dom";
import {NavbarData} from "./NavbarData"
import AtlanticLogo from "../../assets/AtlanticLogo.png"
import { BiEnvelope } from "react-icons/bi";
import "./Navbar.css";

const Navbar = () => {
  return (
    <main id="navbar-components">
      <div className="web-logo">
        <img className="logo" src={AtlanticLogo} alt="web Logo" />
      </div>
      <nav className="nav-menu">
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
      </nav>
      <div className="contact-link">
        <Link to="/contact"><button className="contact-btn">Contact <BiEnvelope /></button></Link>
        
      </div>

    </main>
  );
};

export default Navbar;

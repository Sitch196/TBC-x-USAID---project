// Updated Component
import React, { useState } from "react";
import "./header.css";
import logo from "../../../assets/logoandtitle.png";
import hero from "../../../assets/heroImage.png";

export default function Header() {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <section
      className={`Main_Wrapper ${isBurgerMenuOpen ? "burger-menu-open" : ""}`}
    >
      <nav className="nav_wrapper">
        <div className="logo_Wrapper">
          <img className="logo" src={logo} width={80} />
        </div>
        <div
          className={`burger-menu-icon ${isBurgerMenuOpen ? "open" : ""}`}
          onClick={toggleBurgerMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-links ${isBurgerMenuOpen ? "open" : ""}`}>
          <li>მთავარი</li>
          <li>TBC IT</li>
          <li className="current_Link">TBC x USAID</li>
          <li>რისკები</li>
        </ul>
      </nav>
      <main>
        <img src={hero} alt="hero image" />
      </main>
    </section>
  );
}

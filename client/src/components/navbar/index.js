import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Uk Logistics</div>
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        ☰
      </button>
      <ul className={isMobileMenuOpen ? "nav-links mobile-menu" : "nav-links"}>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contactUS">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

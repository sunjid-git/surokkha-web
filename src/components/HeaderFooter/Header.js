import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <header>
      <div className="nav-elements">

        <Link to="/" className="header-title">
            <img src={logo} alt="" />
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/productHome">Products</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login </Link>
          <Link to="/login" className="login-button">Login </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

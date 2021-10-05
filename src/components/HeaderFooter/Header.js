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
          <Link to="/">হোম</Link>
          <Link to="/">নিবন্ধন</Link>
          <Link to="/">নিবন্ধন (পাসপোর্ট)</Link>
          <Link to="/">নিবন্ধন স্ট্যাটাস</Link>
          <Link to="/">টিকা কার্ড</Link>
          <Link to="/">টিকা সনদ</Link>
          <Link to="/">টিকা সনদ যাচাই</Link>
          <Link to="/">সহায়িকা</Link>
          <Link to="/">জিজ্ঞাসা</Link>
          <Link to="/login" className="login-button">
            English{" "}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

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
          <Link to="/home">হোম</Link>
          <Link to="/enroll">নিবন্ধন</Link>
          <Link to="/foreigner-enroll">নিবন্ধন (পাসপোর্ট)</Link>
          <Link to="/vaccine-status">নিবন্ধন স্ট্যাটাস</Link>
          <Link to="/vaccine-card">টিকা কার্ড</Link>
          <Link to="/certificate">টিকা সনদ</Link>
          <Link to="/verify">টিকা সনদ যাচাই</Link>
          <Link to="/help">সহায়িকা</Link>
          <Link to="/faq">জিজ্ঞাসা</Link>
          <Link to="/login" className="english-button">
            English{" "}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import "./Help.css";
import { Link } from "react-router-dom";

import newBookOpen from "../../images/new-book-open.png";
import regularQuestion from "../../images/regular-question.png";
import card from "../../images/card.png";
import sonod from "../../images/sonod.png";
import book from "../../images/book.png";

const Help = () => {
  return (
    <>
      <div class="sub-header help">
        <p>টিকা বিষয়ক সহায়িকা</p>
        <img src={newBookOpen} alt="" />
      </div>

      <div className="link-container">
        <Link
          to={{
            pathname:
              "https://surokkha.gov.bd/static/media/Surokkha_Web_Portal_User_Manual.f376f9b8.pdf",
          }}
          target="_blank"
        >
          <span>টিকা বিষয়ক সহায়িকা ডাউনলোড করুন</span>
        </Link>
      </div>

      <div className="help-others-title">
        <h4>অন্যান্য</h4>
      </div>
      <div className="help-others">
        <Link to="/vaccine-card">
          <img src={card} alt="card" />
          <p> টিকা কার্ড সংগ্রহ </p>
        </Link>
        <Link to="/certificate">
          <img src={sonod} alt="sonod" />
          <p>টিকা সনদ সংগ্রহ</p>
        </Link>

        <Link to="/faq">
          <img src={regularQuestion} alt="sonod" />
          <p> সচরাচর জিজ্ঞাসা</p>
        </Link>
        <Link to={{pathname:"https://surokkha.gov.bd/static/media/Surokkha_Web_Portal_User_Manual.f376f9b8.pdf"}} target="_blank">
          <img src={book} alt="book" />
          <p>সহািয়কা</p>
        </Link>
      </div>
    </>
  );
};

export default Help;

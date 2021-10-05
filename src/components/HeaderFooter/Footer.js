import React from "react";
import "./Footer.css";

import whiteLogo from "../../images/whiteLogo.png";
import ict from "../../images/ict.png";
import org from "../../images/org.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer>
        <img src={whiteLogo} alt="Logo" className="whiteLogo"/>

        <ul>
          <Link to="/privacy-policy">প্রাইভেসি পলিসি</Link>
          <Link to="/terms-of-service">টার্মস অফ সার্ভিসেস</Link>
          <Link to="/affiliates">অন্যান্য সহযোগী প্রতিষ্ঠানসমূহ</Link>
        </ul>

        <div>
          <p>কারিগরি সহায়তায় - তথ্য ও যোগাযোগ প্রযুক্তি অধিদপ্তর </p>
          <img src={ict} alt="" />
        </div>

        <div>
          <p>সহযোগী সংস্থাসমূহ - </p>
          <img src={org} alt="" />
        </div>
      </footer>
    </div>
  );
};

export default Footer;

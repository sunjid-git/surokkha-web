import React from "react";
import "./Help.css";
import newBookOpen from "../../images/new-book-open.png";

const Help = () => {
  return (
    <>
      <div class="sub-header help">
        <p>টিকা বিষয়ক সহায়িকা</p>
        <img src={newBookOpen} alt="" />
      </div>
    </>
  );
};

export default Help;

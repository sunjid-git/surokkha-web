import React from "react";
import "./common.css";
const UtilsEnroll = () => {
  return (
 
      <section class="profession-category">
        <div class="category-main">
          <label>শ্রেণী (ধরণ) নির্বাচন করুন:</label> <br />
          <select name="categories" id="category">
            <option value="select">--নির্বাচন করুন--</option>
            <option value="1">১</option>
            <option value="2">2</option>
            <option value="3">৩</option>
            <option value="4">৪</option>
            <option value="5">৫ </option>
          </select>
        </div>

        <div class="category-sub">
          <label>উপ-শ্রেণী নির্বাচন করুন:</label> <br />
          <select name="month" id="month">
            <option value="select">--নির্বাচন করুন--</option>
            <option value="1">১</option>
            <option value="2">2</option>
            <option value="3">৩</option>
            <option value="4">৪</option>
            <option value="5">৫ </option>
          </select>
        </div>
      </section>
 
  );
};

export default UtilsEnroll;

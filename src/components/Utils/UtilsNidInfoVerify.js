import React from "react";
import "./UtilsNidInfoVerify.css";

import retry from "../../images/retry.svg";

const UtilsNidInfoVerify = () => {
  return (
    <div className="utils-nid-info">
      {/* 88888888888888888888888888888888888888888888888888888888888888 */}

      <div className="relative-info">
        <div class="verify-information">
          <div class="nid">
            <label>জাতীয় পরিচয়পত্র নম্বর: </label> <br />
            <input type="number" placeholder="উদাহরণ-19825624603112948" />
          </div>

          <div class="birth-details">
            <label>জন্ম তারিখ (জাতীয় পরিচয়পত্র অনুযায়ী):</label> <br />
            <select id="days">
              <option value="day">দিন</option>
              <option value="1">১</option>
              <option value="2">2</option>
              <option value="3">৩</option>
              <option value="4">৪</option>
              <option value="5">৫ </option>
              <option value="6">৬</option>
              <option value="7">৭</option>
              <option value="8">৮</option>
              <option value="9">৯</option>
              <option value="10">১০</option>
              <option value="11">১১</option>
              <option value="12">১২</option>
              <option value="13">১৩</option>
              <option value="14">১৪</option>
              <option value="15">১৫</option>
              <option value="16">১৬</option>
              <option value="17">১৭</option>
              <option value="18">১৮</option>
              <option value="19">১৯</option>
              <option value="20">২০</option>
              <option value="21">২১</option>
              <option value="22">২২</option>
              <option value="23">২৩</option>
              <option value="24">২৪</option>
              <option value="25">২৫</option>
              <option value="26">২৬</option>
              <option value="27">২৭</option>
              <option value="28">২৮</option>
              <option value="29">২৯</option>
              <option value="30">৩০</option>
              <option value="31">৩১</option>
            </select>
            <select name="month" id="month">
              <option value="month">মাস</option>
              <option value="january">জানুয়ারি </option>
              <option value="february">ফেব্রুয়ারী </option>
              <option value="march">মার্চ </option>
              <option value="april">এপ্রিল </option>
              <option value="may">মে </option>
              <option value="june">জুন </option>
              <option value="july">জুলাই </option>
              <option value="august">আগষ্ট </option>
              <option value="september">সেপ্টেম্বর </option>
              <option value="october">অক্টোবর </option>
              <option value="november">নভেম্বর </option>
              <option value="december">ডিসেম্বর </option>
            </select>
            <select name="year" id="year">
              <option value="year">বছর</option>
              <option value="2001">২০২১ </option>
              <option value="2020"> ২০২০ </option>
              <option value="2019">২০১৯ </option>
              <option value="2018">২০১৮ </option>
              <option value="2017">২০১৭ </option>
              <option value="2016">২০১৬ </option>
              <option value="2015">২০১৫ </option>
              <option value="2014">২০১৪ </option>
              <option value="2013">২০১৩ </option>
              <option value="2012">২০১২ </option>
              <option value="2011">২০১১ </option>
              <option value="2010">২০১0 </option>
              <option value="2009">২০০৯ </option>
              <option value="2008">২০০৮ </option>
              <option value="2007">২০০৭ </option>
              <option value="2006">২০০৬ </option>
              <option value="2005">২০০৫ </option>
              <option value="2004">২০০৪ </option>
              <option value="2003">২০০৩ </option>
              <option value="2002">2০০২ </option>
              <option value="2001">2০০১ </option>
              <option value="2000">2০০০ </option>
            </select>
          </div>
        </div>

        <div class="vaccine-certificate">
          <div class="nid">
            <label>ভ্যাকসিন সনদপত্র নম্বর: </label> <br />
            <input type="number" placeholder="উদাহরণ-19825624603112948" />
          </div>
        </div>

        <div class="captcha">
          <div class="random-captcha-part">
            <div>
              <div class="random-captcha-text-icon">
                <div class="random-captcha">T E L I 8 Z</div>
                <img src={retry} alt="" />
              </div>
            </div>

            <p>উপরের লিখাটি সঠিকভাবে নিচে লিখুন</p>
            <input type="text" />
          </div>

          <button class="captcha-btn">যাচাই করুন </button>
        </div>
      </div>

      {/* 88888888888888888888888888888888888888888888888888888888888888 */}
    </div>
  );
};

export default UtilsNidInfoVerify;

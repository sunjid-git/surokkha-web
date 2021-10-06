import React from "react";
import "./Home.css";

import checkmark from "../../images/checkmark.png";
import card from "../../images/card.png";
import sonod from "../../images/sonod.png";
import regularQuestion from "../../images/regular-question.png";

import peoples from "../../images/peoples.png";
import step from "../../images/step.png";
import call from "../../images/call.png";
import step01 from "../../images/step 01.png";
import step02 from "../../images/step 02.png";
import step03 from "../../images/step 03.png";
import googlePlay from "../../images/googlePlay.png";
import appleStore from "../../images/googlePlay.png";
import mujib100 from "../../images/googlePlay.png";

const Home = () => {
  return (
    <div className="main-home-container">
      {/* first bannner part */}
      
      <div className="coupled-banner">
        <div className="banner-reg-container-left">
          <div className="banner-reg-left">
            <img src={peoples} alt="" />
            <div>
              <h2>ভ্যাকসিনের জন্য</h2>
              <h2> নিবন্ধন করুন</h2>
            </div>
          </div>
          <div className="banner-reg-right">
            <p>ভ্যাকসিনের সময় প্রয়োজন হবে</p>
            <img src={step} alt="" />
          </div>
        </div>


        <div className="banner-reg-container-right">
          <div>
            <img src={checkmark} alt="checkmark" />
            <p>নিবন্ধন স্ট্যাটাস</p>
          </div>
          <div>
            <img src={card} alt="card" />
            <p> টিকা কার্ড সংগ্রহ </p>
          </div>
          <div>
            <img src={sonod} alt="sonod" />
            <p> টিকা সনদ সংগ্রহ </p>
          </div>
          <div>
            <img src={regularQuestion} alt="regularQuestion" />
            <p>সচরাচর জিজ্ঞাসা </p>
          </div>
        </div>
      </div>

      {/* hot line number */}

      <section class="call-center">
        <div>
          <img src={call} alt="" />
          <p>হটলাইন</p>
        </div>
        <div>
          <p>৩৩৩</p>
          <p>জাতীয় কল সেন্টার</p>
        </div>
        <div>
          <p> ১৬২৬৩</p>
          <p>স্বাস্থ্য বাতায়ন</p>
        </div>
        <div>
          <p>১০৬৫৫ </p>
          <p>আইইডিসিআর</p>
        </div>
        <div>
          <p>০৯৬৬৬৭৭৭২২২</p>
          <p>কোভিড-১৯ টেলিহেলথ</p>
        </div>
        <div>
          <img src={call} alt="" />
          <p>সকল কল সেন্টার</p>
        </div>
      </section>

      {/* vaccine taking steps */}
      <div className="vaccine-taking-container-step">
        <h2>কোভিড-১৯ করোনা ভ্যাকসিন গ্রহণের প্রক্রিয়া</h2>

        <div className="vaccine-taking-steps">
          <div className="vaccine-steps">
            <img src={step01} alt="" />
            <p>অনলাইনে নিবন্ধন</p>
            <p>
              প্রথমে এই পোর্টালের মাধ্যমে জাতীয় পরিচয়পত্র ও সঠিক মোবাইল নম্বর
              যাচাইপূর্বক অনলাইনে নিবন্ধন সম্পন্ন করবেন।
            </p>
          </div>

          <div className="vaccine-steps">
            <img src={step02} alt="" />
            <p>SMS নোটিফিকেশন</p>
            <p>
              অনলাইনে নিবন্ধন পরবর্তী তথ্য যাচাইপূর্বক পর্যায়ক্রমে টিকা প্রদানের
              তারিখ ও কেন্দ্রের নাম উল্লেখপূর্বক মুঠোফোনে খুদেবার্তা পাবেন।
            </p>
          </div>

          <div className="vaccine-steps">
            <img src={step03} alt="" />
            <p>টিকা কেন্দ্রে টিকা গ্রহণ</p>
            <p>
              মুঠোফোনে খুদেবার্তা প্রাপ্তি সাপেক্ষে টিকাকার্ড জাতীয় পরিচয়পত্র ও
              সম্মতিপত্রসহ নির্দিষ্ট তারিখে টিকাদান কেন্দ্রে স্ব-শরীরে উপস্থিত
              হয়ে কোভিড-১৯ টিকা গ্রহণ করবেন।
            </p>
          </div>
        </div>
      </div>

      {/* অ্যাপ ডাউনলোড করুন */}

      <div className="two-order">
        <p>অ্যাপ ডাউনলোড করুন</p>
        <img src={googlePlay} alt="" />
      </div>

      {/* mujib 100 */}
      <div className="vaccine-taking-container-step">
        <h2>মুজিব ১০০</h2>

        <div className="vaccine-taking-steps">
          <div className="vaccine-steps">
            <img src={mujib100} alt="" />
            <p className="mujib">মুজিব ১০০ পোর্টাল</p>
          </div>

          <div className="vaccine-steps">
            <img src={googlePlay} alt="" />
            <p>মুজিব ১০০ অ্যান্ড্রয়েড অ্যাপ</p>
          </div>

          <div className="vaccine-steps">
            <img src={appleStore} alt="" />
            <p>মুজিব ১০০ আইওএস অ্যাপ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

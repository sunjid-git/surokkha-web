import React from "react";
import "./Home.css";

import checkmark from "../../images/checkmark.png";
import card from "../../images/card.png";
import sonod from "../../images/sonod.png";
import regularQuestion from "../../images/regular-question.png";
import peoples from "../../images/peoples.png";
import step from "../../images/step.png";
import call from "../../images/call.png";


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
            <img src={call} alt=""/>
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
            <img src={call} alt=""/>
            <p>সকল কল সেন্টার</p>
        </div>

    </section>


    </div>
  );
};

export default Home;

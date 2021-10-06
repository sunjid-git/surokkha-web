import React from "react";
import people from "../../images/people.png";
import UtilsNidInfoVerify from "../Utils/UtilsNidInfoVerify";
const ForeignerEnroll = () => {
  return (
    <>
      <div class="sub-header foreigner-enroll">
        <p>নিবন্ধন ফর্ম (পাসপোর্ট)</p>
        <img src={people} alt="" />
      </div>

      <div className="all-in-one-container">
        <p className="all-in-common-larger-text">
          নিচের ফর্মে আপনার পাসপোর্ট ও মোবাইল নম্বর যাচাইপূর্বক নিবন্ধন সম্পন্ন
          করুন। পরবর্তীতে মোবাইল ফোনে এসএমএস বার্তার মাধ্যমে ভ্যাকসিন প্রদানের
          স্থান ও তারিখ পর্যায়ক্রমে নির্দিষ্ট সময়ে জানানো হবে।
        </p>
        <UtilsNidInfoVerify/>
      </div>
    </>
  );
};

export default ForeignerEnroll;

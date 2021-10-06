import React from "react";
import download from "../../images/download.png";
import UtilsNidInfoVerify from "../Utils/UtilsNidInfoVerify";

const VaccineStatus = () => {
  return (
    <>
      <div class="sub-header vaccine-status">
        <p>কোভিড-১৯ ভ্যাকসিন নিবন্ধনের অবস্থা জানুন</p>
        <img src={download} alt="" />
      </div>

      <div className="all-in-one-container">
        <p className="all-in-common-larger-text">
          নিচের ফরমে আপনার জাতীয় পরিচয়পত্র নম্বর ও জন্ম তারিখ (জাতীয় পরিচয়পত্র
          অনুযায়ী) প্রদান করে "যাচাই করুণ" বাটনে ক্লিক করলে নিবন্ধনের সময়
          প্রদানকৃত মোবাইল নম্বরে একটি OTP কোড SMS এর মাধ্যমে পাঠানো হবে, তা
          পরবর্তী OTP কোড ঘরে প্রদান করে "স্টেটাস যাচাই" বাটনে ক্লিক করলে
          স্টেটাস জানা যাবে।
        </p>

        <UtilsNidInfoVerify/>
      </div>
    </>
  );
};

export default VaccineStatus;

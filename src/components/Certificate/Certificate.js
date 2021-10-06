import React from "react";
import certify from "../../images/certify.png";
import UtilsNidInfoVerify from "../Utils/UtilsNidInfoVerify";
const Certificate = () => {
  return (
    <>
      <div class="sub-header verify">
        <p>টিকা সনদ</p>
        <img src={certify} alt="" />
      </div>

      <div className="all-in-one-container">
        <p className="all-in-common-text red">
          টিকা সনদ ডাউনলোড (পাসপোর্টধারী বাংলাদেশি এবং বিদেশি নাগরিক)
        </p>

        <p className="all-in-common-larger-text">
          নিচের ফরমে আপনার জাতীয় পরিচয়পত্র নম্বর ও জন্ম তারিখ (জাতীয় পরিচয়পত্র
          অনুযায়ী) প্রদান করে "যাচাই করুণ" বাটনে ক্লিক করলে নিবন্ধনের সময়
          প্রদানকৃত মোবাইল নম্বরে একটি OTP কোড SMS এর মাধ্যমে পাঠানো হবে, তা
          পরবর্তী OTP কোড ঘরে প্রদান করে "টিকা সনদপত্র ডাউনলোড" বাটনে ক্লিক করলে
          টিকা সনদ সংগ্রহ করা যাবে।
        </p>
        <UtilsNidInfoVerify />
      </div>
    </>
  );
};

export default Certificate;

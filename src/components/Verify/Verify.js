import React from "react";
import certify from "../../images/certify.png";
import UtilsNidInfoVerify from "../Utils/UtilsNidInfoVerify";

const Verify = () => {
  return (
    <>
      <div class="sub-header verify">
        <p>টিকা সনদ যাচাই</p>
        <img src={certify} alt="" />
      </div>

      <div className="all-in-one-container">
        <p className="all-in-common-larger-text">
          নিচের ফরমে আপনার জাতীয় পরিচয়পত্র নম্বর, জন্ম তারিখ (জাতীয় পরিচয়পত্র
          অনুযায়ী) ও ভ্যাকসিন সনদপত্র নম্বর প্রদান করে "ভ্যাকসিন সনদ যাচাই
          করুন" বাটনে ক্লিক করে ভ্যাকসিন সনদ যাচাই করা যাবে।
        </p>
        <p className="all-in-common-text red">
          টিকা সনদ যাচাই (পাসপোর্টধারী বাংলাদেশি এবং বিদেশি নাগরিক)
        </p>

        <UtilsNidInfoVerify/>

      </div>

      
    </>
  );
};

export default Verify;

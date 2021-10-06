import React from 'react'
import download from "../../images/download.png";

const VaccineStatus = () => {
    return (
        <>
            <div class="sub-header vaccine-status">
          <p>কোভিড-১৯ ভ্যাকসিন নিবন্ধনের অবস্থা জানুন</p>
          <img src={download} alt="" />
        </div>
        </>
    )
}

export default VaccineStatus
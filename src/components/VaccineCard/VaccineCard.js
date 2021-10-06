import React from 'react'
import vaccineCard from "../../images/vaccine-card.png";
const VaccineCard = () => {
    return (
        <>
            <div class="sub-header vaccine-card">
          <p>কোভিড-১৯ ভ্যাকসিন কার্ড সংগ্রহ</p>
          <img src={vaccineCard} alt="" />
        </div>
        </>
    )
}

export default VaccineCard
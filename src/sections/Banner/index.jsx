import React from "react";
import banner from "../../assets/banner.png";
import bannerBack from "../../assets/banner2.png";

const Banner = () => {
  return (
    <div className="bannerContainer">
      <div className="headerText">فصل درو از راه رسید</div>

      <div className="bannerSecondary">
        پلتفرم <span className="bannerSpanYellow"> بیدارز (Pro)</span> رونمایی
        شد
      </div>
      <div className="bannerDescription">
        <div> در این پلتفرم معامله کن و </div>
        <div>
          تا سقف <span className="bannerSpanRed"> 100 ریپل </span> جایزه ببر
        </div>
      </div>
      <div className="banner-button">
        <a href="/">ثبت نام فوری</a>
      </div>
      <div className="bannerImage">
        <img src={banner} alt="banner image" />
        <img src={bannerBack} alt="banner image" className="bannerBackImg" />
      </div>
    </div>
  );
};

export default Banner;

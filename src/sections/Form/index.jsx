import React, { useState } from "react";
import backward from "../../assets/backward.png";
import coinsLeft from "../../assets/CoinsLeft.png";
import coinsRight from "../../assets/CoinsRight.png";
import { FaArrowLeft } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (phoneNumber.length !== 11) {
      toast.error("شماره موبایل باید 11 رقم باشد.");
      return;
    }
    if( !phoneNumber.startsWith("09")){
      toast.error("شماره موبایل باید با 09 شروع شود.");
      return;
    }

    // Handle successful submission here
    toast.success("فرم با موفقیت ارسال شد.");
  };

  return (
    <div className="formContainer">
      <ToastContainer />
      <div className="forwardIcon">
        <img src={backward} />
      </div>
      <div className="downIcon">
        <img src={backward} />
      </div>
      <div className="form">
        <div className="formRightCoins">
          <img src={coinsRight} />
        </div>

        <div className="formMain">
          <div className="headerText formHeader">
            در کمتر از 5 دقیقه
            <br />
            ترید حرفه ای رو شروع کنین
          </div>
          <div className="headerSecondary formHeader">
            برای شروع استفاده از بیدارز پرو <br />و ترید حرفه ای کافیه شمارت رو
            وارد کنی.
          </div>

          <form className="phoneForm" onSubmit={handleSubmit}>
            <div className="phoneInput">
              <span>شماره موبایل</span>
              <input
                name="phoneNumber"
                placeholder=""
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <button className="submitButton" type="submit">
              شروع کن
            </button>
          </form>

          <div className="linkText">
            <span>چطوری ریپل دریافت کنیم؟</span>
            <FaArrowLeft />
          </div>
        </div>
        <div className="formLeftCoins">
          <img src={coinsLeft} />
        </div>
      </div>

      <div className="backwardIcon">
        <img src={backward} />
      </div>
    </div>
  );
};

export default Form;

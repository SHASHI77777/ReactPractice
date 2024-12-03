

import React, { useState } from "react";
import "./GenerateOtp.css";

const GenerateOtp = () => {
  const [otp4, setOtp] = useState(0);
  const [otp6, setOtp6] = useState(0);

  const generate4DigitOtp = () => {
    const otp4 = Math.floor(1000 + Math.random() * 8999);
    setOtp(otp4);
  };


  const generate6DigitOtp = () => {
    const otp6 = Math.floor(100000 + Math.random() * 899999);
    setOtp6(otp6); 
  };

  return (
    <>
      <div className="head">
        <div className="otp4">
          <button onClick={generate4DigitOtp}>Generate OTP Digit 4</button>
          <h5>{`Your OTP is: ${otp4}`}</h5>
        </div>
       
        <div className="otp6">
          <button onClick={generate6DigitOtp}>Generate OTP Digit 6</button>
       
        <h5> {`Your OTP is: ${otp6}`}</h5>
        </div>
      </div>
    </>
  );
};

export default GenerateOtp;

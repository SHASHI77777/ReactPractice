import React from "react";
import { useState } from "react";

const OnOff = () => {
  let [bool, setBool] = useState(true);
  let onoff = () => {
    setBool(!bool);
  };

  return (
    <>
      <div>
        <div className="header">
          <h2> ON OFF BUTTON </h2>
        </div>

        <button onClick={onoff}>{bool ? "ON" : "OFF"}</button>
      </div>
    </>
  );
};

export default OnOff;

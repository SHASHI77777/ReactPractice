import React, { useState } from "react";
import "./DigitalClock.css";

const DigitalClock = () => {
  const [curDateTime, setCurDateTime] = useState({});

  setInterval(() => {
    const dateObj = new Date();
    setCurDateTime({
      date: dateObj.toLocaleDateString(),
      time: dateObj.toLocaleTimeString(),
    });
  }, 100);

  let { date, time } = curDateTime;

  return (
    <>
      <div className="digitalclock">
        <div className="Header">Digital Clock</div>
        <div className="time">
          <p>{date}</p>
          <p> {time}</p>
        </div>
      </div>
    </>
  );
};

export default DigitalClock;

import React, { useState } from "react";
import'./IncDec.css'

const IncDec = () => {
  let [count, setCount] = useState(0);
  let increment = () => {
    setCount(count + 1);
  };
  let decrement = () => {
    if (count <= 0) {
      alert(" Negative Number is not allowed ");
    } else {
      setCount(count - 1);
    }
  };
  return (
    <>
      <div className="Inc-Dec">
        <h2>Increment Decrement</h2>
      </div>
      <div className="container">
        <button onClick={decrement}>➖</button>
        <h2>{count}</h2>
        <button onClick={increment}>➕</button>
      </div>
    </>
  );
};

export default IncDec;

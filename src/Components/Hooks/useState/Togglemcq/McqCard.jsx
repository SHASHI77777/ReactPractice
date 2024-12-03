import React, { useState } from "react";

const McqCard = (props) => {
  let { question, answer,index } = props;
  let [bool, setBool] = useState(true);

  let handlebtn = () => {
    setBool(!bool);
  };
  return (
    <div>
      <div className="con">
        <button onClick={handlebtn}>
        <h1> {index+1  + " -  "}{question} </h1> </button>
        <p>{bool ? "" : answer}</p>
      </div>
    </div>
  );
};

export default McqCard;

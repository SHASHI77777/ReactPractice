import React, { useState } from "react";
import "./YesOrNo.css";

const YesNoBox = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");

  const handleYesClick = () => {
    setBackgroundColor("lightgreen"); 
  };

  return (
    <>
      <div className="container" >
      
        <div className="content" style={{ backgroundColor }}>
          <div className="text1">
           <h2>Do you like  Javascript ?</h2>
           </div>


            <button className="button yes-button" onClick={handleYesClick}>Yes </button>
         
            <button className="button no-button">  No </button>
        
        </div>
        </div>
    </>
  );
};

export default YesNoBox;

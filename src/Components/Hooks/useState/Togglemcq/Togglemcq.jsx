import React, { useState } from "react";
import McqCard from "./McqCard";
// import './Togglemcq.css'
import { mcqdata } from "./mcqdata";

const Togglemcq = () => {
  let [data] = useState(mcqdata);
  return (

    <>
     <h1 className="head">Top 100  Interview Question (HTML,Css,JavaScript,React JS)</h1>
    <div className="main"></div> 
    <div className=""></div>
    <div className="">
      {data.map((elem,index) => {
        let { question, answer } = elem;
        return (
          <>
            <McqCard question={question} answer  ={answer }  index ={index}/>
          </>
        );
      })}
    </div> 
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  


    </>
  );
};

export default Togglemcq;

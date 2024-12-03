import React from "react";
// import "./Basic.css";
import image from "../Images/emoticon-1611647_1280.png"

const Basic = () => {
  let num = 100;
  let sum = num + num;
  let course = "REACT JS";
  const otp = Math.floor(1000 + Math.random() * 8999);

  let design = {
    color: "black",
    background: "teal",
  };

  let images ="https://media.istockphoto.com/id/2145108436/vector/smilly-emoticon-with-sunglasses.jpg?s=1024x1024&w=is&k=20&c=wY3Mr5pkT_TcQ_SYLY6XEy0UnEF41aVq74AxtujXrxw=";

  let msz = `I don't care`;
  return (
    <>
      <div className="basic">
        {/*  Static content  */}
        <h1> Hey from h1 </h1>
        <h1> i am from Component </h1>
        {/*  Dynamic  content  */}

        <h1> {num}</h1>
        <h1> {course}</h1>

        {/* Static & Dynamic  content  */}
        <h1> I LOVE MY {course}</h1>
        <h1>
          {" "}
          {num} + {num} = {num + num}
        </h1>
        <h1>
          {" "}
          {num} + {num} = {sum}
        </h1>

        {/* {Generate  4 digit otp } */}
        <h1> {otp}</h1>
        {/* INLINE CSS */}
        <h2 style={{ color: "red" }}> Happy Diwali</h2>

        {/* INLINE CSS USING LET  */}
        <h2 style={design}> Happy Diwali</h2>

        <button>click me</button>
      </div>

      <img src="./Images/emoticon-1611647_1280.png"  alt="not availabe" />
      <img src={images} alt="not availabe" title={msz} />

      <img src={image}  alt="not availabe" />

    </>
  );
};

export default Basic;

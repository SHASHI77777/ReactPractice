import React, { useRef } from "react";

const UseRefForms = () => {

  let formdata = useRef()

  let res = useRef()
  

  let handlesubmit = (e) => {
    e.preventDefault();
    let fname = formdata.current[0].value;
    let lname = formdata.current[1].value;
    res.current.innerText = ` My name is ${fname} ${lname} `;
  };

  return (
    <>
      <div className="useRef-forms"></div>
      <div className="header">
        <h2> useRef-forms </h2>
      </div>

      <div className="main">
        <form ref={formdata} onSubmit={handlesubmit}>
          <input type="text" placeholder="Enter First name "></input>
          <input type="text" placeholder="Enter Last name "></input>

          <button>Submit</button>
        </form>
      </div>
       <h1 ref={res} ></h1>
    </>
    
  );
};

export default UseRefForms;

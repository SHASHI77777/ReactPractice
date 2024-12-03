import React, { useContext } from "react";
import { Fname } from "./ComponentsA";
import { Lname } from "./ComponentsA";

const ComponentsD = () => {
  let fnm = useContext(Fname);
  let lnm = useContext(Lname);
  
  return (

    <>
      <div>I'm from Components D </div>
      <p> Student name is {fnm} {lnm} </p>
    </>
  );
};

export default ComponentsD;

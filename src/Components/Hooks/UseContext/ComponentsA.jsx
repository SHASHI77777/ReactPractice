import React, { createContext } from "react";
import ComponentsB from "./ComponentsB";

export let Fname = createContext();

export let Lname = createContext();

const ComponentsA = () => {
  return (
    <>
      <div>I'm from Components A</div>
      <Fname.Provider  value="Shashi">
        <Lname.Provider value="Singh">
          <ComponentsB />
        </Lname.Provider>
      </Fname.Provider>
    </>
  );
};

export default ComponentsA;

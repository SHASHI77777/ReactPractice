// import React, { useEffect, useState } from "react";

// const UseEffect1 = () => {
//   let [count, setCount] = useState(0);
//   let increment = () => {
//     setCount(count + 1);
//   };
//   let decrement = () => {
//     setCount(count - 1);
//   };

//   let [msz, setMsz] = useState("");
//   let printmsz = () => {
//     setMsz("react js");
//   };
//   useEffect(() => {
//     alert("i am side effect");
//   }, [msz]);
//   return (
//     <div>
//       <div>
//         <button onClick={increment}>➕</button>
//       </div>
//       <h1>{count}</h1>
//       <div>
//         <button onClick={decrement}>➖</button>
//       </div>
//       <br />
//       <br />
//       <br />
//       <hr />
//       <div>
//         <h1>welcome to {msz}</h1>
//         <button onClick={printmsz}>click</button>
//       </div>
//     </div>
//   );
// };

// export default UseEffect1;


// Import React and required hooks

import React, { useEffect, useState } from "react";

const UseEffect1 = () => {
  // State for the counter
  let [count, setCount] = useState(0);

  // State for the message
  let [msz, setMsz] = useState("");

  // Function to increment the counter
  let increment = () => {
    setCount(count + 1); // Increment count by 1
  };

  // Function to decrement the counter
  let decrement = () => {
    setCount(count - 1); // Decrement count by 1
  };

  // Function to update the message
  let Printmsz = () => {
    setMsz("react js"); // Update msz to "react js"
  };

  // useEffect to handle side effects when 'msz' changes
  useEffect(() => {
    alert("i am side effect"); // Alert message whenever msz changes
  }, [msz]); // Dependency array: triggers only when msz updates

  // JSX to render the UI
  return (
    <div>
      {/* Counter Section */}
      <div>
        <button onClick={increment}>➕</button> {/* Increment Button */}
      </div>
      <h1>{count}</h1> {/* Display current count */}
      <div>
        <button onClick={decrement}>➖</button> {/* Decrement Button */}
      </div>

      <br />
      <br />
      <br />
      <hr />

      {/* Message Section */}
      <div>
        <h1>welcome to {msz}</h1> {/* Display dynamic message */}
        <button onClick={Printmsz}>click</button> {/* Button to set message */}
      </div>
    </div>
  );
};

export default UseEffect1;

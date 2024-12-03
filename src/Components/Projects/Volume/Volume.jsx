import React, { useRef, useState } from "react";
import "./Volume.css";

// const Volume = () => {
//     const [volume, setVolume] = useState(0); // Initial volume value (50 out of 100)
//     let circle = useRef()
//     const handleVolumeChange = (event) => {
//       setVolume(event.target.value)
//       circle.current.style.cssText = `transfrom: rotate(${volume}deg);`
//     };
    
   

//   return (
//     <>
//       <div className="volume">
//         <div className="header"> Volume </div>

//         <div className="Container">
//         <div><input type="range" min={0}  max={360} value={volume}onChange={handleVolumeChange}  />  </div>
//            <div>{volume}</div>
//         </div>
//         <div ref={circle} className="circle" ></div>
//       </div>
//     </>
//   );
// };
const Volume = () => {
  let [count , setCount] = useState(0)
  let box = useRef()
  let handlecount = (e) =>{
 setCount(e.target.value)
 box.current.style.cssText = `transform: rotate(${count}deg)`
  }

return (
  <div>
   <div className="volume">
    <div >
    <h1>Volume</h1></div>
       <div className="Container">
          <div><input type="range" value={count}
          min={0}  max={360}
          onChange={handlecount}/></div>
          <div>{count}</div>
        </div>
        <div className="circle" ref={box}></div>
   </div>
  </div>
)
}
export default Volume;

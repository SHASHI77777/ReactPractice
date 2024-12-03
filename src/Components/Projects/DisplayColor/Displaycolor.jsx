import React, { useRef, } from 'react'
import './Displaycolor.css'
const Displaycolor = () => {
 
let inputVal = useRef()
let  colorChange =()=>{
    document.body.style.background =  inputVal.current.value
}
  
  return (
    <>
         <div className="color">
        <div className="conti">  
        <h1> Display Color</h1>
        </div>
        <div className="main1">
        <input ref={inputVal}  type="color" onChange={colorChange}/>  
        </div>
      </div>
    </>
  )
  
}

export default Displaycolor
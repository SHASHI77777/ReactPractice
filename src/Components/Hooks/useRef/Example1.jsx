import React, { useRef } from 'react'

const Example1 = () => {

    let x = useRef()

    let fun =()=>{
        x.current.innerText="Good Evening  "
    }
  return (

    <>
      <h1 ref={x}> Hello   </h1>

      <button onClick={fun}>
        Click here 
      </button>

      
    </>
    
  )
}

export default Example1
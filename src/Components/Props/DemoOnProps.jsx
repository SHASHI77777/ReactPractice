import React from 'react'
import Child from './Child';
// import'./DemoOnProps.css' 

const DemoOnProps = () => {
    let fnm ="Dinga"
    let lnm ="raja"
    let num = "420" 
  return (
    <>
    <div>
     <Child fname= {fnm} lname={lnm}  count={num}/>
     </div>

     </>
  )
}


export default DemoOnProps ;
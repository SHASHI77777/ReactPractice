import React, { useRef } from 'react'
import './Calculator.css'
const Calculator = () => {
 let inputField = useRef()

    let  getValue=(e)=>{
        let val=e.target.innerText;
        inputField.current.value+=val;
    }
    
    let finalResult=()=>{
        inputField.current.value = eval(inputField.current.value);
        
    }
    
    let clearAll=()=>{
        inputField.current.value= ""
    }
  return (
    <>
    <div className='Calculator'>
    <h3>Calculator</h3>
    <table border={1} cellspacing={10}  className='tabels'>
        <thead>
            <tr> 
                <th colspan={4} className='first'>
                <input type="text" ref={inputField} className='input' placeholder='Calculator' disabled/>
                </th>
            </tr>
        </thead>
        <tr>
            <th colspan="2" onClick={clearAll}>CE</th>
            <th onClick={getValue}>/</th>
            <th onClick={getValue}>*</th>
        </tr>
        <tr>
            <th onClick={getValue}>7</th>
            <th onClick={getValue}>8</th>
            <th onClick={getValue}>9</th>
            <th onClick={getValue}>-</th>
        </tr>
        <tr>
            <th onClick={getValue}>4</th>
            <th onClick={getValue}>5</th>
            <th onClick={getValue}>6</th>
            <th onClick={getValue}>+</th>
        </tr>
        <tr>
            <th onClick={getValue}>1</th>
            <th onClick={getValue}>2</th>
            <th onClick={getValue}>3</th>
            <th rowspan={2} onClick={finalResult}>=</th>
        </tr>
        <tr>
            <th onClick={getValue}>.</th>
            <th onClick={getValue}>0</th>
            <th onClick={getValue}>%</th>
        </tr>

    </table>

    </div>
    </>
  )
}

export default Calculator 
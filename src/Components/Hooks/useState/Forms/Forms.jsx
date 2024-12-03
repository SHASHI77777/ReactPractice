import React, { useState } from 'react'
import './Forms.css'

const Forms = () => {
    let [fnm,setFnm] = useState('')
    let [newfnm,setnewfnm] = useState('')
    
    let [lnm,setlnm] = useState('')
    let [newlnm,setnewlnm] = useState('')

    let handleFnm=(e)=>{
     setFnm(e.target.value)
    }
    let handlelnm=(e)=>{
        setlnm(e.target.value)
    }
    
    let handleSubmit =(e)=>{
        e.preventDefault()
        setnewfnm(fnm)
        setnewlnm(lnm)
        setFnm("")
        setlnm("")
    }

  return (
    <>


        <div className='usestate-forms'></div>
        <div className='header'>
        <h2>Forms </h2>
        </div>
       
        <div className='main-form'>
        
            <form onSubmit={handleSubmit}>
                <input type="text"  placeholder='Enter First name ' onChange={handleFnm}  value={fnm}></input>
                <input type="text"  placeholder='Enter Last name ' onChange={handlelnm} value={lnm}></input>


                <button>Submit</button>
            </form>
            
        </div>
        <h1>{newfnm} {newlnm}</h1>
        

    </>
  )
}

export default Forms ;
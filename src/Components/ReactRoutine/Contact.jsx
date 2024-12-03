
import React, { useState } from 'react'
import './Contact.css'
const Contact = () => {
        let [fnm,setFnm] = useState('')
        let [newfnm,setnewfnm] = useState('')
        
        let [lnm,setlnm] = useState('')
        let [newlnm,setnewlnm] = useState('')

        let [mob,setMob] = useState('')
        let [newMob,setnewMob] = useState('')
        let [email,setEmail] = useState('')
        let [newEmail,setnewEmail] = useState('')
    
        let handleFnm=(e)=>{
         setFnm(e.target.value)
        }
        let handlelnm=(e)=>{
            setlnm(e.target.value)
        }
        let handleMob=(e)=>{
            setMob(e.target.value)
        }
        let handleEmail=(e)=>{
            setEmail(e.target.value)
        }
        
        let handleSubmit =(e)=>{
            e.preventDefault()
            setnewfnm(fnm)
            setnewlnm(lnm)
            setnewMob(mob)
            setnewEmail(email)
            setFnm("")
            setlnm("")
            setMob("")
            setEmail("")
        }
  return (
    <>

        <div className='usestate-forms'></div>
        <div className='header'>
        
        </div>
       
        <div className='main'>
        <h1>Please Give Your Conatct Details  </h1>
            <form onSubmit={handleSubmit}>
                <input type="text"  placeholder='Enter First name ' onChange={handleFnm}  value={fnm}></input>
                <input type="text"  placeholder='Enter Last name ' onChange={handlelnm} value={lnm}></input>
                <input type="tel"  placeholder='Enter your Contact Number ' onChange={handleMob} value={mob} ></input>
                <input type="email"  placeholder='Enter Email id  ' onChange={handleEmail} value={email} ></input>
                  
                <button>Submit</button>
            </form>
            
        </div>
        <h1>{newfnm} {newlnm} {newMob} {newEmail}</h1>
        

    </>
  )
}

export default Contact;

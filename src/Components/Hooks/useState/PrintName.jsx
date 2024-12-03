import React, { useState } from 'react'

const PrintName = () => {
    let [name,setName]=useState('Shashi')

    let changeContent =() =>{
        setName('Shashi Singh')
    }
  return (
    <div>
    <h2> My name is {name} </h2>
<button onClick={changeContent}> ChangeContent</button>
    </div>
  )
}

export default PrintName
import React, { useState } from 'react'
import './DayNight.css'

const DayNight = () => {
  let [bool , setBool] = useState(true)
  let handleClick = () =>{
    setBool(!bool)
    document.body.style.cssText = `background :${bool ? 'black':'whitesmoke'}`
  }
  return (
    <div className='daynight'>
    <div className="header-day">Day Night Mode</div>
    <div className="container-day">
      <div className="btn-box">
        <button onClick={handleClick}
        className={bool ? 'lft-btn' : 'ryt-btn'}>
         {bool ? 'Day Mode' : 'Night Mode'}
        </button>
      </div>
    </div>
    </div>
  )
}

export default DayNight
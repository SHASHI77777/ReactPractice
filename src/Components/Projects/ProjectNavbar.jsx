import React from 'react'
import './ProjectNavbar.css'
import { NavLink } from 'react-router-dom'

const ProjectNavbar = () => {
  return (
    <div>
      <div className="pnavbar">
        <h2 className="heading">
            Projects
        </h2>

        <div className="links">
            <ul>
                <li><NavLink to="/Home" className="nav-link" >Home </NavLink> </li>
                <li><NavLink to="/Daynight" className="nav-link">Day Night</NavLink></li>
                <li><NavLink to="/Volume" className="nav-link">Volume </NavLink></li>
                <li><NavLink to="/Displaycolor" className="nav-link"> Display Color </NavLink> </li>
                <li><NavLink to="/GenerateOtp" className="nav-link"> GenerateOtp </NavLink> </li>
                <li><NavLink to="/YesOrNo" className="nav-link"> Like or not  </NavLink> </li>
                <li><NavLink to="/Calculator" className="nav-link"> Calculator  </NavLink> </li>
                <li><NavLink to="/DigitalClock" className="nav-link"> DigitalClock  </NavLink> </li>  
                <li><NavLink to="/Forms" className="nav-link"> Forms  </NavLink> </li>  
                <li><NavLink to="/students" className="nav-link"> Student  </NavLink> </li>   
                <li><NavLink to="/imagegallery" className="nav-link"> ImagesGallery  </NavLink> </li>    
                <li><NavLink to="/cards" className="nav-link"> Animal Gallery </NavLink> </li>
                <li><NavLink to="/incDec" className="nav-link"> IncDec  </NavLink> </li>    
            </ul>
        </div>
      </div>
    </div>
  )
}

export default ProjectNavbar
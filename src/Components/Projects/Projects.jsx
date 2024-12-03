import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProjectNavbar from './ProjectNavbar'
import DayNight from './DayNight/DayNight'
import './ProjectNavbar.css'
import Volume from './Volume/Volume'
import Displaycolor from './DisplayColor/Displaycolor'
import Home from './Home/Home'
import GenerateOtp from './GenerateOtp/GenerateOtp'
import YesNoBox from './LikeFun/YesOrNO'
import Calculator from './Calculator/Calculator'
import DigitalClock from './DigitalClock/DigitalClock'
import ImagesGallery from '../ImagesGallery/ImagesGallery'
import Forms from '../Hooks/useState/Forms/Forms';
import StudentApp from '../Hooks/useState/StudentApp/StudentApp'
import Cards from '../Cards/Cards'
import IncDec from '../Hooks/useState/IncDec'
const Projects = () => {
  return (
    <div>
      <BrowserRouter>
      <div className="p-container">
      <div className="p-left">
       <ProjectNavbar/>
       </div>

        <div className="p-right">
        <Routes>
            <Route element={<Home/>} path='/home'/>
            <Route element={<DayNight/>} path='/daynight'/>
            <Route element={<Volume/>} path='/volume'/>
            <Route element={<Displaycolor/>} path='/displaycolor'/>
            <Route element={<GenerateOtp/>} path='/generateOtp'/>
            <Route element={<YesNoBox/>} path='/yesorno'/>
            <Route element={<Calculator/>} path='/calculator'/>
            <Route element={<DigitalClock/>} path='/digitalclock'/>
            <Route element={<Forms/>} path='/forms'/>
            <Route element={<StudentApp/>} path='/students'/>
            <Route element={<ImagesGallery/>} path='/imagegallery'/>  
            <Route element={<Cards/>} path='/cards'/> 
            <Route element={<IncDec/>} path='/incDec'/>
            
        </Routes>
        </div>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default Projects
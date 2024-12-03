import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Blog from './Blog'


const Header = () => {
  return (
    <>
    <div>
     <BrowserRouter>
    
     <Navbar/>
     <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<About/>} path='/about'/>
         
         <Route element={<Blog/>} path='/blog'/>
         <Route element={<Contact/>} path='/contact'/>
     </Routes>
    </BrowserRouter>
    </div>
    </>
  )
}

export default Header
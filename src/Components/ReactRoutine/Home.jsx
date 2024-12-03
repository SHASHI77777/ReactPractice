import React from 'react'
import './Home.css'

const Home = () => {
  let images ="https://www.shutterstock.com/image-photo/san-diego-zoo-california-march-260nw-1675825021.jpg";
  

  
  return (
    <>
       <div className="image-container">
      <img src={images}alt="Zoo" className="background-image" />
      <h1 className="text-overlay">Welcome to the Zoo!</h1>
    </div>
    </>
  )
}

export default Home
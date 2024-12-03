import React from 'react'

const MovieChild = (props) => {
    let { id, actor, actress, desc, dor, imageurl, moviename, rating } = props
  return (
    <div className="card">
       
        
       <img src={imageurl}/>

       <p>{desc}</p>
       <h2>{moviename}</h2>
       <h2>{dor}</h2>
       <h2>{actor}</h2>
       <h2>{actress}</h2>
       <h2>{rating}</h2>
       

    </div>

    

  )
}

export default MovieChild
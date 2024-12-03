import React from "react";
import MovieChild from "./MovieChild";
import { moviedata } from "./moviedata";
import './MovieCard.css'

const MovieCard = () => {
  // {console.log(moviedata);}
  return (
    <>
    <div className="text">
     <h1> Movie Collection</h1> 
      </div>

      <div className="moviecard">
        {moviedata.map((movie) => {
          let { id, actor, actress, desc, dor, imageurl, moviename, rating } =
            movie;
          return (
            <>
              <MovieChild
                id={id}
                actor={actor}
                actress={actress}
                desc={desc}
                dor={dor}
                imageurl={ imageurl}
                moviename={moviename}
                rating={rating}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default MovieCard;

// import React from 'react'

import { animaldata } from "./animaldata";

import React from "react";
import "./Blog.css";
const Blog = () => {
  return (
    <>
      <div className="zoo">
        {animaldata.map((elem) => {
          const { id, title, desc, image } = elem;

          return (
            <div className="main-box" key={id}>
            <div className="title">{title}</div>
              <div className="context">
                <div className="image">
                  <img src={image} alt={`not available`} className="image" />
                </div>
                <div className="desc">{desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Blog;

// import React from 'react';

// const BlogPost = ({ title, description, image, link }) => {
//     return (

//     );
// };

// const styles = {
//     container: {
//         border: '1px solid #ddd',
//         borderRadius: '5px',
//         padding: '15px',
//         margin: '20px 0',
//         backgroundColor: '#f9f9f9',
//     },
//     image: {
//         width: '100%',
//         borderRadius: '5px',
//     },
//     title: {
//         color: '#4CAF50',
//         marginTop: '10px',
//     },
//     description: {
//         color: '#555',
//     },
//     readMore: {
//         color: '#4CAF50',
//         textDecoration: 'none',
//         fontWeight: 'bold',
//     },
// };

// export default BlogPost;

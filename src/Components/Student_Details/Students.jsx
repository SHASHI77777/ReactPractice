import React from "react";
// import "./student.css";
import { stud_data } from "./studentData";

const Students = () => {
  let viewDeatils = (fname, place) => {
    alert(`My name is ${fname} palce  is ${place}`);
  };

  // let deleteData = (id) => {
  //   stud_data = stud_data.filter((s) => s.id !== id); // Filter out the item with the given id
  //   // console.log("Updated Data after deletion:", stud_data);
  //   stud_data.forceUpdate();



  let handleDelete = (id) => {
    stud_data = stud_data.filter((s) => s.id !== id);
  };
  


  
  return (
    <>
      <div className="student-details">
        <div className="header">Student Details</div>
        <div>
          <table border={1}>
            <thead>
              <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Date of Birth</th>
                <th>Age</th>
                <th>Place</th>
                <th>View place </th>
                <th> delete </th>
              </tr>
            </thead>

            <tbody>
              {stud_data.map((data) => {
                let { id, fname, lname, dob, place } = data;
                let dateObj = new Date();
                let age = dateObj.getFullYear() - dob;

                return (
                  <tr>
                    <td>{id}</td>
                    <td>{fname}</td>
                    <td>{lname}</td>
                    <td>{dob}</td>
                    <td>{age}</td>
                    <td>{place}</td>
                    <th>
                      <button
                        className="view"
                        onClick={() => {
                          viewDeatils(fname, place);
                        }}
                      >
                        view
                      </button>
                    </th>

                    <th>
                      <button
                        className="delete"
                        onClick={() => handleDelete(id)}
                      >
                        delete
                      </button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Students;

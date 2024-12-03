import React from "react";
// import "./Events.css";
const Events = () => {
  // let printdata = ()=>{
  //     alert('hello')
  // }

  let printdata = () => {
    let firstname = prompt("Enter first Name ");
    let lastname = prompt("Enter last Name ");
    //   let Fullname=firstname +lastname;
    //   alert(Fullname)
    alert(`my name is ${firstname} ${lastname}`);
  };
  let printname = (a) => {
    alert(`my name is ${a}`);
  };
  let students = [
    { id: 1, fname: "Dinga", lname: "Raja", place: "Goa", age: "29" },
    { id: 2, fname: "Rahul", lname: "Raja", place: "pune", age: "22" },
    { id: 3, fname: "Mohan", lname: "Das", place: "Manali", age: "29" },
    { id: 4, fname: "Raju", lname: "Baba", place: "Bangkok", age: "24" },
  ];

  return (
    <>
      <div className="events">
        <button onClick={printdata}>Click here</button>
        <button
          onClick={() => {
            printname("shashi");
          }}
        >
          Print names
        </button>
      </div>

      <div className="table">
        <table border={1}>
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Place</th>
              <th>Age</th>
              <th>View fname and age </th>
            </tr>
          </thead>

          <tbody>
            {students.map((data) => {
              let { id, fname, lname, place, age } = data;
              return (
                <tr>
                  <td>{id}</td>
                  <td>{fname}</td>
                  <td>{lname}</td>
                  <td>{place}</td>
                  <td>{age}</td>
                  <th>
                    <button
                      onClick={() => {
                        alert(` First name is ${fname} and age is  ${age}`);
                      }}>
                      view
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Events;

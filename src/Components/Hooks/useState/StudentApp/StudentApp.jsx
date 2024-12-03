
import React, { useState } from "react";
import "./studentapp.css";
import { studentdata } from "./studentdata";

const StudentApp = () => {
  let [data, setData] = useState(studentdata);

  let viewDetails = (id, firstName, lastName, contact, email) => {
    alert(
      `My Name is ${firstName} ${lastName} and my Roll Number is ${id}. Contact no: ${contact}, Email: ${email}`
    );
  };

  let deleteStud = (id, firstName) => {
    let bool = window.confirm(`Do you want to delete ${firstName}'s data?`);
    if (bool) {
      let data1 = data.filter((s) => s.id !== id);
      setData(data1);
    } else {
      alert("Student data is not deleted");
    }
  };

  let addnewStudent = () => {
    let firstName = prompt("Enter your first name");
    let lastName = prompt("Enter your last name");
    let contact = prompt("Enter your  contact ");
    let email = prompt("Enter your Email id ");

    let newStud = {
      firstName: firstName,
      lastName: lastName,
      contact: contact,
      email: email,
    };
    setData([...data, newStud]);
  };

  let deleStud = (index) => {
    let bool = window.confirm(`Do you want to delete all data?`);
    if (bool) {
      setData(0);
    } else {
      alert("Student data is not deleted");
    }
  };

  return (
    <>
      <div className="studentapp">
        <div className="header1">
          <h1>Student Data</h1>
        </div>
        <div className=".main-studentapp">
          <div className="add">
            <button onClick={() => addnewStudent()}>Add new data </button>
            <button onClick={() => deleStud()}>Delete All data </button>
          </div>

          {data.length > 0 ? (
            <table border={1} cellspacing={2}>
              <thead>
                <tr>
                  <th>Student ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Contact</th>
                  <th>Email ID</th>
                  <th>View</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {data.map((elem, index) => {
                  let { id, firstName, lastName, contact, email } = elem;
                  return (
                    <tr key={id}>
                      <td>{index + 1}</td>
                      <td>{firstName}</td>
                      <td>{lastName}</td>
                      <td>{contact}</td>
                      <td>{email}</td>
                      <td>
                        <button
                          className="view"
                          onClick={() =>
                            viewDetails(id, firstName, lastName, contact, email)
                          }
                        >
                          View
                        </button>
                      </td>
                      <td>
                        <button
                          className="delete"
                          onClick={() => deleteStud(id, firstName)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <>
              <h1> No data found !</h1>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default StudentApp;

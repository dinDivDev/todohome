import React from "react";
import { students } from "./StudentsData";
import "./studentList.style.css";

const StudentList = () => {
  const showStudent = students.map((el, index) => {
    return (
      <div className="student-card" key={index}>
        <img src={el.picture} width="50px" />
        <h1>{el.name}</h1>
        <span>Enjoys {el.hobby}</span>
      </div>
    );
  });

  return <div className="student-container">{showStudent}</div>;
};

export default StudentList;

import React, { useState } from "react";
import { students } from "../studentList/StudentsData";
import "./studentListHomeWork.style.css";

const StudentListHomeWork = () => {
  const [open, setOpen] = useState(false);

  const onClickHandler = (e) => {
    // e.preventDefault();
    setOpen(!open);
  };

  const displayStudent = students.map((element, index) => {
    return (
      <div className="student-container" key={index}>
        <h4>Students {index}</h4>
        <img src={element.picture} />
        <span className="student-name">{element.name}</span>
        <br></br>
        <span>Enjoys {element.hobby}</span>
        <br></br>
        <button className="click-btn" onClick={onClickHandler}>
          Click for more details
        </button>
        {open === true && (
          <span className="student-info">{element.studentInfo}</span>
        )}
      </div>
    );
  });

  return <div className="students-list-container">{displayStudent}</div>;
};

export default StudentListHomeWork;

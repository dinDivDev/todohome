import React from "react";
import StudentList from "../studentList/StudentList";
import "./studentBucket.style.css";

const StudentBucket = (props) => {
  return (
    <div className="student-container">
      <StudentList>{props.showStudent}</StudentList>
    </div>
  );
};

export default StudentBucket;

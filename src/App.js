import "./App.css";
import StudentBucket from "./components/studentBucket/StudentBucket";
import StudentList from "./components/studentList/StudentList";
import StudentListHomeWork from "./components/studentsListHomeWork/StudentListHomeWork";
import ToDoHome from "./components/todoHome/ToDoHome";

function App() {
  return (
    <div className="app-container">
      {/* <ToDoHome></ToDoHome> */}
      {/* <StudentList></StudentList> */}
      {/* <StudentBucket></StudentBucket> */}
      <StudentListHomeWork></StudentListHomeWork>
    </div>
  );
}

export default App;

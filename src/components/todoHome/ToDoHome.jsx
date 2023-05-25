import React, { useState } from "react";

const ToDoHome = () => {
  const defaultToDoS = localStorage.getItem("Aidina's todoList").split(",");
  console.log("default to do's     ", defaultToDoS);
  const [todoValue, setToDoValue] = useState("");
  const [todoList, setToDoList] = useState([...defaultToDoS]);

  const onChangeHandler = (e) => {
    setToDoValue(e.target.value);
    console.log(todoValue);
  };

  const onClickHandler = () => {
    setToDoList([...todoList, todoValue]);
    localStorage.setItem("Aidina's todoList", [...todoList, todoValue]);
    // console.log("this is a list", todoList);
    // setToDoList("");
  };

  const showToDoList = todoList.map((element, index) => {
    return <p key={index}>{element}</p>;
  });

  return (
    <div>
      <h1>TODO List</h1>
      <input
        type="text"
        placeholder="Please enter your TODO"
        onChange={onChangeHandler}
        value={todoValue}
      />
      <button onClick={onClickHandler}>ADD</button>
      {showToDoList}
    </div>
  );
};

export default ToDoHome;

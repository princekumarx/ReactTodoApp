import React, { useContext } from "react";
import "./taskList.css";
import { TodoAppContext } from "../../TodoAppContext";
import TaskCard from "./taskCard";
import { useState } from "react";

const TaskList = () => {
  const [todo, setTodo] = useContext(TodoAppContext);

  const taskDone = e => {
    let circle = document.querySelector(".circle");
    // let taskTitle = document.querySelector(".taskTitle");

    e.target.classList.toggle("yes");
    taskTitle();
    console.log(circle.className);

    setTodo(
      todo.map(item => {
        if (circle.className === "circle yes") {
          return Object.assign(item, { done: item.done + 1 });
        } else if (circle.className === "circle") {
          return Object.assign(item, { done: item.done - 1 });
        }
      })
    );
  };
  const taskTitle = e => {
    let taskTitle = document.querySelector(".taskTitle");
    let circle = document.querySelector(".circle");

// if(circle.className === "yes"){
   
// }
     
  };

  if (todo.length > 0) {
    return (
      <div>
        {todo.map((item, i) => {
          return (
            <TaskCard
              taskTitle={taskTitle}
              key={i++}
              taskDone={taskDone}
              title={item.title}
            ></TaskCard>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="container empty">
        <h3>Empty Please add your task!</h3>
      </div>
    );
  }
};

export default TaskList;

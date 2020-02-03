import React, { useContext } from "react";
import "./taskList.css";
import { TodoAppContext } from "../../TodoAppContext";

const TaskCard = props => {
  const [todo, setTodo] = useContext(TodoAppContext);

  return (
    <div className="container">
      <div className="card-container">
        <div className="card">
          <div className="card-left">
            <span className="circle" onClick={props.taskDone}></span>
            <div className="taskTitle" onClick={props.taskTitle}>
              <p>{props.title}</p>
              <h5>{"Tasks"}</h5>
            </div>
          </div>
          <div className="card-right">
            <span className="edit"></span>
            <span className="delete"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;

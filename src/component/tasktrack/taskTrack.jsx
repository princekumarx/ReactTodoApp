import React, { useContext } from "react";
import "./task.css";
import { TodoAppContext } from "../../TodoAppContext";

const TaskTrack = () => {
  const [todo, setTodo] = useContext(TodoAppContext);

  const totalCount = () => {
    let i = 0;
    todo.map(a => (i = i + a.done));

    return i;
  };
  return (
    <div className="container task">
      <p>
        Tasks <span>{todo.length}</span>
      </p>
      <p>
        Done
        <span>{totalCount()}</span>
      </p>
    </div>
  );
};

export default TaskTrack;

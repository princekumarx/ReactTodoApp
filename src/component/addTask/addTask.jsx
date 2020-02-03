import React, { useContext, useState } from "react";
import "./addTask.css";
import { TodoAppContext } from "../../TodoAppContext";

const AddTask = () => {
  const [todo, setTodo] = useContext(TodoAppContext);
  const [title, setTitle] = useState("");

  const updateTitle = e => {
    setTitle(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    setTodo(prevState => [...prevState, { id: "", title: title, done: 0 }]);
  };

  return (
    <div className="container ">
      <form onSubmit={onSubmit} className="form">
        <input
          onChange={updateTitle}
          className="input"
          type="text"
          name="task"
          required
        />
        <input className="submit" type="submit" name="submit" value="+" />
      </form>
    </div>
  );
};

export default AddTask;

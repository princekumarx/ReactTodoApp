import React, { useState, createContext } from "react";
export const TodoAppContext = createContext();
export const TodoDataProvider = props => {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "Gym",
      done: 0
    }
  ]);
  return (
    <TodoAppContext.Provider value={[todo, setTodo]}>
      {props.children}
    </TodoAppContext.Provider>
  );
};

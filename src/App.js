import React from "react";
import "./App.css";
import Navbar from "./component/navbar/navbar";
import TaskTrack from "./component/tasktrack/taskTrack";
import AddTask from "./component/addTask/addTask";
import { TodoDataProvider } from "./TodoAppContext";
import TaskList from "./component/cardList/taskList";

function App() {
  return (
    <div>
      <TodoDataProvider>
        <Navbar></Navbar>
        <TaskTrack></TaskTrack>
        <AddTask></AddTask>
        <TaskList></TaskList>
      </TodoDataProvider>
    </div>
  );
}

export default App;

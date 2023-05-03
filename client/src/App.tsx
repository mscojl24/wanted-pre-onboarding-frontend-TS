import React from "react";
import "./css/App.css";
import TodoList from "./components/Todolist";
import SingIn from "./components/SingIn";
import SingUp from "./components/SingUp";
function App() {
  return (
    <div className="App">
      <TodoList />
      <SingIn />
      <SingUp />
    </div>
  );
}

export default App;

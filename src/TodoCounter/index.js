import React from "react";
import './TodoCounter.css'
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext)

    return(
      <h2 
        className="todos-count-title"
      >
        Has completado <span className="todos-count-text">{completedTodos}</span> de <span className="todos-count-text">{totalTodos}</span> TODOs
      </h2>
    );
}

export  { TodoCounter };
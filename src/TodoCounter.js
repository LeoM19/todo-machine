import React from "react";
import './TodoCountes.css'

function TodoCounter({ total, completed }) {

    return(
      <h2 
        className="todos-count-title"
      >
        Has completado <span className="todos-count-text">{completed}</span> de <span className="todos-count-text">{total}</span> TODOs
      </h2>
    );
}

export  { TodoCounter };
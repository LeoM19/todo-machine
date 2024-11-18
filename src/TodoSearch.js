import React from "react";
import './TodoSearch.css'

function TodoSearch({
  searchValue,
  setSearchValue,
}) {
    return(
      <input 
        placeholder="Buscar TODOs" 
        className="todos-search"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value)
        }}
      />
    );
}

export  { TodoSearch };
import './TodoList.css'

function TodoList({children}) {
    return(
      <ul className="todos-list">
        {children}
      </ul>
    );
}

export  { TodoList };
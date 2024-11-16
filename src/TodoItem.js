function TodoItem(props) {
    return(
      <li>
        <span className={`${props.completed && "icon-check--completed"}`}>V</span>
        <p className={`${props.completed && "todo-text--completed"}`}>{props.text}</p>
        <span>X</span>
      </li>
    );
}

export  { TodoItem };
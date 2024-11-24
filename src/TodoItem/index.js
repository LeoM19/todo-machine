import { CompleteIcon } from "../TodoIcon/CompletedIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";

import './TodoItem.css'

function TodoItem(props) {
    return(
      <li 
        className="todo-item"
      >
        <CompleteIcon 
          completed={props.completed}
          onComplete={props.onComplete}
        />

        <p className={`${props.completed && "todo-text--completed"}`}>
          {props.text}
        </p>

        <DeleteIcon 
          onDelete={props.onDelete}
        />
      </li>
    );
}

export  { TodoItem };
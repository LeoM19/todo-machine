import './CreateTodoButton.css'

function CreateTodoButton() {
    return(
      <button className="create-todo-button" 
      onClick={
        () => console.log('Le diste click')
      }
      >Create TODO</button>
    );
}

export  { CreateTodoButton };
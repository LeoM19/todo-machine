import './CreateTodoButton.css'

function CreateTodoButton({ setOpenModal }) {
    return(
      <button className="create-todo-button" 
      onClick={
        () => {
          setOpenModal(state => true);
        }
      }
      >Create TODO</button>
    );
}

export  { CreateTodoButton };
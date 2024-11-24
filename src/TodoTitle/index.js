import './TodoTitle.css'


function TodoTitle({ total, completed }) {

    return(
      <h1 
        className="title"
      >
        <span className="title-todos"><span className="title-todos-text">TODO</span>s</span> MACHINE
      </h1>
    );
}

export  { TodoTitle };
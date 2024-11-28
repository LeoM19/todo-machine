import React from 'react'
import { TodoContext } from '../TodoContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './FormCreateTodo.css'

function FormCreateTodo() {
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        setOpenModal(false)
        setNewTodoValue();
        addTodo(newTodoValue);
    }

    const onCancel = () => {
        setOpenModal(false)
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <form 
            onSubmit={onSubmit}>
            <p className='title'>Crear <span>TODO</span></p>

            <textarea 
                placeholder='Escribe tu nuevo todo'
                value={newTodoValue}
                onChange={onChange}
            />

            <FontAwesomeIcon 
                icon={faXmark}
                className='close-form'
                onClick={onCancel}
            />

            <button >Crear</button>
        </form>
    );
}

export { FormCreateTodo }
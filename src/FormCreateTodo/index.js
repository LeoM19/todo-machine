import React from 'react'
import './FormCreateTodo.css'

function FormCreateTodo({ setOpenModal }) {

    return (
        <p 
            className='close-form'
            onClick={
                () => {
                    setOpenModal(state => false)
                }
            }
        >Cerrar formulario</p>
    );
}

export { FormCreateTodo }
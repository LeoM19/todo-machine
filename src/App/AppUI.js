import React from 'react';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { TodoTitle } from '../TodoTitle';
import { TodoLoading } from '../TodoLoading';
import { TodoError } from '../TodoError';
import { EmptyTodo } from '../EmptyTodo';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { FormCreateTodo } from '../FormCreateTodo'

function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext)

    return (
        <>
            <div className='main-container'>
                <TodoTitle />
                <TodoCounter />
                <TodoSearch />

                <TodoList>
                    {loading && <TodoLoading />}
                    {error && <TodoError />}
                    {(!loading && searchedTodos.lenght === 0) && <EmptyTodo />}

                    {searchedTodos.map(todo => (
                        <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                        />
                    ))}
                </TodoList>

                <CreateTodoButton 
                    setOpenModal={setOpenModal}
                />

                {openModal && (
                    <Modal>
                        <FormCreateTodo />
                    </Modal>
                )}
            </div>
        </>
    )
}

export { AppUI }
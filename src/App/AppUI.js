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

function AppUI() {
    const {
            loading,
            error,
            searchedTodos,
            completeTodo,
            deleteTodo,
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

                <CreateTodoButton />
            </div>
        </>
    )
}

export { AppUI }
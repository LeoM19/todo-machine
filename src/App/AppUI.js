import { CreateTodoButton } from '../CreateTodoButton';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { TodoTitle } from '../TodoTitle';
import { TodoLoading } from '../TodoLoading';
import { TodoError } from '../TodoError';
import { EmptyTodo } from '../EmptyTodo';

function AppUI(props) {
    return (
        <>
            <div className='main-container'>
                <TodoTitle />
                <TodoCounter
                completed={props.completedTodos}
                total={props.totalTodos}
                />
                <TodoSearch 
                searchValue = {props.searchValue}
                setSearchValue = {props.setSearchValue}
                />

                <TodoList>
                {props.loading && <TodoLoading />}
                {props.error && <TodoError />}
                {(!props.loading && props.searchedTodos.lenght === 0) && <EmptyTodo />}

                {props.searchedTodos.map(todo => (
                    <TodoItem 
                    key={todo.text} 
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => props.completeTodo(todo.text)}
                    onDelete={() => props.deleteTodo(todo.text)}
                    />
                ))}
                </TodoList>

                <CreateTodoButton />
            </div>
        </>
    )
} 

export { AppUI }
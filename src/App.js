import React from 'react';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { TodoTitle } from './TodoTitle';

import './estilos.css'

const defaultTodo = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Barrer cocina', completed: false },
  { text: 'Lavar trastes', completed: false },
  { text: 'Lavar ropa', completed: true },
  { text: 'limpiar ropa', completed: true },
  { text: 'lavar Perro', completed: true }
];

function App() {
  return (
    <>
      <div className='main-container'>
        <TodoTitle />
        <TodoCounter
          completed={3}
          total={5}
        />
        <TodoSearch />

        <TodoList>
          {defaultTodo.map(todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
            />
          ))}
        </TodoList>

        <CreateTodoButton />
      </div>
    </>
  );
}

export default App;

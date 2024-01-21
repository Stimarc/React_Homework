import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

const TodosList = () => {
  const { todos } = useContext(AppContext);
  const limitedTodos = todos.slice(0, 5);

  return (
    <div className="todos-container">
      <h2 className="todos-header">Todos List</h2>
      <ul className="todos-list">
        {limitedTodos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span className="todo-text">{todo.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodosList;
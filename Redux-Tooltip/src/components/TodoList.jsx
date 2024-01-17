import React from 'react';
import { useSelector } from 'react-redux';

export const TodoList = () => {
  const selectedUser = useSelector(state => state.user.selectedUser);
  const todos = useSelector(state => state.todos);

  return (
    <div>
      <h1>Todo List</h1>
      <p>Selected User: {selectedUser}</p>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}


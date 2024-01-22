import React, { useContext, useState } from 'react';
import { AppContext } from '../contexts/AppContext';
import { addTodo, deleteTodo } from '../actions/todosActions';


const TodosList = () => {
  const { todos, dispatch } = useContext(AppContext);
  const [newTodo, setNewTodo] = useState('');



  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      const newTodoObject = {
        id: todos.length + 1, 
        title: newTodo,
      };
      dispatch(addTodo(newTodoObject));
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  return (
    <div className="todos-container">
      <h2 className="todos-header">Todos List</h2>
      <ul className="todos-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span className="todo-text">{todo.title}</span>
            <button  onClick={() => handleDeleteTodo(todo.id)} className="delete-todo-button">
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div className="add-todo-container">
        <input 
          className='todo-input'
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new todo"
        />
        <button className='todo-button-add' onClick={handleAddTodo}>Add Todo</button>
      </div>
    </div>
  );
};

export default TodosList;

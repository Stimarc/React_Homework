const todosReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_TODOS':
      return { todos: action.payload };
    case 'ADD_TODO':
      return { todos: [...state.todos, action.payload] };
    case 'DELETE_TODO':
      return { todos: state.todos.filter(todo => todo.id !== action.payload) };
    default:
      return state;
  }
};

export default todosReducer;
export const fetchTodos = () => async (dispatch) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const todos = await response.json();
      dispatch({ type: 'FETCH_TODOS', payload: todos });
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };
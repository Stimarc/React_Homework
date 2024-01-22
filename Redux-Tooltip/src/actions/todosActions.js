export const fetchTodos = () => async (dispatch) => {

  const url = 'https://jsonplaceholder.typicode.com/todos';
    try {
      const response = await fetch(url + '?_limit=5');
      const todos = await response.json();
      
      dispatch({ type: 'FETCH_TODOS', payload: todos });
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

export const addTodo = (todo) => ({ type: 'ADD_TODO', payload: todo });
export const deleteTodo = (todoId) => ({ type: 'DELETE_TODO', payload: todoId });

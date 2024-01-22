export const fetchUsers = () => async (dispatch) => {

  const url = 'https://jsonplaceholder.typicode.com/users';
  try {
    const response = await fetch(url + '?_limit=5');
    const users = await response.json();

    dispatch({ type: 'FETCH_USERS', payload: users });
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

export const addUser = (user) => ({ type: 'ADD_USER', payload: user });
export const deleteUser = (userId) => ({ type: 'DELETE_USER', payload: userId });
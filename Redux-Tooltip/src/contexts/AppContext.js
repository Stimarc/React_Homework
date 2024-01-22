import React, { createContext, useReducer, useEffect } from 'react';
import todosReducer from '../reducers/todosReducer';
import userReducer from '../reducers/userReducer';
import { fetchTodos } from '../actions/todosActions';
import { fetchUsers } from '../actions/userActions';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [todosState, todosDispatch] = useReducer(todosReducer, { todos: [] });
  const [usersState, usersDispatch] = useReducer(userReducer, { users: [] });

  useEffect(() => {
    fetchTodos()(todosDispatch);
    fetchUsers()(usersDispatch);
  }, []);

  return (
    <AppContext.Provider value={{ todos: todosState.todos, users: usersState.users, dispatch: todosDispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
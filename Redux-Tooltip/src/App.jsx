import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AppContextProvider from './contexts/AppContext';
import TodosList from './components/TodosList';
import UserList from './components/UserList';


const App = () => {
  return (
    <AppContextProvider>
      <Router>
        <div className="app-container">
          <h1 className="app-title">Todo List</h1>
          <nav>
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/todos">Todos</Link>
              </li>
              <li className="nav-item">
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          <div className="content">
            <Route path="/todos" component={TodosList} />
            <Route path="/users" component={UserList} />
          </div>
        </div>
      </Router>
    </AppContextProvider>
  );
};

export default App;
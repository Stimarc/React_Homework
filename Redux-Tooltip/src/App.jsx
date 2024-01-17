import React from 'react';
import {Router, Route} from 'react-router-dom';
import {TodoList,UserManagement} from './components'

const App = () => {
  return (
    <Router>
        <Route path="/todo" component={TodoList} />
        <Route path="/users" component={UserManagement} />
    </Router>
  );
}

export default App;
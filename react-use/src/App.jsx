import React from 'react';
import { Form } from './components/Form';
import { ThemeProvider } from './components/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>Theme</h1>
        <Form />
      </div>
    </ThemeProvider>
  );
}

export default App;
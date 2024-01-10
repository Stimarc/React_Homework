import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';


export const Form = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    
    const usernameInput = e.target.elements.username;
    const passwordInput = e.target.elements.password;

    
    const enteredUsername = usernameInput.value;
    const password = passwordInput.value;

    
    if (enteredUsername === 'user' && password === '123123') {
      setLoggedIn(true);
      setUsername(enteredUsername);
    } else {
      alert('Invalid login credentials');
    }
  };

  useEffect(() => {
    
    document.body.style.backgroundColor = isDarkMode ? '#333' : '#f4f4f4';
  }, [isDarkMode]);

  return (
    <div className={`Form ${isDarkMode ? 'dark' : 'light'}`}>
      {!isLoggedIn ? (
        <form onSubmit={handleLogin}>
          <label>
            Login:
            <input type="text" name="username" />
          </label>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <button type="submit">Login</button>
        </form>
      ) : (
        <div>
          <p>Welcome, {username}!</p>
          <button className="themeButton" onClick={toggleTheme}>
            Toggle Theme: {isDarkMode ? 'Light' : 'Dark'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Form;
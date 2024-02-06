import React from 'react';

const ToggleContainer = ({ onSignIn, onSignUp }) => {
  return (
    <div className="toggle-container">
      <div className="toggle">
        <div className="toggle-panel toggle-left">
          <h1>Welcome Back!</h1>
          <p>Enter your personal details to use all of site features</p>
          <button onClick={onSignIn}>Sign In</button>
        </div>
        <div className="toggle-panel toggle-right">
          <h1>Hello, Friend!</h1>
          <p>Register with your personal details to use all of site features</p>
          <button onClick={onSignUp}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default ToggleContainer;
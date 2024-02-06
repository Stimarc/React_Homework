import React, { useState } from 'react';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import ToggleContainer from './ToggleContainer';


const Authentication = () => {
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  return (
    <div className="container" id="container">
      {isSignUpActive ? <SignUpForm /> : <SignInForm />}
      <ToggleContainer
        onSignIn={() => setIsSignUpActive(false)}
        onSignUp={() => setIsSignUpActive(true)}
      />
    </div>
  );
};

export default Authentication;
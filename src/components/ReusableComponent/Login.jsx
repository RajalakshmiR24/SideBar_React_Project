import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded shadow-md">
        {isSignUp ? <SignUp /> : <SignIn />}
        <div className="text-center">
          {isSignUp ? (
            <>
              <p>Already have an account?</p>
              <button onClick={toggleAuthMode} className="text-blue-600">Sign In</button>
            </>
          ) : (
            <>
              <p>Don't have an account?</p>
              <button onClick={toggleAuthMode} className="text-blue-600">Sign Up</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;

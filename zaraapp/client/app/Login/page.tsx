import React from 'react';
import LoginForm from "./LoginForm";

const Login: React.FC = () => {


  return (
    <div id="login-page">
      <h1>Log in to your account</h1> 
      <LoginForm />
      <div>
        Don't have an account?
      </div>
    </div>
  );
};

export default Login;

import React from 'react';
import "./Login.css";
import LoginHeader from './LoginHeader';
import LoginForm from "./LoginForm"

const Login = () => {
  return (
    <>
    <LoginHeader/>
    <div className="Login">
      <LoginForm/>
    </div>
    
    </>
  )
}

export default Login
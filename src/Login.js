import React, { useState } from 'react'
import "./Login.css";
import LoginHeader from './LoginHeader';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import login from "./features/userSlice";


const Login = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then(userAuth =>{
      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
        }))
    }).catch(error => alert(error));
  };

  const register = () => {
    if (!name) {
      return alert("Please enter your Full Name");
    }
    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
      userAuth.user.updateProfile({
        displayName: name,
      }).then(() => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
          }))
      })
    }).catch(error => alert(error));
  };

  return (
    <>
      <LoginHeader />
      <div className="Login">
        <div className="LoginForm">
          <form className='LoginForm_body' action="post">
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder='FullName' type="text" name="" id="" />
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' type="email" name="" id="" />
            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' type="password" name="" id="" />
            <p>Not a member yet? <span className='login_register' onClick={register} >Register Now</span></p>
            <input className='sign_in_btn2' type="submit" onClick={loginToApp} value="Sign In" />
          </form>
        </div>
      </div>
    </>
  )
}

export default Login;
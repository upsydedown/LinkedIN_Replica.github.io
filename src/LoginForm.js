import React, { useState } from 'react'
import "./LoginForm.css"
import { auth } from './firebase'
import { useDispatch } from 'react-redux'
import login from "./features/userSlice"

const LoginForm = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();
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
                    displayName: name,
                }))
            })
        }).catch(error => alert(error));
    };

    return (
        <>
            <div className="LoginForm">
                <form className='LoginForm_body' action="post">
                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder='FullName' type="text" name="" id="" />
                    <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' type="email" name="" id="" />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' type="password" name="" id="" />
                    <p>Not a member yet? <span className='login_register' onClick={register} >Register Now</span></p>
                    <input className='sign_in_btn2' type="submit" onClick={loginToApp} value="Sign In" />
                </form>
            </div>
        </>
    )
}

export default LoginForm;
import React, { useState } from 'react';
import './SignUp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import firebase from "firebase/app";
import 'firebase/auth';
import firebaseConfig from '../../firebase/firebase.config';


const SignUp = ()=>{
    const [user, setUser ] = useState({})
    const handleInput = (e)=> {
        const newUser = {...user};
        newUser[e.target.name] = e.target.value;
        setUser(newUser);
    }

    // submit form data and create account
    const  submitForm = async (e)=>{
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        if(user){
            const NewSuccess = {...user};
            console.log(NewSuccess)
            NewSuccess.success = true;
            setUser(NewSuccess);
        } else{
            console.log("something wen wrong!")
        }
    })
    .catch((error) => {
        const errorMessage = error.message;
        const NewError = {...user};
        NewError.error = errorMessage;
        setUser(NewError);
    });
    e.preventDefault();
    const response =  await fetch("http://localhost:5000/api/v1/users/signup",{
        method:"post",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(user)
    });
    if(response.ok){
        const {message} = JSON.parse(await response.text());
        // show toast notification for add prodcut to cart
    toast.success(`${message}!`, {position: "top-center",autoClose: 1000,}) 
    }else{
     const {message} = JSON.parse(await response.text());
    toast.error(`${message}!`, {position: "top-center",autoClose: 1000,}) 
    }
}
    return(
        <div className="SignUp">
        <div className="container">
            <div className="SignUpBox">
                <h3>Sign Up</h3>
                <div className="inputBox">
                   <form onSubmit={submitForm}>
                   <input type="text" name="name" onBlur={handleInput} placeholder="Name" required /> <br />
                    <input type="email" name="email"  onBlur={handleInput} placeholder="Email" required /> <br />
                    <input type="password" name="password" onBlur={handleInput} placeholder="Password" required/> <br />
                    <button className="signupBtn">
                    <FontAwesomeIcon icon={faUser} /><span>Create Account</span></button>
                   </form>
                </div>
                <div className="loginOption">
                   <Link to="/login">Have an Account? Login now</Link>
                </div>
            </div>
        </div>
        <ToastContainer />
    </div>
    )
}

export default SignUp;
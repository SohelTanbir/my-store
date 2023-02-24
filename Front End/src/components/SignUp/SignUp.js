import React, { Fragment, useState } from 'react';
import './SignUp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUser } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import firebase from "firebase/app";
import 'firebase/auth';
import Loader from '../Loader/Loader';
import Header from '../Header/Header'
import HeaderTop from '../Header/HeaderTop';


const SignUp = ()=>{
    const navigate = useNavigate();
    const [user, setUser ] = useState({});
    let [loader, setLoader] = useState(false);
    const handleInput = (e)=> {
        const newUser = {...user};
        newUser[e.target.name] = e.target.value;
        setUser(newUser);
    }

    // submit form data and create account
    const  submitForm = async (e)=>{
        setLoader(true);
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
        setLoader(false);
        const {message} = JSON.parse(await response.text());
        // show toast notification for add prodcut to cart
    toast.success(`${message}!`, {position: "top-center",autoClose: 1000,});
      // redirect user to home page
  setTimeout(() => {
    navigate("/login"); 
  },2000); 
    }else{
        setLoader(false);
     const {message} = JSON.parse(await response.text());
    toast.error(`${message}!`, {position: "top-center",autoClose: 1000,}) 
    }
}
    return(
       <Fragment>
        <HeaderTop/>
            <Header/>
            <div className="SignUp">
                <div className="container">
                {loader&& <Loader color="#dfb839" />}
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
       </Fragment>
    )
}

export default SignUp;
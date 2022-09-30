import React, { useState } from 'react';
import './SignUp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import firebase from "firebase/app";
import 'firebase/auth';
import firebaseConfig from '../../firebase/firebase.config';


const SignUp = ()=>{
    const [user, setUser ] = useState({
        success:false,
        error:''
    })
    const handleInput = (e)=> {
        const newUser = {...user};
        newUser[e.target.name] = e.target.value;
        setUser(newUser);
        console.log(newUser)
    }

    // submit form data and create account
    const submitForm = (e)=>{
        e.preventDefault();
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
}
    return(
        <div className="SignUp">
        <div className="container">
            <div className="SignUpBox">
                <h3>Sign Up</h3>
                <div className="inputBox">
                   <form onSubmit={submitForm}>
                   <input type="text" name="name" onBlur={handleInput} placeholder="Your Name" required /> <br />
                    <input type="email" name="email"  onBlur={handleInput} placeholder="Enter E-mail" required /> <br />
                    <input type="password" name="password" onBlur={handleInput} placeholder="Password" required/> <br />
                    <button className="signupBtn" onClick={submitForm}>
                    <FontAwesomeIcon icon={faUser} /><span>Create Account</span></button>
                   </form>
                </div>
                <div className="loginOption">
                   <Link to="/login">Have an Account? Login now</Link>
                </div>
            </div>
        </div>
    </div>
    )
}

export default SignUp;
import React, { useContext, useState } from 'react';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUser } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import firebase from "firebase/app";
import 'firebase/auth';
import firebaseConfig from '../../firebase/firebase.config';
import { faFacebookSquare, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link, useHistory, useLocation } from 'react-router-dom';



import { userContext } from '../../App';
import Loader from '../Loader/Loader';
firebase.initializeApp(firebaseConfig);


const Login = () => {

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const {userData} = useContext(userContext);
  const [loggedInUser, setLoggedInUser] = userData;
  const [user, setUser] = useState({});
  let [loader, setLoader] = useState(false);




  // login with google account
  const handleGoogleLogin = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const user = result.user;
        const loggedUser = { name: user.displayName, email:user.email, photo: user.photoURL }
        setLoggedInUser(loggedUser);
        history.replace(from);
      }).catch((error) => {
        const errorMessage = error.message;
        const email = error.email;
      });
  }
  // login with Facebook
  const handleFacebookLogin = () => {
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(facebookProvider)
      .then((result) => {
        const user = result.user;
        const loggedUser = { name: user.displayName, email: user.email, photo: user.photoURL }
        setLoggedInUser(loggedUser);
        history.replace(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        const email = error.email;
      });
  }

  // login with email and password
  const handleInput = (e) => {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  }

  const handleSubmit = async (e) => {
    setLoader(true);
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/v1/users/login",{
      method:"post",
      headers:{'content-type':'application/json'},
       credentials: 'include',
      body:JSON.stringify(user)
  });
  if(response.ok){
    setLoader(true);
      const {message, user} = JSON.parse(await response.text());
      // show toast notification for add prodcut to cart
  toast.success(`${message}!`, {position: "top-center",autoClose: 1000,});
  setLoggedInUser(user)
  // redirect user to home page
  setTimeout(() => {
    history.push("/"); 
  }, 1100);
  }else{
    setLoader(false);
   const {message} = JSON.parse(await response.text());
  toast.error(`${message}!`, {position: "top-center",autoClose: 1000,}) 
  }
}

  return (
    <div className="login">
      <div className="container">
        {loader&& <Loader color="#dfb839" />}
     
        <div className="loginBox">
          <h3>Login</h3>
          <div className="inputBox">
            <form onSubmit={handleSubmit}>
              <input type="email" name="email" onBlur={handleInput} placeholder="Email" required /> <br />
              <input type="password" name="password" onBlur={handleInput} placeholder="Password" /> <br />
              <button className="loginBtn">
                <FontAwesomeIcon icon={faUser} /><span>Login Now</span></button>
              <div className="forgot-password">
              <Link to="/password/reset-password">
                <span>Forgot Passwrod?</span>
              </Link>
              </div>
            </form>
          </div>
          <div className="loginOption">
            <h4>Login Up With</h4>
            <button onClick={handleFacebookLogin} className="facebook"><FontAwesomeIcon icon={faFacebookSquare} /> Facebook</button>
            <button onClick={handleGoogleLogin} className="google"><FontAwesomeIcon icon={faGoogle} /> Google</button>
            <Link to="/signup">Don't have an Account? Create now</Link>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Login;
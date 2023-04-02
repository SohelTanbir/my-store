import React, { Fragment, useState } from 'react';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUser } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import firebase from "firebase/app";
import 'firebase/auth';
import firebaseConfig from '../../firebase/firebase.config';
import { faFacebookSquare, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';



import Loader from '../Loader/Loader';
import Header from '../Header/Header';
import HeaderTop from '../Header/HeaderTop';
import { getLoginUser } from '../../Store/UserSlice/UserSlice';
import { useDispatch } from 'react-redux';
firebase.initializeApp(firebaseConfig);


const Login = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const { from } = location.state || { from: { pathname: "/" } };
    const [user, setUser] = useState({});
    const [loading, setLoading ] = useState(false);




  // login with google account
  const handleGoogleLogin = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const user = result.user;
        const loggedUser = { name: user.displayName, email:user.email, photo: user.photoURL }
        // dispatch loggedin user 
        dispatch(getLoginUser(loggedUser))
        // history.replace(from);
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
      // dispatch loggedin user 
      dispatch(getLoginUser(loggedUser))
        // redirect to hom page
        setTimeout(()=>{
          navigate.replace(from);
        }, 1100)
  
      });
  }

  // login with email and password
  const handleInput = (e) => {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch("http://localhost:5000/api/v1/users/login",{
      method:"post",
      headers:{'content-type':'application/json'},
       credentials: 'include',
      body:JSON.stringify(user)
  });

  const {success, message, userData} =await response.json();
  if(success){
      if(success || success ){
        setLoading(false);
      }
       // dispatch loggedin user 
       dispatch(getLoginUser({isLogin:true, user:userData}))
      // show toast notification for add prodcut to cart
   toast.success(message, {position: "top-center",autoClose: 1000,});
  // redirect user to home page
setTimeout(()=>{
  navigate("/");
}, 1100)



  }else{
  toast.error(`${message}!`, {position: "top-center",autoClose: 1000,});
  setLoading(false); 
  }
}

  return (
    <Fragment>
      <HeaderTop/>
        <Header/>
       {!loading?
        <div className="login">
          <div className="container">
            <div className="loginBox">
              <h3>Login</h3>
              <div className="inputBox">
                <form onSubmit={handleSubmit}>
                  <input type="email" name="email" onChange={handleInput} placeholder="Email" required /> <br />
                  <input type="password" name="password" onChange={handleInput} placeholder="Password" /> <br />
                  <button className="loginBtn">
                    <FontAwesomeIcon icon={faUser} /><span>Login Now</span></button>
                  <div className="forgot-password">
                  <Link to="/password/forgot">
                    <span>Forgot Passwrod?</span>
                  </Link>
                  </div>
                </form>
              </div>
              <div className="loginOption">
                <h4>Login Up With</h4>
                <button onClick={handleFacebookLogin} className="facebook"><FontAwesomeIcon icon={faFacebookSquare} /> Facebook</button>
                <button onClick={handleGoogleLogin} className="google"><FontAwesomeIcon icon={faGoogle} /> Google</button>
                <Link to="/signup" className='create-account'>Don't have an Account? <span>Create now</span></Link>
              </div>
            </div>
          </div>
          <ToastContainer/>
      </div>
      :<Loader/>
    }
    </Fragment>
  );
};

export default Login;
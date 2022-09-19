import React, { useContext, useState } from 'react';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUser } from '@fortawesome/free-solid-svg-icons'
import firebase from "firebase/app";
import 'firebase/auth';
import firebaseConfig from '../../firebase/firebase.config';
import { faFacebookSquare, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { userContext } from '../../App';
firebase.initializeApp(firebaseConfig);


const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [user, setUser] = useState({
    error: ''
  });

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

  const loginWithEmail = (e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        const loggedUser = { name: user.displayName, email: user.email, photo: user.photoURL }
        setLoggedInUser(loggedUser);
        history.replace(from);

      })
      .catch((error) => {
        const errorMessage = error.message;
        const newError = { ...user };
        newError.error = errorMessage;
        setUser(newError)
      });
  }
  return (
    <div className="login">
      {user.error ? <div className="actionDisplay">
        <h5 style={{ color: 'red' }}>{user.error}</h5>
      </div> : ''}
      <div className="container">
        <div className="loginBox">
          <h3>Login</h3>
          <div className="inputBox">
            <form onSubmit={loginWithEmail}>
              <input type="email" name="email" onBlur={handleInput} placeholder="Enter E-mail" required /> <br />
              <input type="password" name="password" onBlur={handleInput} placeholder="Password" /> <br />
              <button className="loginBtn" onClick={loginWithEmail}>
                <FontAwesomeIcon icon={faUser} /><span>Login Now</span></button>
            </form>
          </div>
          <div className="loginOption">
            <h4>Sign Up With</h4>
            <button onClick={handleFacebookLogin} className="facebook"><FontAwesomeIcon icon={faFacebookSquare} /> Facebook</button>
            <button onClick={handleGoogleLogin} className="google"><FontAwesomeIcon icon={faGoogle} /> Google</button>
            <Link to="/signup">Don't have an Account? Create now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
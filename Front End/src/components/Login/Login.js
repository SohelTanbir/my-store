import React, { Fragment, useState } from "react";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase/firebase.config";

import {
  Link,
} from "react-router-dom";

import Loader from "../Loader/Loader";
import Header from "../Header/Header";
import HeaderTop from "../Header/HeaderTop";
import { getLoginUser } from "../../Store/UserSlice/UserSlice";
import { useDispatch } from "react-redux";
import { BaseUrl } from "../../config";
import { isValidEmail } from "../../utilities";
firebase.initializeApp(firebaseConfig);

const Login = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState({});

  // login with email and password
  const handleInput = (e) => {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
    if (e.target.name === "email") {
      if (!isValidEmail(user.email)) {
        setShowError({ email: "Invalid email address!" });
        return "";
      }
      setShowError({ email: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // email validation
    if (!user.email) {
      setShowError({ email: "Please enter email address!" });
      return;
    }
    setShowError({ email: "" });

    // password validation
    if (!user.password) {
      setShowError({ password: "Please enter pasword!" });
      return;
    }
    setShowError({ password: "" });
    if (user.password.length < 6) {
      setShowError({ password: "Password must be 6 digit" });
      return;
    }
    setShowError({ password: "" });
    setLoading(true);
    const response = await fetch(`${BaseUrl}/api/v1/users/login`, {
      method: "post",
      headers: { "content-type": "application/json" },
      credentials: "include",
      body: JSON.stringify(user),
    });
    const { success, message, userData } = await response.json();
    if (success || success) {
      setLoading(false);
    }
    if (success) {
      toast.success(message, { position: "top-center", autoClose: 1000 });
      // dispatch loggedin user
      dispatch(getLoginUser({ isLogin: true, user: userData }));
    } else {
      setLoading(false);
      toast.error(`${message}`, { position: "top-center", autoClose: 1000 });

    }
  };

  return (
    <Fragment>
      <HeaderTop />
      <Header />
      {!loading ? (
        <div className="login">
          <div className="container">
            <div className="loginBox">
              <h3>Login</h3>
              <div className="inputBox">
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    name="email"
                    onChange={handleInput}
                    placeholder="Email"
                  />{" "}
                  <br />
                  {showError.email && (
                    <p className="text-danger fw-bold p-2 fs-5 text-start">
                      {showError.email}
                    </p>
                  )}
                  <input
                    type="password"
                    name="password"
                    onChange={handleInput}
                    placeholder="Password"
                  />{" "}
                  <br />
                  {showError.password && (
                    <p className="text-danger fw-bold p-2 fs-5 text-start">
                      {showError.password}
                    </p>
                  )}
                  <button className="loginBtn">
                    <FontAwesomeIcon icon={faUser} />
                    <span>Login Now</span>
                  </button>
                  <div className="forgot-password">
                    <Link to="/password/forgot">
                      <span>Forgot Passwrod?</span>
                    </Link>
                  </div>
                </form>
              </div>
              <div className="loginOption">
                <Link to="/signup" className="create-account">
                  Don't have an Account? <span>Create now</span>
                </Link>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
      ) : (
        <Loader />
      )}
    </Fragment>
  );
};

export default Login;

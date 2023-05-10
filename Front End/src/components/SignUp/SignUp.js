import React, { Fragment, useState } from 'react';
import './SignUp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUpload, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import firebase from "firebase/app";
import 'firebase/auth';
import Loader from '../Loader/Loader';
import Header from '../Header/Header'
import HeaderTop from '../Header/HeaderTop';
import { isValidEmail } from '../../utilities';


const SignUp = ()=>{
    const navigate = useNavigate();
    const [user, setUser ] = useState({});
    const [file, setFile ] = useState("");
    const [previewImageUrl, setPreviewImageUrl ] = useState("");
    const [loader, setLoader] = useState(false);
    const [showError, setShowError ] = useState({});




    const handleChange = (e)=> {
        const newUser = {...user};
        newUser[e.target.name] = e.target.value;
        if(e.target.name =='name'){
          if(!user.name.length){
             setShowError({name:"Please Enter Your Name!"});
             return ""
          } 
          setShowError({name:""}) ;     
        }
        // check email validation
      if(e.target.name =='email'){
        if(! isValidEmail(user.email)){
            setShowError({email:"Invalid email address!"})
            return ""
           }
           setShowError({email:""});
      }
        const files = e.target.files &&  e.target.files[0]
        let reader = new FileReader();
        reader.onloadend = ()=>{
            setFile(files)
            setPreviewImageUrl(reader.result);
        }
        // read image file
        files && reader.readAsDataURL(files);
    }

    // submit form data and create account
    const  submitForm = async (e)=>{
        e.preventDefault();
        const formData =  new FormData();
        formData.append("image", file);
        formData.set("name", user.name);
        formData.set("email", user.email);
        formData.set("password", user.password);
        setLoader(true);
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        if(user){
            const NewSuccess = {...user};
            NewSuccess.success = true;
            setUser(NewSuccess);
            setLoader(false);
        } else{
            setLoader(false);
            console.log("something wen wrong!")
        }
    })
    .catch((error) => {
        setLoader(false);
        const errorMessage = error.message;
        const NewError = {...user};
        NewError.error = errorMessage;
        setUser(NewError);
    });

    const response =  await fetch("http://localhost:5000/api/v1/users/signup",{
        method:"post",
        body:formData
    });
    if(response.ok){
        setLoader(false);
        const {message} = JSON.parse(await response.text());
        // show toast notification for add prodcut to cart
    toast.success(`${message}!`, {position: "top-center",autoClose: 1500,});
      // redirect user to home page
  setTimeout(() => {
    navigate("/login"); 
  },2000); 
    }else{
        setLoader(false);
     const {message} = JSON.parse(await response.text());
    toast.error(`${message}!`, {position: "top-center",autoClose: 1500,}) 
    }
}
    return(
       <Fragment>
        <HeaderTop/>
            <Header/>
            <div className="SignUp">
                <div className="container">
                {loader&& 
                <Loader color="#dfb839" />}
                    <div className="SignUpBox">
                        <h3>Sign Up</h3>
                        <div className="inputBox">
                        <form onSubmit={submitForm}>
                        <input type="text" name="name" onChange={handleChange} placeholder="Name" /> <br />
                        {showError.name && <p className="text-danger fw-bold p-2 fs-5 text-start">{showError.name}</p>}

                            <input type="email" name="email"  onChange={handleChange} placeholder="Email"  /> <br />
                            {showError.email && <p className="text-danger fw-bold p-2 fs-5 text-start">{showError.email}</p>}

                            <input type="password" name="password" onChange={handleChange} placeholder="Password" /> <br />
                            {showError.name && <p className="text-danger fw-bold p-2 fs-5 text-start">{showError.name}</p>}

                            <div className="d-flex mb-3 align-items-center justify-content-between mt-">
                                    <div className="col-3">
                                        <div className="preview-photo">
                                            <img src={previewImageUrl?previewImageUrl:'/user/user.png'} alt="user" />
                                        </div>
                                    </div>
                                    <div className="col-9">
                                    <input type="file" name="avatar" onChange={handleChange} placeholder="photo"/> <br />
                                    <labe className="file_input_label">
                                    <FontAwesomeIcon icon={faUpload} />
                                        <span className='ms-2'>Upload photo</span>
                                    </labe>
                                    </div>
                            </div>
                            <button className="signupBtn mt-3">
                            <FontAwesomeIcon icon={faUser} /><span>Create Account</span></button>
                        </form>
                        </div>
                        <div className="loginOption">
                        <Link to="/login">Have an Account? <span>Login here</span></Link>
                        </div>
                    </div>
                </div>
                <ToastContainer />
        </div>
       </Fragment>
    )
}

export default SignUp;
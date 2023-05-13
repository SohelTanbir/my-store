import React, { Fragment, useState } from 'react';
import './ForgotPassword.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../Loader/Loader';
import Header from '../Header/Header'


const ForgotPassword = () => {
    const [email, setEmaqil ] = useState("");
    const [loader, setLoader] =  useState(false);

    const handleChange = (e)=>{
        setEmaqil(e.target.value);
    }
    // submit email and get the reset password url
    const handleSubmit = async e =>{
        setLoader(true);
        e.preventDefault();
       if(email.length > 0){
        const response = await  fetch("http://localhost:5000/api/v1/users/password/forgot",{
            method:'post',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({email})
    })
    const { success, message} = await response.json();
    if(success){
        setLoader(false);
        toast.success(message,{position: "top-center",autoClose: 1000});
    }else{
        setLoader(false);
        toast.error(message,{position: "top-center",autoClose: 1000});
    }
       }else{
        toast.error("All field required!",{position: "top-center",autoClose: 1000});
        setTimeout(()=>   setLoader(false), 500)
       }
    }

    return (
        <Fragment>
                <Header/>
                <div className='reset-password'>
                <div className="container">
                    <ToastContainer />
                    {loader&& <Loader/>}
                    <div className="reset-password-form">
                        <h4>Forgot Password?</h4>
                        <p>Please Enter your email, we will send a link to reset your password</p>
                        <form onSubmit={handleSubmit}>
                            <input type="text" onChange={handleChange} placeholder='Enter your email '    /> <br />
                            <button className='reset-password-btn'>Reset link</button>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ForgotPassword;
import React from 'react';
import './ResetPassword.css'

const ResetPassword = () => {
    return (
        <div className='reset-password'>
            <div className="container">
                <div className="reset-password-form">
                    <h4>Forgot Password?</h4>
                    <p>Please Enter your email, we will send a link to reset your password</p>
                    <form>
                        <input type="text" placeholder='Enter your email or phone number'/> <br />
                        <button className='reset-password-btn'>Send link</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
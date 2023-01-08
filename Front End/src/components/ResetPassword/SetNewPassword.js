import React from 'react';
import './SetNewPassword.css';



const SetNewPassword = () => {
    return (
        <div className='set-new-password'>
            <div className="container">
                <div className="set-news-passowrd-form">
                    <h4>Welcome!</h4>
                    <p>You are ready to set new password.</p>
                    <form>
                        <input type="password" placeholder='New password'/> <br />
                        <input type="password" placeholder='Confirm password'/> <br />
                        <button className='set-password-btn'>Save Change</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SetNewPassword;
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [message, setMessage] = useState({});
       // handle change
       const handleChange = (e)=>{
        const newMessage  ={...message}
        newMessage[e.target.name] = e.target.value;
        setMessage(newMessage)
    }
    
    // handle add product
    const handleSubmit = (e)=>{
        e.preventDefault();
    }
   

    return (
        <div className='contact'>
              <div className="container">
                <div className="contact-box">
                    <h4>How can we help you?</h4>
                    <form onSubmit={handleSubmit}>
                       <div className="w-50">
                       <input type="text" name='name'  onBlur={handleChange} placeholder='Name'/> <br />
                        <input type="email" name='email'  onBlur={handleChange} placeholder='Email'/> <br />
                       </div>
                        <input type="text" name='subject'  onBlur={handleChange} placeholder='Subject'/> <br />
                        <textarea name="message" onBlur={handleChange} placeholder='Message'></textarea>
                        <button>Send message</button>
                    </form>
                </div>
              </div>
        </div>
    );
};

export default Contact;
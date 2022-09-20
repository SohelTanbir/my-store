import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='contact'>
              <div className="container">
                <div className="contact-box">
                    <h4>How can we help you?</h4>
                    <form>
                       <div className="w-50">
                       <input type="text" placeholder='Name'/> <br />
                        <input type="email" placeholder='Email'/> <br />
                       </div>
                        <input type="text" placeholder='Subject'/> <br />
                        <textarea name="message" placeholder='Message'></textarea>
                        <button>Send message</button>
                    </form>
                </div>
              </div>
        </div>
    );
};

export default Contact;
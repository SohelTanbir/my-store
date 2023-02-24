import React, { Fragment, useEffect, useState } from 'react';
import './Contact.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../Loader/Loader';
import Header from '../Header/Header';
import HeaderTop from '../Header/HeaderTop';

const Contact = () => {
    const [message, setMessage] = useState({
        name:"",
        email:"",
        subject:"",
        message:""
    });
    const [loader, setLoader] =  useState(false)
       // handle change
       const handleChange = (e)=>{
        const newMessage  ={...message}
        newMessage[e.target.name] = e.target.value;
        setMessage(newMessage)
    }
    
    // handle add product
    const handleSubmit = async(e)=>{
        setLoader(true)
        e.preventDefault();
        if(message.name && message.email&& message.subject && message.message){
          const response = await  fetch("http://localhost:5000/api/v1/message/create",{
                method:'post',
                headers:{'content-type':'application/json'},
                body:JSON.stringify(message)
        })
        const { success} = await response.json();
        if(success){
            setLoader(false);
            setMessage({name:"",
            email:"",
            subject:"",
            message:""});
            toast.success("Thanks! your messaged recoreded!",{position: "top-center",autoClose: 1000});
        }else{
            setLoader(false);
            toast.error("Message send Failed!",{position: "top-center",autoClose: 1000});
        }
        }else{
            setLoader(false);
            toast.error("All field required!",{position: "top-center",autoClose: 1000});
        }
    }

    return (
        <Fragment>
            <HeaderTop/>
            <Header/>
            <div className='contact'>
            <ToastContainer />
            {loader&& <Loader/>}
              <div className="container">
                <div className="contact-box">
                    <h4>How can we help you?</h4>
                    <form onSubmit={handleSubmit}>
                       <div className="row">
                        <div className=" col-md-6">
                            <input type="text" name='name'  onChange={handleChange} placeholder='Name' value={message.name} /> <br />

                        </div>
                        <div className="col-md-6">
                        <input type="email" name='email'  onChange={handleChange} placeholder='Email' value={message.email} /> <br />
                        </div>
                        
                       </div>
                        <input type="text" name='subject'  onChange={handleChange} placeholder='Subject' value={message.subject}/> <br />
                        <textarea name="message" onChange={handleChange} placeholder='Message' value={message.message}></textarea>
                        <button>Send message</button>
                    </form>
                </div>
              </div>
        </div>
        </Fragment>
    );
};

export default Contact;
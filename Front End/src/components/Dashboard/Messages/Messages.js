import React, { useEffect, useState } from 'react';
import './Messages.css'
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import SideBar from '../SideBar/SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from '../../Loader/Loader'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';


const Messages = () => {
    const [Messages, setMessages ] = useState([]);
   


    const loadUsers = async()=>{
        const res =  await fetch("http://localhost:5000/api/v1/message/all");
        const {success, messages} = await res.json();
        setMessages(messages);
    }

    //  handle side effect actions
    useEffect(()=>{
        loadUsers();
    },[Messages])

    // handle modal close or Show
    const handleModal = ()=>{
      
    }

    const deleteMessage = async(id)=>{
        const response = await fetch(`http://localhost:5000/api/v1/message/delete/${id}`,{
            method:"DELETE"
        })
        const {success, message } = await response.json();
        if(success){
            toast.success(message,{position: "top-center",autoClose: 1000});
        }else{
            toast.error(message,{position: "top-center",autoClose: 1000});
        }
    }




    return (
        <div className="all-orders">
        
            <ToastContainer/>
            <DashboardHeader/>
            <div className="dashboard-main">
            <SideBar/>
            <div className="message-main">
                    <div className="message-header">
                    <h2>All Messages({Messages.length?Messages.length:0})</h2>
                    </div>
                    <div className="row">
                        <div className="message-container">
                            <div className="message-table">
                                {Messages.length?    <table>
                                    <tr>
                                        <th>User Name</th>
                                        <th>Email</th>
                                        <th>Subject</th>
                                        <th>Message</th>
                                        <th>CreatedAt</th>
                                        <th>Action</th>
                                    </tr>
                                    {Messages.map(message =>(
                                        <tr>
                                                  <td>{message.name}</td>
                                                  <td>{message.email}</td>
                                                  <td>{message.subject}</td>
                                                  <td>{message.message}</td>
                                                  <td>{message.createdAt}</td>
                                                  <td>
                                                  <Link to="/users/update"><button className='action-btn edit-btn'><FontAwesomeIcon title='Edit' icon={faEdit }  /> ||</button></Link>
                                                  <button className='action-btn delete-btn' onClick={()=> deleteMessage(message._id)}><FontAwesomeIcon title='Delete ' icon={faTrash }/></button>
                                                  </td>
                                    </tr>
                                    ))}
                                </table>
                                :<Loader/>
                                }
                            </div>
                        </div>
                      
                    </div>
            </div>
            </div>
        </div>
    );
};

export default Messages;
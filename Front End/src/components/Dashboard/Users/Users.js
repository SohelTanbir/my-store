import React, { useEffect, useState } from 'react';
import './Users.css'
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import SideBar from '../SideBar/SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from '../../Loader/Loader'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import NotFoundMessage  from '../../NotFoundMessage/NotFoundMessage';

const Users = () => {
    const [allUsers, setAllUsers ] = useState([]);
    const [error, setError ] = useState("");
    const [loading , setLoading ] = useState(true);


    const loadUsers = async()=>{
        const res =  await fetch("http://localhost:5000/api/v1/users/all");
        const {success, users, error} = await res.json();
        // off loader
        if(success || !success){
            setLoading(false);
        }
        setAllUsers([]);
        setError(error)
    }


    //  handle side effect actions
    useEffect(()=>{
        loadUsers();
    },[allUsers])

    // handle modal close or Show
    const handleModal = ()=>{
      
    }

    // handle change input data
    const handleChange = e =>{
       
    }

    // store category in db
    const handleSubmit = e =>{
        e.preventDefault();
    }

    const deleteUser = async(id)=>{
        const response = await fetch(`http://localhost:5000/api/v1/users/delete/${id}`,{
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
            <div className="users-main">
                    <div className="users-header">
                    <h2>All users({allUsers.length?allUsers.length:0})</h2>
                    <button onClick={handleModal}>Add user</button>
                    </div>
                    <div className="row">
                        <div className="users-container">
                           {!loading? <div className="users-table">
                                {allUsers.length?
                                <table>
                                    <tr>
                                        <th>Name</th>
                                        <th>Photo</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>CreatedAt</th>
                                        <th>Created  By</th>
                                        <th>Action</th>
                                    </tr>
                                    {allUsers.map(user =>(
                                        <tr>
                                        <td>{user.name}</td>
                                        <td><img src={user.avater} alt="No Photos" /></td>
                                        <td>{user.email}</td>
                                        <td>{user.role}</td>
                                        <td>{user.createdAt.toLocalTimeString}</td>
                                        <td>Sohel Rana</td>
                                        <td>
                                            <Link to="/users/update"><button className='action-btn edit-btn'><FontAwesomeIcon title='Edit' icon={faEdit }  /> ||</button></Link>
                                            <button className='action-btn delete-btn' onClick={()=> deleteUser(user._id)}><FontAwesomeIcon title='Delete ' icon={faTrash }/></button>
                                        </td>
                                    </tr>
                                    ))}
                                </table>
                                :
                                <NotFoundMessage message='There is no users exist!'/>
                            }
                              
                            </div>
                            :<Loader/>    
                            }
                        </div>
                      
                    </div>
            </div>
            </div>
        </div>
    );
};

export default Users;
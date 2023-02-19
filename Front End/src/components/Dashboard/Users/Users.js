import React, { useEffect, useState } from 'react';
import './Users.css'
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import SideBar from '../SideBar/SideBar';

import Loader from '../../Loader/Loader'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Users = () => {
    const [allUsers, setAllUsers ] = useState([]);
   


    const loadUsers = async()=>{
        const res =  await fetch("http://localhost:5000/api/v1/users/all");
        const {users} = await res.json();
        setAllUsers(users)
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

    const deleteProduct = async(id)=>{
        const response = await fetch(`http://localhost:5000/api/v1/category/delete/${id}`,{
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
            <div className="category-main">
                    <div className="category-header">
                    <h2>All users(0)</h2>
                    <button onClick={handleModal}>Add user</button>
                    </div>
                    <div className="row">
                      
                      
                    </div>
            </div>
            </div>
        </div>
    );
};

export default Users;
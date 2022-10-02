import React, { useState } from 'react';
import './MakeAdmin.css'
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import SideBar from '../SideBar/SideBar';

const MakeAdmin = () => {
    const [admin, setAdmin] = useState({});

    
    // handle change
    const handleChange = (e)=>{
        const newAdmin  ={...admin}
        newAdmin[e.target.name] = e.target.value;
        setAdmin(newAdmin)
    }
    
    // handle add product
    const handleSubmit = (e)=>{
        console.log(admin)
        e.preventDefault();
    }


    return (
        <div className="update-product">
            <DashboardHeader/>
            <div className="dashboard-main">
            <SideBar></SideBar>
                <div className="main-part product-update-form">
                   <h2>Make New Admin</h2>
                   <form onSubmit={handleSubmit}>
                   <input type="email"  onBlur={handleChange} name="email" placeholder="Enter email to make new admin" />
                    <button className='submit-btn'>Add Admin</button>
                   </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;
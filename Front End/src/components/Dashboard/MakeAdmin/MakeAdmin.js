import React, { useState } from 'react';
import './MakeAdmin.css'
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import SideBar from '../SideBar/SideBar';

const MakeAdmin = () => {
    const [product, setProduct] = useState({});

    
    // handle change
    const handleChange = (e)=>{
        const newProduct  ={...product}
        newProduct[e.target.name] = e.target.value;
        setProduct(newProduct)
    }
    
    // handle add product
    const handleSubmit = (e)=>{
        
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
                       <button className='submit-btn' type="submit">Add Admin</button>
                   </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;
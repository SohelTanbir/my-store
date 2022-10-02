import React, { useState } from 'react';
import './UpdateOrder.css'
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import SideBar from '../SideBar/SideBar';
import monitor from '../../../images/products/monitor.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const UpdateOrder = () => {

    const deleteProduct = ()=>{
        alert('deleted');
    }


    return (
        <div className="update-order">
            <DashboardHeader/>
            <div className="dashboard-main">
            <SideBar/>
            <div className="update-order-main">
                <h2>Update Order Status</h2>
                <div className="update-orders-container">
                    <div className="row"></div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default UpdateOrder;
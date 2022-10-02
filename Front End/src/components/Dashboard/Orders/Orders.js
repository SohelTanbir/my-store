import React, { useState } from 'react';
import './Orders.css'
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import SideBar from '../SideBar/SideBar';
import monitor from '../../../images/products/monitor.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Orders = () => {

    const deleteProduct = ()=>{
        alert('deleted');
    }


    return (
        <div className="all-orders">
            <DashboardHeader/>
            <div className="dashboard-main">
            <SideBar/>
            <div className="orders-main">
                <h2>All Orders(10)</h2>
                <div className="orders-container">
                    <table>
                        <tr>
                            <th>Order ID</th>
                            <th>Status</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td>#d1d1d1d1d1</td>
                            <td>Processing</td>
                            <td>1</td>
                            <td><span>৳ </span> 150</td>
                            <td>
                                <Link to="/orders/update"><button className='action-btn edit-btn'><FontAwesomeIcon title='Edit' icon={faEdit }  /> ||</button></Link>
                                <button className='action-btn delete-btn' onClick={deleteProduct}><FontAwesomeIcon title='Delete ' icon={faTrash }/></button>
                            </td>
                        </tr>
                        <tr>
                            <td>#d1d1d1d1d1</td>
                            <td>Processing</td>
                            <td>1</td>
                            <td><span>৳ </span> 150</td>
                            <td>
                                <Link to="/orders/update"><button className='action-btn edit-btn'><FontAwesomeIcon title='Edit' icon={faEdit }  /> ||</button></Link>
                                <button className='action-btn delete-btn' onClick={deleteProduct}><FontAwesomeIcon title='Delete ' icon={faTrash }/></button>
                            </td>
                        </tr>
                        <tr>
                            <td>#d1d1d1d1d1</td>
                            <td>Processing</td>
                            <td>1</td>
                            <td><span>৳ </span> 150</td>
                            <td>
                                <Link to="/orders/update"><button className='action-btn edit-btn'><FontAwesomeIcon title='Edit' icon={faEdit }  /> ||</button></Link>
                                <button className='action-btn delete-btn' onClick={deleteProduct}><FontAwesomeIcon title='Delete ' icon={faTrash }/></button>
                            </td>
                        </tr>

                    </table>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Orders;
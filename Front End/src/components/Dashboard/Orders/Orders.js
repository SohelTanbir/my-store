import React, { useEffect, useState } from 'react';
import './Orders.css'
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import SideBar from '../SideBar/SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Loader from '../../Loader/Loader'


const Orders = () => {
    const [orderItems, setOrderItems ] = useState([]);


    const loadOrdersFromDB = async()=>{
        const res =  await fetch("http://localhost:5000/api/v1/orders/all");
        const {success,  orders} = await res.json();
        setOrderItems(orders)
    }

    //  handle side effect actions
    useEffect(()=>{
        loadOrdersFromDB();
    },[])

    const deleteProduct = ()=>{
        alert('deleted');
    }

console.log(orderItems);




    return (
        <div className="all-orders">
            <DashboardHeader/>
            <div className="dashboard-main">
            <SideBar/>
          {orderItems.length ? <div className="orders-main">
                <h2>All Orders({orderItems.length?orderItems.length: 0})</h2>
                <div className="orders-container">
                    <table>
                        <tr>
                            <th>Order ID</th>
                            <th>Name</th>
                            <th>Photo</th>
                            <th>Status</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                        {orderItems.map( (order, index) => (
                            <tr>
                            <td>#{order._id}</td>
                            <td>{order.productInfo[1].name}</td>
                            <td><img src={order.productInfo[1].image} alt="product" /></td>
                            <td>Processing</td>
                            <td>1</td>
                            <td><span>৳ </span> 150</td>
                            <td>
                                <Link to="/orders/status/update"><button className='action-btn edit-btn'><FontAwesomeIcon title='Edit' icon={faEdit }  /> ||</button></Link>
                                <button className='action-btn delete-btn' onClick={deleteProduct}><FontAwesomeIcon title='Delete ' icon={faTrash }/></button>
                            </td>
                        </tr>
                        ))}

                    </table>
                </div>
            </div>
            :<Loader/>
            }
            </div>
        </div>
    );
};

export default Orders;
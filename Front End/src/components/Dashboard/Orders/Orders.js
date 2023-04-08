import React, { useEffect, useState } from 'react';
import './Orders.css'
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import SideBar from '../SideBar/SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Loader from '../../Loader/Loader'
import axios  from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFoundMessage from '../../NotFoundMessage/NotFoundMessage';
import Alert from 'sweetalert2'



const Orders = () => {
    const [orderItems, setOrderItems ] = useState([]);
  const [loading, setLoading ] =  useState(true);
    const loadOrdersFromDB = async()=>{
        const res =  await fetch("http://localhost:5000/api/v1/orders/all");
        const {success, orders} = await res.json();
        if(success || !success){
            setLoading(false);
        }
        setOrderItems(orders)
    }

    //  handle side effect actions
    useEffect(()=>{
        loadOrdersFromDB();
    },[])

    const deleteProduct =async (orderId)=>{
        const {isConfirmed} = await   Alert.fire({
            title: 'Are you sure want to delete ?',
            text: "You won't be able to revert the product!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
          });
          if (isConfirmed) {
            setLoading(true);
            const res = await axios.delete(`http://localhost:5000/api/v1/orders/delete/${orderId}`,{
                withCredentials:'include'
            });
            const {success, message } = res.data;
            if(success){
                setLoading(false);
                Alert.fire(
                    message,
                    'Order has been deleted!.',
                    'success'
                  ) 
            }else{
                Alert.fire({
                    icon: 'error',
                    title: message,
                  })
            } 
            }
    }


    

    return (
        <div className="all-orders">
               <ToastContainer/>
            <DashboardHeader/>
            <div className="dashboard-main">
            <SideBar/>
        
          <div className="orders-main">
                <h2>All Orders({orderItems?orderItems.length: 0})</h2>
                {!loading ? 
                <div className="orders-container">
                 {orderItems?
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
                        {orderItems&& orderItems.map( (order, index) => (
                            <tr>
                            <td>#{order._id}</td>
                            <td>{order.productInfo[0]?.name}</td>
                            <td><img src={order.productInfo[0]?.image} alt="product" /></td>
                            <td>{order.orderStatus}</td>
                            <td>1</td>
                            <td><span>৳ </span>{order.totalPrice}</td>
                            <td>
                                <Link to="/orders/status/update"><button className='action-btn edit-btn'><FontAwesomeIcon title='Edit' icon={faEdit }  /> ||</button></Link>
                                <button className='action-btn delete-btn' onClick={()=>deleteProduct(order._id)}><FontAwesomeIcon title='Delete ' icon={faTrash }/></button>
                            </td>
                        </tr>
                        ))
                        }  
                    </table>
                    :
                    <NotFoundMessage message='There is no orders found!'/>
                    }
                 
                </div>
                  :<Loader/>
                }
            </div>
          
            </div>
        </div>
    );
};

export default Orders;
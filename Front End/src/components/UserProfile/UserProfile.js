import React, { Fragment, useContext, useEffect, useState } from 'react';
import './UserProfile.css'
import profilePhoto from '../../images/users/sohelrana.jpg'
import Loader from '../Loader/Loader';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import HeaderTop from '../Header/HeaderTop';
import {resetLogggedinUser } from '../../Store/UserSlice/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import NotFoundMessage from '../NotFoundMessage/NotFoundMessage';



const UserProfile = () => {
    const [loading, setLoading ] = useState(true);
    const dispatch = useDispatch();
    const [myOrders, setMyOrders] = useState([]);
    const navigate = useNavigate();
    const {user} = useSelector(state => state.user);
    // fatch my orders from db
    const loadMyOrders = async ()=>{
        const response =  await  fetch("http://localhost:5000/api/v1/orders/me",{
            credentials:'include',
        })
        const {success, orders} = await response.json();
        // off laoader 
        if(success || !success){
            setLoading(false);
        }
        setMyOrders(orders)
    }
    useEffect(()=>{
        loadMyOrders();
    }, [])
    // product name modify
    const productName = (name)=>{
        if(JSON.stringify(name).length >30){
                return JSON.stringify(name).slice(0,30) + "...";
        }else{
            return name
        }
    }



// handle Log out user
const handleLogOut = async () =>{
    const response = await fetch("http://localhost:5000/api/v1/users/logout",{
        credentials:'include'
    });
    const {success, message } = await response.json();
    if(success){
        toast.success(message,{position: "top-center",autoClose: 1000});

        // redirect to home page
        setTimeout(()=>{
            dispatch(resetLogggedinUser());
            navigate("/login")
        }, 1500)
    }else{
        toast.error(message,{position: "top-center",autoClose: 1000});
    }
}


    return (
        <Fragment>
            <HeaderTop/>
            <Header/>
            
        <div className='user-profile'>
            {!loading ?
            <div className="container">
            <ToastContainer />
            <div className="row">
                <div className="user-info">
                    <div className="profile-photo">
                        <img src={user?.image?user.image: '/user/user.png'} alt="profile" />
                    </div>
                    <h3 className='user-name'>{user?.name}</h3>
                    <p> <span>Email: </span>{user?.email}</p>
                    <p> <span>Phone: </span> 01774000000</p>
                    <p> <span>Address: </span> Dinajpur</p>
                    <button onClick={handleLogOut} className="logout-btn">Log out</button>
                </div>
                <div className="orders-info">
                    <h4>My Orders ({myOrders.length?myOrders.length:0})</h4>
                    {myOrders?.length? 
                    <div className="my-orders-table">
                        <table>
                            <tr>
                                <th>ID</th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Price </th>
                                <th>Status</th>
                            </tr>
                            
                          {   myOrders.map(product  =>
                                <tr>
                                    <td>{product._id}</td>
                                    <td><img src={product.productInfo[0].image} alt="product" /></td>
                                    <td>{productName(product.productInfo[0].name)}</td>
                                    <td><span className='taka-sign'>৳ </span> {product.totalPrice}</td>
                                    <td>{product.orderStatus}</td>
                                </tr>
                                )}
                          
                        </table>
                    </div>
                      :
                      <NotFoundMessage message="You don't have any orders!"/>
                      }
                </div>
                </div>
            </div>:<Loader/>}
        </div>
        </Fragment>
    );
};

export default UserProfile;
import React, { useContext, useEffect, useState } from 'react';
import './UserProfile.css'
import profilePhoto from '../../images/users/sohelrana.jpg'
import Loader from '../Loader/Loader';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../App';



const UserProfile = () => {
    const {userData} = useContext(userContext);
    const [loggedInUser, setLoggedInUser] = userData;
    const [myOrders, setMyOrders] = useState([]);
    const navigate = useNavigate();
    // fatch my orders from db
    useEffect(  ()=>{
        fetch("http://localhost:5000/api/v1/orders/all")
        .then(res => res.json())
        .then(data => setMyOrders(data.Orders))
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
    const response = await fetch("http://localhost:5000/api/v1/users/logout");
    const {success, message } = await response.json();
    if(success){
        toast.success(message,{position: "top-center",autoClose: 1000});
        // reset user login data
        setLoggedInUser({});
        // redirect to home page
        setTimeout(()=>navigate("/login"), 2000)
    }else{

    }
}


    return (
    
        <div className='user-profile'>
            {myOrders?.length?<div className="container">
            <ToastContainer />
            <div className="row">
                <div className="user-info">
                    <div className="profile-photo">
                        <img src={profilePhoto} alt="profile" />
                    </div>
                    <h3 className='user-name'>Sohel Rana</h3>
                    <p> <span>Email: </span> sohelrana@gmail.com</p>
                    <p> <span>Phone: </span> 01774000000</p>
                    <p> <span>Address: </span> Dinajpur</p>
                    <button onClick={handleLogOut} className="logout-btn">Log out</button>
                </div>
                <div className="orders-info">
                    <h4>My Orders ({myOrders.length?myOrders.length:0})</h4>
                    <div className="my-orders-table">
                        <table>
                            <tr>
                                <th>ID</th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Price </th>
                                <th>Status</th>
                            </tr>
                             {myOrders.map(product  =>
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
                </div>
                </div>
            </div>:<Loader/>}
        </div>
    );
};

export default UserProfile;
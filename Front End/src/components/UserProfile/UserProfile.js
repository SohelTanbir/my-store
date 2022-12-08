import React, { useEffect, useState } from 'react';
import './UserProfile.css'
import FakeData from '../../FakeData/FakeData';
import profilePhoto from '../../images/users/sohelrana.jpg'

const UserProfile = () => {
    const [myOrders, setMyOrders] = useState([]);
    const product = FakeData.filter( item => item.id === 2);

    // fatch my orders from db
    useEffect(  ()=>{
        fetch("http://localhost:5000/api/v1/orders/all")
        .then(res => res.json())
        .then(data => console.log(data))
    })


    return (
        <div className='user-profile'>
            <div className="container">
                <div className="row">
                <div className="user-info">
                    <div className="profile-photo">
                        <img src={profilePhoto} alt="profile" />
                    </div>
                    <h3 className='user-name'>Sohel Rana</h3>
                    <p> <span>Email: </span> sohelrana@gmail.com</p>
                    <p> <span>Phone: </span> 01774000000</p>
                    <p> <span>Address: </span> Dinajpur</p>
                </div>
                <div className="orders-info">
                    <h4>My Orders (01)</h4>
                    <div className="single-order">
                        <img src={product[0].img} alt="product" />
                        <p>{product[0].name}</p>
                        <p><span className='taka-sign'>৳ </span> {product[0].price}</p>
                        <p className="status">Delivered</p>
                    </div>
                    <div className="single-order">
                        <img src={product[0].img} alt="product" />
                        <p>{product[0].name}</p>
                        <p><span className='taka-sign'>৳ </span> {product[0].price}</p>
                        <p className="status">Canceled</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
import React from 'react';
import './OrderStatus.css';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartPlus, faCheck, faUser } from '@fortawesome/free-solid-svg-icons'

const OrderStatus = () => {
    return (
        <div className='order-status'>
            <div className="container">
                <div className="order-status-stepper">
                <h4>Your Order Status</h4>
                <p className='order-id'>Order Id: #45s2s4s5622s12</p>
                    <div className="order-steps">
                        <div className="single-step pending active">
                            <div className="check-icon">
                                <FontAwesomeIcon icon={faCheck}  />
                            </div>
                            <div className="circle"></div>
                            <p className='step-title'>Payment Pending</p>
                        </div>
                        <div className="single-step processing">
                        <div className="check-icon">
                                <FontAwesomeIcon icon={faCheck}  />
                            </div>
                            <div className="circle"></div>
                            <p className='step-title'>Processing</p>
                        </div>
                        <div className="single-step shipped ">
                            <div className="check-icon">
                                <FontAwesomeIcon icon={faCheck}  />
                            </div>
                            <div className="circle"></div>
                            <p className='step-title'>Shipped</p>
                        </div>
                        <div className="single-step delivered">
                            <div className="check-icon">
                                <FontAwesomeIcon icon={faCheck}  />
                            </div>
                            <div className="circle"></div>
                            <p className='step-title'>Delivered</p>
                        </div>
                    </div>
                    <Link to="/my-orders">
                        <button className='btn'>View Order Page</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OrderStatus;
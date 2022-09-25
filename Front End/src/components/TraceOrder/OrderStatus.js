import React from 'react';
import './OrderStatus.css';
import { Link } from 'react-router-dom'


const OrderStatus = () => {
    return (
        <div className='order-status'>
            <div className="container">
                <div className="order-status-stepper">
                <h4>Your Order Status</h4>
                    <div className="order-steps">
                        <div className="single-step pending">
                            <div className="circle"></div>
                            <p className='step-title'>Payment Pending</p>
                        </div>
                        <div className="single-step processing">
                            <div className="circle"></div>
                            <p className='step-title'>Processing</p>
                        </div>
                        <div className="single-step shipped">
                            <div className="circle"></div>
                            <p className='step-title'>Shipped</p>
                        </div>
                        <div className="single-step delivered">
                            <div className="circle"></div>
                            <p className='step-title'>Delivered</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderStatus;
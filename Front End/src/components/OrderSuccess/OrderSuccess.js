import React from 'react';
import { Link } from 'react-router-dom';
import './OrderSuccess.css';

// 4242 4242 4242 4242

const OrderSuccess = () => {
    return (
        <div className='order-success'>
            <h2>Thank you!</h2>
            <p>Your order placed Successfully.</p>
            <button>
              <Link to="users/profile">View order</Link>
            </button>
        </div>
    );
};

export default OrderSuccess;
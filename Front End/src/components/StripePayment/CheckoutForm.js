import React, { useContext, useState } from 'react';
import './Checkout.css'

import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { userContext } from '../../App';
import { ToastContainer, toast } from 'react-toastify';
import OrderSuccess from '../OrderSuccess/OrderSuccess';

const CheckoutForm = () => {
  const [strip, setStrip] = useState(false)
  const stripe = useStripe();
  const elements = useElements();
  const {ordersInfo } = useContext(userContext);
  const [order, setOrder] = ordersInfo;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      toast.error(error.message, {position: "bottom-right",autoClose: 1000})
    } else {
      const paymentInfo = {id:paymentMethod.id,type: paymentMethod.type}
      setStrip(true);
      const newOrder = {...order, paymentInfo};
      setOrder(newOrder);
      console.log(order);
     toast.success("Order placed successfully", {position: "bottom-right",autoClose: 1000})
    }
  };


  return (
   <div className='stripe-payment'>
       <ToastContainer />
        {
          strip?<OrderSuccess/>:
          <form onSubmit={handleSubmit} style={{padding:'2rem 0', width:'70%', margin:'auto'}}>
          <CardElement />
          <div className="order-btn">
            <button className='pay-btn' type="submit" disabled={!stripe}>
              Place Order
            </button>
          </div>
        </form>
        }
   </div>
  );
};


export default CheckoutForm;
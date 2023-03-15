import React, {  useState } from 'react';
import './Checkout.css'

import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { ToastContainer, toast } from 'react-toastify';
import OrderSuccess from '../OrderSuccess/OrderSuccess';
import { getPaymentInfo, resetOrdersInfo } from '../../Store/OrderSlice/OrderSlice';
import { useDispatch, useSelector } from 'react-redux';



const CheckoutForm = () => {
  const dispatch = useDispatch();
  const [strip, setStrip] = useState(false)
  const stripe = useStripe();
  const elements = useElements();
const order=  useSelector(state =>state.newOrder.orders);


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
      toast.error(error.message, {position: "top-center",autoClose: 1000})
    } else {
      const paymentInfo = {id:paymentMethod.id,type: paymentMethod.type};
      paymentInfo.status = 'success';
      dispatch(getPaymentInfo(paymentInfo))
       if(paymentInfo){
         // create new order
        const orderResponse = await fetch("http://localhost:5000/api/v1/orders/create", {
          method: 'post',
          headers: { 'content-type': 'application/json' },
          body:JSON.stringify(order)
        });
        const {error} =await orderResponse.json();
        if(!error){
          setStrip(true);
          toast.success("Order placed successfully", {position: "bottom-right",autoClose: 1000});
          // reset order info state
          dispatch(resetOrdersInfo());
        }else{
          toast.error(error, {position: "bottom-right",autoClose: 1000})
        }
       }
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
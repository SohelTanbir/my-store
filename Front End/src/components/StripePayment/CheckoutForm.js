import React, { useContext } from 'react';

import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { userContext } from '../../App';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [payment, setPayment] = useContext(userContext);
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      alert(error.message);
    } else {
      const payInfo = {...payment, id:paymentMethod.id,type: paymentMethod.type}
      setPayment(payInfo);
      alert('Payment successful!')
    }
  };

  const payBtn = {
    padding:'.7rem',
    marginTop:'2rem',
    background:'#dfb839',
    borderRadius:'.5rem'
  }
  return (
    <form onSubmit={handleSubmit} style={{padding:'2rem 0', width:'70%', margin:'auto'}}>
      <CardElement />
      <button style={payBtn} type="submit" disabled={!stripe}>
        Proceed Payment
      </button>
    </form>
  );
};


export default CheckoutForm;
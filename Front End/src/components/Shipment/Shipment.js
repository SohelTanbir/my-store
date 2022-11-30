import React, { useState } from 'react';
import StripePayment from '../StripePayment/StripePayment';
import './Shipment.css';

const Shipment = () => {
    const [shiping, setShiping] =  useState(false);

// handle submit shiping data
const handleShipping = (e)=>{
    e.preventDefault();
    setShiping(true);
}

    return (
       <div>
            {shiping? <StripePayment/>
            :<div className="shiping-form">
                    <h3>Shipping addresse</h3>
                    <div className="shipingForm">
                        <form onSubmit={handleShipping}>
                          <input type="text" name="name" placeholder="Name"/> <br />
                          <input type="tell" name="phone" placeholder="Phone"/><br />
                           <input type="text" name="city"  placeholder="City"/><br />
                           <input type="text" name="location" placeholder="Address details"/><br />
                           <button>Submit</button>
                    </form>
                </div>
        </div>}
       </div>
    );
};

export default Shipment;
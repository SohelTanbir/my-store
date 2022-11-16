import React from 'react';
import './Shippment.css'

const Shippment = () => {
    return (
        <div className="shiping-form">
        <h3>Shipping addresse</h3>
        <div className="shipingForm">
           <form>
           <input type="text" name="name" placeholder="your name"/> <br />
            <input type="email" name="email"   placeholder="your email"/><br />
            <input type="text" name="location"  placeholder="Present Location"/><br />
            <input type="tell" name="phone" placeholder="Mobile number"/><br />
            <button>Place Order</button>
           </form>
        </div>
    </div>
    );
};

export default Shippment;
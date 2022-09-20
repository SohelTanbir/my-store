import React from 'react';
import './TraceOrder.css';


const TraceOrder = () => {
    return (
        <div className='trace-order'>
            <div className="container">
            <div className="trace-order-form">
            <h4>Track your Order</h4>
                <form>
                    <input type="text" placeholder='Email / Phone Number'/> <br />
                    <input type="text" placeholder='Order Id ex: 5ds5df55dada5dsf'/> <br />
                    <button className='trace-now-btn'>Trace Now</button>
                </form>
            </div>
            </div>
        </div>
    );
};

export default TraceOrder;
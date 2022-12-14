import React, { useContext, useState } from 'react';
import { userContext } from '../../App';
import StripePayment from '../StripePayment/StripePayment';
import './Shipment.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Shipment = () => {
    const [shiping, setShiping] =  useState(false);
    const {ordersInfo } = useContext(userContext);
    const [order, setOrder] = ordersInfo;
    const [shippingInfo, setShippingInfo] = useState({})

    const handleChange  = (e)=>{
       const newShippingInfo ={...shippingInfo};
       newShippingInfo[e.target.name] = e.target.value;
       setShippingInfo(newShippingInfo);
       
    }

// handle submit shiping data
const handleShipping = (e)=>{
    e.preventDefault();
   if(shippingInfo.name && shippingInfo.phone && shippingInfo.city && shippingInfo.address){
    setShiping(true);
    const newOrder = {...order, shippingInfo};
    setOrder(newOrder);
   }else{
    toast.error("All field required!",{position: "bottom-right",autoClose: 1000});
   }
}
    return (
       <div>
        <ToastContainer/>
            {shiping? <StripePayment/>
            :<div className="shiping-form">
                    <h3>Shipping addresse</h3>
                    <div className="shipingForm">
                        <form onSubmit={handleShipping}>
                          <input type="text" name="name"  onBlur={handleChange} placeholder="Name"/> <br />
                          <input type="tell" name="phone" onBlur={handleChange}  placeholder="Phone"/><br />
                           <input type="text" name="city"  onBlur={handleChange}  placeholder="City"/><br />
                           <input type="text" name="address" onBlur={handleChange}  placeholder="Address details"/><br />
                           <button>Submit</button>
                    </form>
                </div>
        </div>}
       </div>
    );
};

export default Shipment;
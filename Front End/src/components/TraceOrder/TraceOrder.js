import React, { Fragment, useState } from 'react';
import './TraceOrder.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OrderStatus from './OrderStatus';
import Loader from '../Loader/Loader';
import Header from '../Header/Header';
import HeaderTop from '../Header/HeaderTop';

const TraceOrder = () => {
    const [orderId, setOrderId] = useState({});
    const [status, setStatus] = useState("");
    let [loader, setLoader] = useState(false);

    const handleChange = e =>{
        const newOrderId = {...orderId};
        newOrderId[e.target.name] = e.target.value;
        setOrderId(newOrderId);
    }

    // submit order info
    const handleSubmit  =async e =>{
        e.preventDefault();
        setLoader(true);
        if(orderId.email && orderId){
            console.log(orderId);
            const  response = fetch("http://localhost:5000/api/v1/orders/me/track",{
                method:'post',
                headers:{'content-type':'application/json'},
                body:JSON.stringify(orderId)
            })
            const {success, message} = await (await response).json();
            console.log(message);
            if(success){
                setLoader(false);
                setStatus(message);
                toast.success("Success!", {position: "top-center",autoClose: 1000});
            }else{
                setLoader(false);
                toast.error(message, {position: "top-center",autoClose: 1000});
            }
        }else{
            setLoader(false);
            toast.error("All field required!", {position: "top-center",autoClose: 1000});
        }
    }

    return (
       <Fragment>
        <HeaderTop/>
            <Header/>
                <div className='trace-order'>
                    <ToastContainer/>
                    {loader&& <Loader/>}
                    <div className="container">
                    {status.length?
                    <OrderStatus status={status} orderId={orderId.orderId}/>:
                    <div className="trace-order-form">
                        <h4>Track your Order</h4>
                            <form onSubmit={handleSubmit}>
                            <input type="text" name='email' onChange={handleChange} placeholder='Email Address'/> <br />
                            <input type="text" name='orderId' onChange={handleChange} placeholder='Order Id'/> <br />
                            <button className='trace-now-btn'>Trace Now</button>
                        </form>
                    </div>
                    }
                
                    </div>
            </div>
       </Fragment>
    );
};

export default TraceOrder;
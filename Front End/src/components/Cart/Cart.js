import React, { useContext, useEffect, useState } from 'react';
import './Cart.css';
import { userContext } from '../../App';
import emptyCart  from '../../images/cart/empty cart.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartProduct from './CartProduct';
import Shipment from '../Shipment/Shipment';


const Cart = () => {
    const [shiping, setShiping ] =  useState(false);
    const [quantity, setQuantity] = useState(0);
    const { cartItems} =  useContext(userContext);    
    const [cart, setCart ]= cartItems;
    const {prices}= useContext(userContext);
    const [price, setPrice ] = prices;
    const shippingPrice = Math.floor((price*3)/100);
    const totalPrice = price + shippingPrice;
    const [order, setOrder] = useState({
        productInfo:{
            name:"",
            price:"",
            shippingPrice:"",
            quantity:"",
            image:""
        },
        shipingInfo:{
            name:"",
            phone:"",
            city:"",
            addrees:""
        }
    });
 

    const productPrice = ()=>{
        let price = 0;
        cart.map(product =>setPrice(price += product.quantity * product.price));

    }
    
    const productQnt = ()=>{
        let qnt = 0;
        cart.map(product =>(qnt += product.quantity));
        setQuantity(qnt);
    }

    useEffect(()=>{
        productPrice();
        productQnt();
        cart.length <=0 && setPrice(0);
    });
// handle proceed order
const proceedOrder = ()=>{
    setOrder({...order, price, shippingPrice, quantity, image:"T-shirt image"});
    setShiping(true);
  
}
console.log(order)

    return (
        <div className="cart">
        <ToastContainer />
            {shiping===false && <h3>Cart items</h3>}
            <div className="container">
                 {
                    shiping?<Shipment/>:<div className="row">
                    <div className="product-info">
                    {
                        cart.length?cart.map(product => <CartProduct product={product} key={product.id} />)
                        :<div className="empty-cart">
                        <img src={emptyCart} alt="Empty Cart" />
                        <p>Your <span>Cart</span> is Empty</p>
                        </div> 
                    }
                </div>
        
                {/* <Shippment/> */}
                    {shiping === false && <div className="cart-count">
                        <h3>Order Sumary</h3>
                            <p>Quantity: {quantity}</p>
                            <p>Shipping fee: <span className='taka-sign'>৳ </span>{shippingPrice}</p>
                            <p>Price: <span className='taka-sign'>৳ </span>{price}</p>
                            <p>Total Price: <span className='taka-sign'>৳ </span>{totalPrice}</p>
                        {
                        cart.length?<button className='checkout-btn' onClick={ proceedOrder }>Proceed to CheckOut</button>
                        :<button className='checkout-btn disable-btn'>Proceed</button>}
      
                    </div>}
             </div>
                 }
                
            </div>
        </div>
    );
};

export default Cart;
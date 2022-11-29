import React, { useContext, useEffect, useState } from 'react';
import './Cart.css';
import { userContext } from '../../App';
import emptyCart  from '../../images/cart/empty cart.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartProduct from './CartProduct';





const Cart = () => {
    const {quantities} = useContext(userContext);
    const [quantity, setQuantity] = useState(0);
    const { cartItems} =  useContext(userContext);    
    const [cart, setCart ]= cartItems;
    const {prices}= useContext(userContext);
    const [price, setPrice ] = prices;

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


    return (
        <div className="cart">
        <ToastContainer />
        <h3>Cart items</h3>
            <div className="container">
                 <div className="row">
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
                        <div className="cart-count">
                            <h3>Order Sumary</h3>
                                <p>Quantity: {quantity}</p>
                                <p>Shipping: <span className='taka-sign'>৳ </span>{ Math.floor((price*2)/100)}</p>
                                <p>Price: <span className='taka-sign'>৳ </span>{price}</p>
                                <p>Total Price: <span className='taka-sign'>৳ </span>{price}</p>
                                <button className='checkout-btn' onClick={ ()=> toast.success("Proceed to Checkout", {position: "bottom-right",autoClose: 500,}) }>Proceed to CheckOut</button>
          
                        </div>
                 </div>
            </div>
        </div>
    );
};

export default Cart;
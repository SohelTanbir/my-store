import React, { useContext, useEffect, useState } from 'react';
import './Cart.css';
import { userContext } from '../../App';
import emptyCart  from '../../images/cart/empty cart.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartProduct from './CartProduct';





const Cart = () => {

    const [productQuantity, setProductQuantity] = useState(1);
    const { cartItems} =  useContext(userContext);    
    const [cart, setCart ]= cartItems;

    // calculatate product price
    const productPrice = ()=>{
    const quantity = cart.length + (productQuantity-1);
        let price = 0;
        cart.map( product =>{
            price += parseInt(product.price) * productQuantity;
        });
        const shippingCost = Math.floor((price*2)/100);
        const totalPrice  = price+shippingCost;
        return {quantity,price, shippingCost, totalPrice};
    }
    const product = productPrice();

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
                                <p>Quantity: {product.quantity}</p>
                                <p>Shipping: <span className='taka-sign'>৳ </span>{product.shippingCost}</p>
                                <p>Price: <span className='taka-sign'>৳ </span>{product.price}</p>
                                <p>Total Price: <span className='taka-sign'>৳ </span>{product.totalPrice}</p>
                                <button className='checkout-btn' onClick={ ()=> toast.success("Proceed to Checkout", {position: "bottom-right",autoClose: 500,}) }>Proceed to CheckOut</button>
          
                        </div>
                 </div>
            </div>
        </div>
    );
};

export default Cart;
import React, { Fragment, useContext, useEffect, useState } from 'react';
import './Cart.css';
import { userContext } from '../../App';
import emptyCart  from '../../images/cart/empty cart.jpg'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartProduct from './CartProduct';
import Shipment from '../Shipment/Shipment';
import Header from '../Header/Header';
import HeaderTop from '../Header/HeaderTop';
import { useSelector } from 'react-redux';


const Cart = () => {
    
    const [shiping, setShiping ] =  useState(false);
    const [quantity, setQuantity] = useState(0);
    const { cartItems} =  useContext(userContext);    
    const [cart, setCart ]= cartItems;
    const {prices}= useContext(userContext);
    const [price, setPrice ] = prices;
    const shippingPrice = Math.floor((price*3)/100);
    const totalPrice = price + shippingPrice;
    const {ordersInfo } = useContext(userContext);
    const [order, setOrder] = ordersInfo;
    const cartProducts = useSelector(state => state.cart.cartProducts.cartProducts);
  
    console.log(cartProducts);
    const productPrice = ()=>{
        let price = 0;
        cartProducts&& cartProducts.map(product =>setPrice(price += product.quantity * product.price));

    }
    
    const productQnt = ()=>{
        let qnt = 0;
        cartProducts&& cartProducts.map(product =>(qnt += product.quantity));
        setQuantity(qnt);
    }

    useEffect(()=>{
        productPrice();
        productQnt();
        cartProducts?.length <=0 && setPrice(0);
    });

// handle proceed order
let orders = [];
const proceedOrder = ()=>{
    cartProducts.map(pd =>{
    orders.push({ name:pd.name, price:pd.price, quantity:pd.quantity, image:pd.images[0].url});
    return 0;
});
    setOrder({...order, productInfo:orders, shippingPrice, totalPrice});
    setShiping(true);
}

console.log(cart);

    return (
        <Fragment>
            <HeaderTop/>
                <Header/>
                <div className="cart">
                <ToastContainer />
                    {shiping===false && <h3>Cart items</h3>}
                    <div className="container">
                        {
                            shiping?<Shipment/>:<div className="row">
                            <div className="product-info">
                            {
                                cartProducts?.length?cartProducts.map(product => <CartProduct product={product} key={product._id} />)
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
                                cartProducts?.length?<button className='checkout-btn' onClick={ proceedOrder }>Proceed to CheckOut</button>
                                :<button className='checkout-btn disable-btn'>Proceed</button>}
            
                            </div>}
                    </div>
                        }
                    </div>
                </div>
        </Fragment>
    );
};

export default Cart;
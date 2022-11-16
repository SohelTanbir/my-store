import React, { useContext, useEffect, useState } from 'react';
import './Cart.css';
import { useParams } from 'react-router';
import FakeData from '../../FakeData/FakeData';
import StripePayment from '../StripePayment/StripePayment';
import { userContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTrash, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import emptyCart  from '../../images/cart/empty cart.jpg'
import Shippment from './Shippment';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Here is your toast.');





const Cart = () => {

    const [productQuantity, setProductQuantity] = useState(1);
    const[cart, setCart] =  useContext(userContext);
    const history = useHistory();

    // handle product quantity
    const quantityIncrease = ()=>  {
        if(productQuantity <10){
            setProductQuantity(productQuantity+1);
        }
    };
    const quantityDecrease = ()=>{
        if(productQuantity > 1){
            setProductQuantity(productQuantity-1)
        }
    }

    // show product details page
    const showProductDetails = (id)=>{
        history.push(`/details/${id}`);
    }
    // remove product from cart
    const removeProduct = (id) =>{
    const products =  cart.filter(product => id != product.id);
    setCart(products)
    }
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
        <h3>Cart items</h3>
            <div className="container">
                 <div className="row">
                        <div className="product-info">
                                 {cart.length ?cart.map(product =>(
                                     <div className="single-cart-product" key={product.id}>
                                     <div className="product-photo">
                                     <Link onClick={()=> showProductDetails(product.id)}><img src={product.img} alt="product image" /></Link>
                                     </div>
                                     <div className="product-title">
                                        <Link onClick={()=> showProductDetails(product.id)}><h4>{product.name}</h4></Link>
                                         <p className='product-price'><span className='taka-sign'>৳ </span> {product.price}</p>
                                     </div>  
                                     <div className="product-quantity">
                                                 {productQuantity <=1? 
                                                 <button className='increase-btn' style={{color:'#dfdfdf',cursor:'default'}} onClick={quantityDecrease}>
                                                         <FontAwesomeIcon icon={faMinus} />
                                                 </button>:
                                                     <button className='increase-btn' onClick={quantityDecrease}>
                                                         <FontAwesomeIcon icon={faMinus} />
                                                     </button>}
                                                     <span className='total-products-count'>{productQuantity}</span>
                                                     {productQuantity == 10? <button className='decrease-btn' style={{color:'#dfdfdf',cursor:'default'}} onClick={quantityIncrease}>
                                                     <FontAwesomeIcon icon={faPlus} />
                                                     </button>:
                                                     <button className='decrease-btn' onClick={quantityIncrease}>
                                                     <FontAwesomeIcon icon={faPlus} />
                                                     </button>
                                                     }             
                                      </div>
                                     <div className="cart-action">
                                             <button className='delete-btn' title='Delete' onClick={()=> removeProduct(product.id)}>
                                                 <FontAwesomeIcon icon={faTrash} />
                                             </button>  
                                     </div>
                                 </div>   
                                )):<div className="empty-cart">
                                <img src={emptyCart} alt="Empty Cart" />
                                <p>Your <span>Cart</span> is Empty</p>
                            </div>
                            } 
                        </div>

                    {/* <Shippment/> */}
                    {/* <ToastContainer /> */}
                        <div className="cart-count">
                            <h3>Order Sumary</h3>
                                <p>Quantity: {product.quantity}</p>
                                <p>Shipping: <span className='taka-sign'>৳ </span>{product.shippingCost}</p>
                                <p>Price: <span className='taka-sign'>৳ </span>{product.price}</p>
                                <p>Total Price: <span className='taka-sign'>৳ </span>{product.totalPrice}</p>
                                <button className='checkout-btn' onClick={notify}>Proceed to CheckOut</button>
                                <Toaster />
                        </div>
                 </div>
            </div>
        </div>
    );
};

export default Cart;
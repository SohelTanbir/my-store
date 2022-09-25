import React, { useContext, useState } from 'react';
import './Cart.css';
import { useParams } from 'react-router';
import FakeData from '../../FakeData/FakeData';
import StripePayment from '../StripePayment/StripePayment';
import { userContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTrash, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';


const Cart = () => {
    const { id } = useParams();
    const history = useHistory();
    const { name, price, img } = FakeData[0]
    const [productQuantity, setProductQuantity] = useState(1);
    const [placeOrder, setPlaceOrder ] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [payment, setPayment] = useContext(userContext);
    const [shipmentInfo, setShipmentInfo] =  useState({})
    
    // handle product quantity
    const quantityIncrease = ()=>  {
        if(productQuantity <5){
            setProductQuantity(productQuantity+1);
        }
    };
    const quantityDecrease = ()=>{
        if(productQuantity > 1){
            setProductQuantity(productQuantity-1)
        }
    }
// handle checkout
const handleCheckOut = () =>{
    setPlaceOrder(true);
}

// order shipment info
const shipmentInput = (e)=>{
    const shipInut = {...shipmentInfo, product:{name:name, price:price, img:img}};
    shipInut[e.target.name] = e.target.value;
    setShipmentInfo(shipInut)
}
// handle order shipment 
const handleOrderShipment = (e)=>{
    e.preventDefault();
    alert("order place successfully")
}

// show product details page
const showProductDetails = (id)=>{
    history.push(`/details/${id}`);
}


    return (
        <div className="cart">
        <h3>Cart items</h3>
            <div className="container">
                 <div className="row">
                        <div className="product-info">
                                {FakeData.map(product =>(
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
                                                     {productQuantity == 5? <button className='decrease-btn' style={{color:'#dfdfdf',cursor:'default'}} onClick={quantityIncrease}>
                                                     <FontAwesomeIcon icon={faPlus} />
                                                     </button>:
                                                     <button className='decrease-btn' onClick={quantityIncrease}>
                                                     <FontAwesomeIcon icon={faPlus} />
                                                     </button>
                                                     }             
                                      </div>
                                     <div className="cart-action">
                                             <button className='delete-btn'>
                                                 <FontAwesomeIcon icon={faTrash} />
                                             </button>  
                                     </div>
                                 </div>   
                                ))}
                        </div>
                        <div className="cart-count">
                            <h3>Order Sumary</h3>
                                <p>Quantity: {productQuantity}</p>
                                <p>Shipping: <span className='taka-sign'>৳ </span> 5</p>
                                <p>Total Price: <span className='taka-sign'>৳ </span> {(price*productQuantity)+5}</p>
                                <button className='checkout-btn' onClick={handleCheckOut}>Proceed to CheckOut</button>
                        </div>
                 </div>
            </div>
        </div>
    );
};

export default Cart;
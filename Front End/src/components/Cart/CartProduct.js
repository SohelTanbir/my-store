import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTrash, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import { userContext } from '../../App';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { loadCartProduct } from '../../Store/CartSlice/CartSlice';


const CartProduct = ({product}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [productQuantity, setProductQuantity] = useState(product.quantity);
    const {prices}= useContext(userContext);
    const [price, setPrice ] = prices;
    const {cartItems} =  useContext(userContext);    
    const [cart, setCart ]= cartItems;  
    const {quantities} = useContext(userContext);
    const [quantity, setQuantity] =quantities;
    // handle product quantity
    const quantityIncrease = (id)=>  {
        if(productQuantity <10){
            cart.map ((item )=>{
                if( item._id ===id ){
                    item.quantity +=1;
                }
                return "";
            })
            setProductQuantity(productQuantity+1);
        }
    };
    const quantityDecrease = (id)=>{
        if(productQuantity > 1){
            cart.map ((item )=>{
                if( item._id === id ){
                    item.quantity -=1;
                }
                return "";
            })
            setProductQuantity(productQuantity-1);
        }
    }
    // show product details page
    const showProductDetails = (id)=>{
        navigate(`/details/${id}`);
    }
// remove product from cart
    const removeProduct = async id =>{
        const res = await fetch(`http://localhost:5000/api/v1/cart/delete/${id}`,{
            method:'delete',
            headers:{'content-type':'application/json'}
        })
      const {success, message} =await res.json()
        if(success){
            toast.success(message,{position: "bottom-right",autoClose: 500});
            const response = await fetch("http://localhost:5000/api/v1/cart/all");
            const {cartProducts} =  await response.json();
            if(cartProducts?.length > 0){
                setCart(cartProducts)
            }
        }else{
            toast.error(message,{position: "bottom-right",autoClose: 500});
        }
        // reload cart product after delete product from 
        dispatch(loadCartProduct());
    }
    // calculatate product price
    const productPrice = ()=>{
        let price = 0;
        cart.map(product =>setPrice(price += product.quantity * product.price));
    }
  
    useEffect(()=>{
        productPrice();
        setQuantity(cart.length + (productQuantity));
    });


    return (
        <div>
              <div className="single-cart-product">
                <ToastContainer/>
                    <div className="product-photo" onClick={()=> showProductDetails(product.productId)}>
                    <img src={product.images[0].url} alt="product" />
                    </div>
                    <div className="product-title" onClick={()=> showProductDetails(product.productId)}>
                            <h4>{product.name.substring(0, 30)+"..."}</h4>
                                <p className='product-price'><span className='taka-sign'>৳ </span> {product.price*productQuantity}</p>
                    </div>  
                            <div className="product-quantity">
                                                 {productQuantity <=1? 
                                                 <button className='increase-btn' style={{color:'#dfdfdf',cursor:'default'}}>
                                                         <FontAwesomeIcon icon={faMinus} />
                                                 </button>:
                                                     <button className='increase-btn' onClick={()=> quantityDecrease(product._id)}>
                                                         <FontAwesomeIcon icon={faMinus} />
                                                     </button>}
                                                     <span className='total-products-count'>{productQuantity}</span>
                                                     {productQuantity === 10? <button className='decrease-btn' style={{color:'#dfdfdf',cursor:'default'}}>
                                                     <FontAwesomeIcon icon={faPlus} />
                                                     </button>:
                                                     <button className='decrease-btn' onClick={()=> quantityIncrease(product._id)}>
                                                     <FontAwesomeIcon icon={faPlus} />
                                                     </button>
                                                     }             
                                      </div>
                                     <div className="cart-action">
                                        <button className='delete-btn' title='Delete' onClick={()=> removeProduct(product._id)}>
                                            <FontAwesomeIcon icon={faTrash} />
                                    </button>  
                        </div>
                </div>   
        </div>
    );
};

export default CartProduct;
import React, { useContext, useEffect, useState } from 'react';
import './ProductCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faStar } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { loadCartProduct } from '../../Store/CartSlice/CartSlice';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const dispatch =  useDispatch();


    const goDetailsPage  = (id) =>{
        navigate(`/details/${id}`);
    }
    // product name modify
    const productName = ()=>{
        if(JSON.stringify(product.name).length >40){
                return JSON.stringify(product.name).slice(0,40) + "...";
        }else{
            return product.name
        }
    }

const handleAddToCart = async(id) =>{
    if(product._id===id){
        const cartProduct = {
            productId:product._id,
            name:product.name,
            description:product.description,
            price:product.price,
            category:product.category,
            images:{
                public_id:product.images[0].public_id,
                url:product.images[0].url
            }
        }
        const res = await fetch("http://localhost:5000/api/v1/cart/add",{
            method:'post',
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify(cartProduct)
            }, []);
        if(res.ok){
            toast.success("1 Product added to Cart!", {position: "bottom-right",autoClose: 1000,}) 
           }else{
            const {message} = await res.json();
            toast.error(message, {position: "bottom-right",autoClose: 1000,}) 
           }
        }
    dispatch(loadCartProduct());
}


    return (
            <div  className="single-product">
                        <img onClick={()=> goDetailsPage(product._id)} src={product.images[0]?.url} alt="product" />
                        <h3 onClick={()=> goDetailsPage(product._id)} className='product-name'>{productName()}</h3>
                        <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        </div>
                        <h3 className='product-price'>Price: <span className='taka-sign'>৳ </span> {product.price}</h3>
                        <ToastContainer />
                        <button className="plus-btn " onClick={()=> handleAddToCart(product._id)}>
                                <FontAwesomeIcon icon={faPlus} />
                        </button>
             </div>
    );
};

export default ProductCard;
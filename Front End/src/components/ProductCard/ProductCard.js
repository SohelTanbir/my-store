import React, { useContext, useEffect } from 'react';
import './ProductCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartPlus, faStar } from '@fortawesome/free-solid-svg-icons'
import { userContext } from '../../App';
import { useNavigate } from "react-router-dom";
import FakeData from '../../FakeData/FakeData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const {cartItems} =  useContext(userContext);    
    const [cart, setCart ]= cartItems;

    const goDetailsPage  = (id) =>{
        navigate(`/details/${id}`);
    }
    // product name modify
    const productName = ()=>{
        if(JSON.stringify(product.name).length >50){
                return JSON.stringify(product.name).slice(0,50) + "...";
        }else{
            return product.name
        }
    }
   

    return (
            <div  className="single-product">
                        <img onClick={()=> goDetailsPage(product._id)} src={product.images[0].url} alt="imag" />
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
             </div>
    );
};

export default ProductCard;
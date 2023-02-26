import React, { useContext } from 'react';
import './ProductCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faStar } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();


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
   
    // handle add to cart 
    const handleAddToCart  = (id)=>{
        alert(id);
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
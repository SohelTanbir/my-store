import React, { useContext } from 'react';
import './ProductCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartPlus, faStar } from '@fortawesome/free-solid-svg-icons'
import { userContext } from '../../App';
import { useHistory } from 'react-router';
import FakeData from '../../FakeData/FakeData';


const ProductCard = ({ product }) => {
    const history = useHistory();
    const [cart, setCart] = useContext(userContext);
    const handleAddToCart = (id) =>{
        FakeData.filter(product =>{
            if(product.id == id){
              console.log(product);
              const newProduct = [...cart, product]
              setCart(newProduct)
            }
        })
    }

    const goDetailsPage  = (id) =>{
        history.push(`/details/${id}`);
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
                        <img onClick={()=> goDetailsPage(product.id)} src={product.img} alt="image" />
                        <h3 onClick={()=> goDetailsPage(product.id)} className='product-name'>{productName()}</h3>
                        <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        </div>
                        <h3 className='product-price'>Price: <span className='taka-sign'>৳ </span> {product.price}</h3>
                        <button  onClick={()=> handleAddToCart(product.id)} className="add_to_cart_btn">Add to Cart</button>
             </div>
    );
};

export default ProductCard;
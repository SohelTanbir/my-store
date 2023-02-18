import React, { Fragment, useContext, useEffect, useState } from 'react';
import './ProductDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from 'react-router-dom';
import Review from '../Reviews/Review';
import Loader from '../Loader/Loader';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userContext } from '../../App';
import Header from '../Header/Header';


const ProductDetails = () => {
    const {cartItems} =  useContext(userContext);    
    const [cart, setCart ]= cartItems;  
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/api/v1/product/one/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data.products));
    });
    
const handleAddToCart = async(id) =>{

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
        });
    if(res.ok){
        setCart(product)
        toast.success("1 Product added to Cart!", {position: "bottom-right",autoClose: 1000,}) 
       }else{
        const {message} = await res.json();
        toast.error(message, {position: "bottom-right",autoClose: 1000,}) 
       }
    }

    return (
      <Fragment>
            <Header/>
            <div className='product-details'>
               <ToastContainer />
            {product._id ? <div className="container">
                <div className="row">
                    <div className="product-img">
                        <img src={product.images[0].url} alt="product" />
                    </div>
                    <div className="product-text">
                        <h2>{product.name}</h2>
                        <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStarHalfAlt} />
                        <Link to="/reviews"><span className='total-ratings'>{product.ratings} ratings</span></Link>
                        </div>
                        <p className='brand'>Brand: {product.brand?product.brand:'No brand'}</p>
                        <p className='color'><span>Color</span>:  {product.color?product.color:'Mix'}</p>
                        <div className="price">
                            <h3><span className='taka-sign'>৳ </span>{product.price} </h3>
                        </div>
                      {product.size&& <div className="size">
                            <div className="M active">
                                <h4>M</h4>
                            </div>
                            <div className="L">
                                <h4>L</h4>
                            </div>
                            <div className="XL">
                                <h4>XL</h4>
                            </div>
                        </div>}
                        <div className="button-group">
                            <button className='buy-now-btn'>Buy Now</button>
                            <button onClick={()=>{ handleAddToCart(product._id)}} className='add-to-cart-btn'>Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="product-description">
                    <h4>Details of Product: {product.name}</h4>
                    <p> {product.description}</p>
                </div>
                {product.reviews.Length?<div className="product-reviews">
                    <h4>Ratings and Reviews of....</h4>
                    <h2>ratings <span>/ 5</span>5</h2>
                    <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStarHalfAlt} /> <br />
                        <span className='total-ratings'>12 ratings</span>
                    </div>

                    {product[0].allReviews.length > 0&&product[0].allReviews.map(review =>(
                         <Review name={review.user} rating="5" comment={review.review} />
                    ))}
                </div>: <p className='no-reviews'>No reviews</p>}
            </div>
            :<Loader/>}
        </div>
      </Fragment>
    );
};

export default ProductDetails;
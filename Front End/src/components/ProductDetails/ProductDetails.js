import React from 'react';
import './ProductDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from 'react-router-dom';
import FakeData from '../../FakeData/FakeData';
import Review from '../Reviews/Review';



const ProductDetails = () => {
    const { id } = useParams();
    const product = FakeData.filter( item => item.id == id);
    return (
        <div className='product-details'>
            <div className="container">
                <div className="row">
                    <div className="product-img">
                        <img src={product[0].img} alt="product" />
                    </div>
                    <div className="product-text">
                        <h2>{product[0].name}</h2>
                        <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStarHalfAlt} />
                        <Link to="/reviews"><span className='total-ratings'>12 ratings</span></Link>
                        </div>
                        <p className='brand'>Brand:{product[0].brand} </p>
                        <p className='color'><span>Color</span>: {product[0].color}</p>
                        <div className="price">
                            <h3><span className='taka-sign'>৳ </span> {product[0].price} </h3>
                        </div>
                        {product[0].size&& <div className="size">
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
                            <button className='add-to-cart-btn'>Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="product-description">
                    <h4>Details of Product: {product[0].name}</h4>
                    <p>{product[0].description}</p>
                </div>
                <div className="product-reviews">
                    <h4>Ratings and Reviews of....</h4>
                    <h2>{product[0].ratings} <span>/ 5</span></h2>
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
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
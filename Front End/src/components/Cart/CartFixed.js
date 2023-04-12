import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './CartFixed.css'
import { Link } from 'react-router-dom'


const CartFixed = () => {
          return (
                    <div id='cart-fixed'>
                              <Link to="/cart">
                              <div className="cart-items-fixed">
                                        <div className="cart-icon-fixed">
                                                  <FontAwesomeIcon icon={faCartPlus}/>
                                        </div>
                                        <span className='me-2'>10</span> 
                                        <span>items</span>
                              </div>
                              <div className="cart-price-fixed">
                                        <p><span>৳ </span> 1200</p>
                              </div>
                              </Link>
                    </div>
          );
};

export default CartFixed;
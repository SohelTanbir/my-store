import React from 'react';
import './HeaderTop.css';



const HeaderTop = () => {
          return (
                    <div className='header-top'>
                              <div className="container">
                                        <div className="d-flex align-items-center justify-content-between">
                                                  <p className='free-shipping'>Free Shipping on first order! <span>Order Now</span></p>
                                                  <ul className='top-menu d-flex'>
                                                            <li><a href="#">Track order</a></li>
                                                            <li><a href="#">Contact</a></li>
                                                            <li><a href="#">Profile</a></li>
                                                            <li><a href="#">Easy Return</a></li>
                                                  </ul>
                                        </div>
                              </div>
                    </div>
          );
};

export default HeaderTop; 
import React, { useState } from 'react';
import './Banner.css'
import Slider from '../Slider/Slider';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { getCategory } from '../../Store/Category/CategorySlice';

const Banner = ()=>{
    const dispatch = useDispatch();

    return(
        <div className="banner">
           <div className="container-lg">
               <div className="row">
                <div className="categories">
                    <h3>
                        <span className="category-icon">
                            <FontAwesomeIcon icon={faList} />
                        </span>
                        Top Categories 
                    </h3>
                    <ul className="categori-items">
                        <li onClick={ (e)=> dispatch(getCategory(e.target.getAttribute("data")))} data="electronics">Electronics</li>
                        <li onClick={(e)=>  dispatch(getCategory(e.target.getAttribute("data")))} data="men">Men's Fashion</li>
                        <li onClick={(e)=>  dispatch(getCategory(e.target.getAttribute("data")))} data="women">Women's Fashion</li>
                        <li onClick={(e)=>  dispatch(getCategory(e.target.getAttribute("data")))} data="winter">Winter Cloths</li>
                        <li onClick={(e)=>  dispatch(getCategory(e.target.getAttribute("data")))} data="shoes">Shoes Collections</li>
                        <li onClick={(e)=>  dispatch(getCategory(e.target.getAttribute("data")))} data="shirt">Shirt</li>
                        <li onClick={(e)=>  dispatch(getCategory(e.target.getAttribute("data")))} data="t-shirt">T-Shirt </li>
                        <li onClick={(e)=>  dispatch(getCategory(e.target.getAttribute("data")))} data="bag">Bags</li>
                        <li onClick={(e)=>  dispatch(getCategory(e.target.getAttribute("data")))} data="watch">Watches</li>
                        <li onClick={(e)=>  dispatch(getCategory(e.target.getAttribute("data")))} data="others">Others</li>
                    </ul>
                </div>
                <div className="banner-slider">
                     <Slider/>
                </div>
               </div>
           </div>
        </div>
    )
}

export default Banner;
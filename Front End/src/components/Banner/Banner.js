import React, { useState } from 'react';
import './Banner.css'
import Slider from '../Slider/Slider';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { getCategory } from '../../Store/Category/CategorySlice';

const Banner = ()=>{
    const [category, setCategory] = useState("")
    const dispatch = useDispatch();
    //handle change category
    const handleChangeCategory = (e)=>{
        setCategory(e.target.getAttribute("data"))
        dispatch(getCategory(category))
    }

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
                        <li onClick={handleChangeCategory} data="electronics">Electronics</li>
                        <li onClick={handleChangeCategory} data="men">Men's Fashion</li>
                        <li onClick={handleChangeCategory} data="women">Women's Fashion</li>
                        <li onClick={handleChangeCategory} data="winter">Winter Cloths</li>
                        <li onClick={handleChangeCategory} data="shoes">Shoes Collections</li>
                        <li onClick={handleChangeCategory} data="shirt">Shirt</li>
                        <li onClick={handleChangeCategory} data="t-shirt">T-Shirt </li>
                        <li onClick={handleChangeCategory} data="bag">Bags</li>
                        <li onClick={handleChangeCategory} data="watch">Watches</li>
                        <li onClick={handleChangeCategory} data="others">Others</li>
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
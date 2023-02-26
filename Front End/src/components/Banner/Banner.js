import React, { useState } from 'react';
import './Banner.css'
import Slider from '../Slider/Slider';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons';

const Banner = ()=>{
    const [category, setCategory] = useState([])

    //handle change category
    const handleChangeCategory = (e)=>{
        const newCategory = [...category, e.target.value]
        setCategory(newCategory)
  
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
                        <li><a href="#">Electronics</a></li>
                        <li><a href="#">Men's Fashion</a></li>
                        <li><a href="#">Women's Fashion</a></li>
                        <li><a href="#">Winter Cloths</a></li>
                        <li><a href="#">Shoes Collections</a></li>
                        <li><a href="#">Shirt </a></li>
                        <li><a href="#">T-Shirt </a></li>
                        <li><a href="#">Bags </a></li>
                        <li><a href="#">Watches </a></li>
                        <li><a href="#">Others</a></li>
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
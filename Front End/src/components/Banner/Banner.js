import React from 'react';
import './Banner.css'
import banner1 from '../../images/banner-1.png'


const Banner = ()=>{
    return(
        <div className="banner">
           <div className="container">
               <div className="row">
                <div className="categories">
                    <h3>All Categories</h3>
                    <div className="categori-items">
                    <input type="checkbox" name="men" id="men" /> <span className='category'>Men Fasion</span> <br />
                    <input type="checkbox" name="Women" id="Women" /> <span className='category'>Women Fasion</span> <br />
                    <input type="checkbox" name="winter" id="windter" /> <span className='category'>Winter Collection</span><br />
                    <input type="checkbox" name="electronic" id="electronic" /> <span className='category'>Electronics Accesories</span> <br />
                    <input type="checkbox" name="shoes" id="shoes" /> <span className='category'>Shoes Collection</span><br />
                    <input type="checkbox" name="watch" id="watch" /> <span className='category'>Watch</span><br />
                    <input type="checkbox" name="bag" id="bag" /> <span className='category'>Bags</span><br />
                    </div>
                </div>
                <div className="banner-slider">
                   <img src={banner1} alt="product " />
                </div>
               </div>
           </div>
        </div>
    )
}

export default Banner;
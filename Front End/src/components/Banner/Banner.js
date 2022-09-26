import React, { useState } from 'react';
import './Banner.css'
import banner1 from '../../images/banner-1.png'


const Banner = ()=>{
    const [category, setCategory] = useState([])

    //handle change category
    const handleChangeCategory = (e)=>{
        const newCategory = [...category, e.target.value]
        setCategory(newCategory)
  
    }


    console.log(category);


    return(
        <div className="banner">
           <div className="container">
               <div className="row">
                <div className="categories">
                    <h3>All Categories</h3>
                    <div className="categori-items">

                        <form>
                            <input type="checkbox" onChange={handleChangeCategory} name="men" id="men" value="men" /> <span className='category'>Men Fasion</span> <br />
                            <input type="checkbox" onChange={handleChangeCategory} name="Women" id="Women" value="women" /> <span className='category'>Women Fasion</span> <br />
                            <input type="checkbox" onChange={handleChangeCategory} name="winter" id="windter" value="winter" /> <span className='category'>Winter Collection</span><br />
                            <input type="checkbox" onChange={handleChangeCategory} name="electronic" id="electronic" value="electronic" /> <span className='category'>Electronics Accesories</span> <br />
                            <input type="checkbox" onChange={handleChangeCategory} name="shoes" id="shoes" value="shoes" /> <span className='category'>Shoes Collection</span><br />
                            <input type="checkbox" onChange={handleChangeCategory} name="watch" id="watch" value="watch"/> <span className='category'>Watch</span><br />
                            <input type="checkbox" onChange={handleChangeCategory} name="bag" id="bag" value="bag" /> <span className='category'>Bags</span><br />
                        </form>

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
import React, { Fragment, useEffect, useState } from 'react';
import './UpdateProduct.css'
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import SideBar from '../SideBar/SideBar';
import { useParams } from 'react-router-dom';
import Loader from '../../Loader/Loader'


const UpdateProduct = () => {
    const [product, setProduct] = useState({});
    const [oldProduct, setOldProduct ]=  useState([]);
    const [selectedCategory, setSelectedCategory ] = useState("");
    const [selectedSize, setSelectedSize ] = useState("");
    const { id }= useParams();



// handle side effect
    useEffect(()=>{
        fetch(`http://localhost:5000/api/v1/product/one/${id}`)
        .then(res => res.json())
        .then(data => {
            setOldProduct(data.products)
            setSelectedCategory(data.products.category)
            setSelectedSize(data.products.size)
        } );
    })


    // handle change
    const handleChange = (e)=>{
        const newProduct  ={...product}
        newProduct[e.target.name] = e.target.value;
        setProduct(newProduct);
     
    }
    
    // handle add product
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(selectedCategory);
    }


    return (
      <Fragment>
       {oldProduct._id && selectedCategory.length >0 && selectedSize.length > 0? <div className="update-product">
            <DashboardHeader/>
            <div className="dashboard-main">
            <SideBar></SideBar>
                <div className="main-part product-update-form">
                   <h2>Update Product</h2>
                   <form onSubmit={handleSubmit}>
                       <div className="flex-container">
                        <div className="input-group mr-2p">
                                <label>Product name</label> <br />
                                <input type="text"  onChange={handleChange} name='name' defaultValue={oldProduct.name} />
                        </div>

                        <div className="input-group">
                            <label>Price</label> <br />
                            <input type="text" onChange={handleChange} name='price' defaultValue={oldProduct.price}/>
                        </div>

                        <div className="input-group mr-2p">
                            <label>Brand</label> <br />
                            <input type="text"  onChange={handleChange} name='brand'  defaultValue={oldProduct.brand}/>
                        </div>

                        <div className="input-group">
                            <label>Color</label> <br />
                              <input type="text" onChange={handleChange} name='color' defaultValue={oldProduct.color}/>
                        </div>

                        <div className="input-group mr-2p">
                            <label>Category</label> <br />
                            <select name="category" className="mr-2p"  id="category" onChange={handleChange} defaultValue={selectedCategory}>
                                <option value="men">Men</option>
                                <option value="women">Women</option>
                                <option value="winter">Winter</option>
                                <option value="electronics">Electronics</option>
                                <option value="shoes">Shoes</option>
                                <option value="watch">Watch</option>
                                <option value="bag">Bags</option>
                                <option value="t-shirt">T-shirt</option>
                                <option value="shirt">Shirt</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <label>Size</label> <br />
                            <select name="size" id="size" onChange={handleChange} defaultValue={selectedSize}>
                            <option value="none">None</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="M, L">M, L</option>
                            <option value="M, XL">M, XL</option>
                            <option value="L, XL">L, XL</option>
                            <option value="M, L, XL ">M, L, XL</option>
                        </select>
                        </div>
                        <div className="w-100 mr-2p">
                            <label>Photo</label> <br />
                            <input name='photo'  onChange={handleChange} type="file"/><br />
                                <div className="preview-product-img">
                                    <img src={oldProduct.images[0].url} alt="product" />
                                </div>
                        </div>

                        <div className="input-group w-100">
                            <label>Description</label> <br />
                            <textarea name="description"  onChange={handleChange}  defaultValue={oldProduct.description}></textarea>
                        </div>
                
                       <button className='submit-btn' type="submit">Update Product</button>
                       </div>
                   </form>
                </div>
            </div>
        </div>:<Loader/>}
      </Fragment>
    );
};

export default UpdateProduct;
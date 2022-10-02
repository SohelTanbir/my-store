import React, { useState } from 'react';
import './UpdateProduct.css'
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import SideBar from '../SideBar/SideBar';

const UpdateProduct = () => {
    const [product, setProduct] = useState({});

    
    // handle change
    const handleChange = (e)=>{
        const newProduct  ={...product}
        newProduct[e.target.name] = e.target.value;
        setProduct(newProduct)
    }
    
    // handle add product
    const handleSubmit = (e)=>{
        
        e.preventDefault();
    }


    return (
        <div className="update-product">
            <DashboardHeader/>
            <div className="dashboard-main">
            <SideBar></SideBar>
                <div className="main-part product-update-form">
                   <h2>Update Product</h2>
                   <form onSubmit={handleSubmit}>
                       <div className="flex-container">
                        <div className="input-group mr-2p">
                                <label>Product name</label> <br />
                                <input type="text"  onBlur={handleChange} name='name' />
                        </div>

                        <div className="input-group">
                            <label>Price</label> <br />
                            <input type="text" onBlur={handleChange} name='price'/>
                        </div>

                        <div className="input-group mr-2p">
                            <label>Brand</label> <br />
                            <input type="text"  onBlur={handleChange} name='brand' />
                        </div>

                        <div className="input-group">
                            <label>Color</label> <br />
                              <input type="text" onBlur={handleChange} name='color'/>
                        </div>

                        <div className="input-group mr-2p">
                            <label>Category</label> <br />
                            <select name="category" className="mr-2p"  id="category" onBlur={handleChange}>
                                <option value="all">Category</option>
                                <option value="men">Men Fasion</option>
                                <option value="women">Women Fasion</option>
                                <option value="winter">Winter Collection</option>
                                <option value="electronics">Electronics Accesories</option>
                                <option value="shoes">Shoes Collection</option>
                                <option value="watch">Watch</option>
                                <option value="bag">Bags</option>
                                <option value="t-shirt">T-shirt</option>
                                <option value="shirt">Shirt</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <label>Size</label> <br />
                            <select name="size" id="size" onBlur={handleChange}>
                            <option value="all">Size</option>
                            <option value="men">M</option>
                            <option value="men">L</option>
                            <option value="men">XL</option>
                            <option value="men">M, L</option>
                            <option value="men">M, XL</option>
                            <option value="men">L, XL</option>
                            <option value="men">M, L, XL</option>
                        </select>
                        </div>
                        <div className="input-group mr-2p">
                            <label>Photo</label> <br />
                            <input name='photo'  onBlur={handleChange} type="file"/><br />
                        </div>

                        <div className="input-group w-100">
                            <label>Description</label> <br />
                            <textarea name="description"  onBlur={handleChange} ></textarea>
                        </div>
                
                       <button className='submit-btn' type="submit">Update Product</button>
                       </div>
                   </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;
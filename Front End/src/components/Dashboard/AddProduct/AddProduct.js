import React, { useState } from 'react';
import './AddProduct.css'
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import SideBar from '../SideBar/SideBar';

const AddProduct = () => {
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
        <div className="addProduct">
            <DashboardHeader/>
            <div className="dashboard-main">
            <SideBar></SideBar>
                <div className="main-part product-add-form">
                   <h2>Add New Product</h2>
                   <form onSubmit={handleSubmit}>
                       <input type="text" className="mr-2p" onBlur={handleChange} name='name' placeholder="Product Name"/>
                       <input type="text" onBlur={handleChange} name='price' placeholder="৳ Price"/>
                       <input type="text" className="mr-2p"  onBlur={handleChange} name='brand' placeholder="Brand"/> 
                       <input type="text" onBlur={handleChange} name='color' placeholder="Color"/>
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
                       <input name='photo' className="mr-2p"  onBlur={handleChange} type="file"/><br />
                       <textarea name="description"  onBlur={handleChange} placeholder='Product description'></textarea>
                       <button className='submit-btn' type="submit">Add Product</button>
                   </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
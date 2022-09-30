import React, { useState } from 'react';
import './AddProduct.css'
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import SideBar from '../SideBar/SideBar';

const AddProduct = () => {
    const [addProduct, setAddProduct] = useState({});
    const [category, setCategory] = useState([]);

    // handle add product
    const handleAddProduct = (e)=>{
        alert("Product Added!");
        e.preventDefault();
    }

    const handleChangeCategory = (e)=>{
        const newCategory = [...category, e.target.value]
        setCategory(newCategory)
    }
    


    return (
        <div className="addProduct">
            <DashboardHeader/>
            <div className="dashboard-main">
            <SideBar></SideBar>
                <div className="main-part product-add-form">
                   <h2>Add New Product</h2>
                   <form onSubmit={handleAddProduct}>
                       <input type="text" placeholder="Product Name"/> <br />
                       <input type="text" placeholder="৳ Price"/> <br /> 
                       <select name="category" id="category" onChange={handleChangeCategory}>
                            <option value="all">All Categories</option>
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
                       <input type="file"/><br />
                       <textarea name="product-description"  placeholder='Product description'></textarea>
                       <button className='submit-btn' onClick={handleAddProduct} type="submit">Add Product</button>
                   </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
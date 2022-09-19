import React, { useState } from 'react';
import './AddProduct.css'
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import SideBar from '../SideBar/SideBar';

const AddProduct = () => {
    const [addProduct, setAddProduct] = useState({});

    // handle add product
    const handleAddProduct = (e)=>{
        alert("Product Added!");


        e.preventDefault();
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
                       <input type="text" placeholder="$Price"/> <br />
                       <input type="file"/><br />
                       <textarea name="" id="" cols="30" rows="10"></textarea>
                       <button className='submit-btn' onClick={handleAddProduct} type="submit">Add Now</button>
                   </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
import React, { useEffect, useState } from 'react';
import './ManageProducts.css'
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import SideBar from '../SideBar/SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ManageProducts = () => {
    const [products, setProducts ] = useState([]);
    const navigate = useNavigate();


const loadProduct = async ()=>{
    const response = await fetch("http://localhost:5000/api/v1/product/all");
    const productData = await response.json();
    setProducts(productData.products)
}
const deleteProduct = async (productId)=>{
    const response = await fetch(`http://localhost:5000/api/v1/product/delete/${productId}`,{
        method:"DELETE",
        headers:{'content-type':'application/json'}
    });
    const {success, message} = await response.json();
    if(success){
        toast.success(message,{position: "top-center",autoClose: 1000});
    }else{
        toast.error(message,{position: "top-center",autoClose: 1000});
    }
}

// page navigate to update product
const pageNavigate = (id)=>{
    navigate(`/products/update/${id}`)
}

useEffect( ( )=>{
    loadProduct();
}, [products])

   const nameModify = (productName)=>{
    if(JSON.stringify(productName)?.length >30){
            return JSON.stringify(productName).slice(0,30) + "...";
    }else{
        return productName
    }
}

    return (
        <div className="manage-products">
            <ToastContainer/>
            <DashboardHeader/>
            <div className="dashboard-main">
            <SideBar/>
            <div className="product-main">
                <h2>All Products({products.length?products.length : 0})</h2>
                <div className="products-container">
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>photo</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>

                        {
                            products.map((product, index) =>( 
                                <tr>
                                    <td># {nameModify(product._id)}</td>
                                    <td className='product-name'>{nameModify(product.name)}</td>
                                    <td><img src={product.images[0].url} alt="product" /> </td>
                                    <td><span>৳ </span> {product.price}</td>
                                    <td>{product.category}</td>
                                    <td>
                                    <button className='action-btn edit-btn' onClick={ ()=> pageNavigate(product._id)}><FontAwesomeIcon title='Edit' icon={faEdit }  /> ||</button>
                                        <button className='action-btn delete-btn' onClick={()=> deleteProduct(product._id)}><FontAwesomeIcon title='Delete ' icon={faTrash }/> ||</button>
                                        <Link to="/products/view"><button className='action-btn view-btn'><FontAwesomeIcon title='View' icon={faEye }  /></button></Link>
                                    </td>
                            </tr>
                        ))
                        
                        }
                    </table>
                </div>
                {products.length <1 && <h4 className='no-product'>There is no products found!</h4>}
            </div>
            </div>
        </div>
    );
};

export default ManageProducts;
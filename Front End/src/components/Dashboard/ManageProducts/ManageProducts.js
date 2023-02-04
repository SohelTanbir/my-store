import React, { useEffect, useState } from 'react';
import './ManageProducts.css'
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import SideBar from '../SideBar/SideBar';
import monitor from '../../../images/products/monitor.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const ManageProducts = () => {
    const [products, setProducts ] = useState([]);


const loadProduct = async ()=>{
    const response = await fetch("http://localhost:5000/api/v1/product/all");
    const productData = await response.json();
    setProducts(productData.products)
}


useEffect( ( )=>{
    loadProduct();
}, [])


    const deleteProduct = ()=>{
        alert('deleted');
    }



   const nameModify = (productName)=>{
    if(JSON.stringify(productName)?.length >30){
            return JSON.stringify(productName).slice(0,30) + "...";
    }else{
        return productName
    }
}

    return (
        <div className="manage-products">
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
                                    <td><img src={monitor} alt="product" /> </td>
                                    <td><span>৳ </span> 150</td>
                                    <td>Electronics</td>
                                    <td>
                                    <Link to="/products/update"><button className='action-btn edit-btn'><FontAwesomeIcon title='Edit' icon={faEdit }  /> ||</button></Link>
                                        <button className='action-btn delete-btn' onClick={deleteProduct}><FontAwesomeIcon title='Delete ' icon={faTrash }/> ||</button>
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
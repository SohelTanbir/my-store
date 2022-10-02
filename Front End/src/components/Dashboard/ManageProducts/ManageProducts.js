import React, { useState } from 'react';
import './ManageProducts.css'
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import SideBar from '../SideBar/SideBar';
import monitor from '../../../images/products/monitor.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const ManageProducts = () => {

   const productName = "Redmi Monitor 1A 23.8 Full HD - Black";
    const deleteProduct = ()=>{
        alert('deleted');
    }



   const nameModify = ()=>{
    if(JSON.stringify(productName).length >10){
            return JSON.stringify(productName).slice(0,10) + "...";
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
                <h2>All Products(20)</h2>
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
                        <tr>
                            <td>#d1d1d1d1d1</td>
                            <td>{nameModify()}</td>
                            <td><img src={monitor} alt="photo" /> </td>
                            <td><span>৳ </span> 150</td>
                            <td>Electronics</td>
                            <td>
                                <Link to="/products/update"><button className='action-btn edit-btn'><FontAwesomeIcon title='Edit' icon={faEdit }  /> ||</button></Link>
                                <button className='action-btn delete-btn' onClick={deleteProduct}><FontAwesomeIcon title='Delete ' icon={faTrash }/> ||</button>
                                <Link to="/products/view"><button className='action-btn view-btn'><FontAwesomeIcon title='View' icon={faEye }  /></button></Link>

                            </td>
                        </tr>
                        <tr>
                            <td>#d1d1d1d1d1</td>
                            <td>{nameModify()}</td>
                            <td><img src={monitor} alt="photo" /> </td>
                            <td><span>৳ </span> 150</td>
                            <td>Electronics</td>
                            <td>
                            <Link to="/products/update"><button className='action-btn edit-btn'><FontAwesomeIcon title='Edit' icon={faEdit }  /> ||</button></Link>
                                <button className='action-btn delete-btn' onClick={deleteProduct}><FontAwesomeIcon title='Delete ' icon={faTrash }/> ||</button>
                                <Link to="/products/view"><button className='action-btn view-btn'><FontAwesomeIcon title='View' icon={faEye }  /></button></Link>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ManageProducts;
import React, { useState } from 'react';
import './Category.css'
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import SideBar from '../SideBar/SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import PopUp from '../../PopUP/PopUp';


const Category = () => {

    const deleteProduct = ()=>{
        alert('deleted');
    }


    return (
        <div className="all-orders">
            <DashboardHeader/>
            <div className="dashboard-main">
            <SideBar/>
            <div className="category-main">
                <div className="category-header">
                    <h3>All Category(12)</h3>
                    <button className='btn category-btn'>Add Category</button>
                </div>
                <div className="category-container">
                    <div className="row">
                        <div className="single-category">
                            <span>Bag</span>
                            <FontAwesomeIcon icon={faTimes} />
                        </div>
                        <div className="single-category">
                            <span>Olive Oil</span>
                            <FontAwesomeIcon icon={faTimes} />
                        </div>
                        <div className="single-category">
                            <span>Winter Collection</span>
                            <FontAwesomeIcon icon={faTimes} />
                        </div>
                        <div className="single-category">
                            <span>Watch</span>
                            <FontAwesomeIcon icon={faTimes} />
                        </div>
                        <div className="single-category">
                            <span>T-Shirt</span>
                            <FontAwesomeIcon icon={faTimes} />
                        </div>
                        <div className="single-category">
                            <span>Jens Pant</span>
                            <FontAwesomeIcon icon={faTimes} />
                        </div>
                        <div className="single-category">
                            <span>Dron Camera</span>
                            <FontAwesomeIcon icon={faTimes} />
                        </div>
                        <div className="single-category">
                            <span>Sunglass</span>
                            <FontAwesomeIcon icon={faTimes} />
                        </div>
                    </div>
                    <PopUp title="Add New Category"/>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Category;
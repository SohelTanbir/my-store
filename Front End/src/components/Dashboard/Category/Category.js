import React, { useState } from 'react';
import './Category.css'
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import SideBar from '../SideBar/SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'


const Category = () => {
    const [category, setCategory ] = useState("");

    // handle change input data
    const handleChange = e =>{
        setCategory(e.target.value);
    }

    // store category in db
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(category)
    }

    const deleteProduct = ()=>{
        alert('deleted');
    }


    return (
        <div className="all-orders">
            <DashboardHeader/>
            <div className="dashboard-main">
            <SideBar/>
            <div className="category-main">
                    <h2>All Category(02)</h2>
                    <div className="row">
                    <div className="category-container">
                    <div className="row">
                        <div className="single-category">
                            <span>Bag</span>
                            <FontAwesomeIcon onClick={deleteProduct} icon={faTimes} />
                        </div>
                        <div className="single-category">
                            <span>Olive Oil</span>
                            <FontAwesomeIcon  onClick={deleteProduct} icon={faTimes} />
                        </div>
                    </div>
                </div>
                <div className="add-new-category">
                <div className="popup-box">
                     <div className="title">
                        <h3>Add New Category</h3>
                     </div>
                    <form onSubmit={handleSubmit}>
                    <input type="text" onChange={handleChange} name='category' placeholder='Enter Category ' /> <br />
                    <button>Add Now</button>
                    </form>
                </div>
                </div>
                    </div>
            </div>
            </div>
        </div>
    );
};

export default Category;
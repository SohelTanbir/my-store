import React, { useEffect, useState } from 'react';
import './Category.css'
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import SideBar from '../SideBar/SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Loader from '../../Loader/Loader'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Category = () => {
    const [category, setCategory ] = useState([]);



    const loadCategory = async()=>{
        const res =  await fetch("http://localhost:5000/api/v1/category/all");
        const {categories} = await res.json();
        setCategory(categories)
    }

    //  handle side effect actions
    useEffect(()=>{
        loadCategory();
    },[category])

    // handle change input data
    const handleChange = e =>{
        setCategory(e.target.value);
    }

    // store category in db
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(category)
    }

    const deleteProduct = async(id)=>{
        const response = await fetch(`http://localhost:5000/api/v1/category/delete/${id}`,{
            method:"DELETE"
        })
        const {success, message } = await response.json();
        if(success){
            toast.success(message,{position: "top-center",autoClose: 1000});
        }else{
            toast.error(message,{position: "top-center",autoClose: 1000});
        }
    }


    return (
        <div className="all-orders">
            <ToastContainer/>
            <DashboardHeader/>
            <div className="dashboard-main">
            <SideBar/>
            <div className="category-main">
                    <div className="category-header">
                    <h2>All Category({category.length? category.length : 0})</h2>
                    <button>Add Now</button>
                    </div>
                    <div className="row">
                    <div className="category-container">
                    <div className="row">
                        {category.length ?
                        <>
                            {
                                category.map(categoriItem =>(
                                    <div className="single-category">
                                        <span>{categoriItem.name}</span>
                                        <FontAwesomeIcon onClick={()=> deleteProduct(categoriItem._id)} icon={faTimes} />
                                    </div>
                                ))
                            }
                        </>
                        :<Loader/>
                        }
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Category;
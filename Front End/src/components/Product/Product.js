import React, { Fragment, useEffect, useState } from 'react';
import './Product.css'
import ProductCard from '../ProductCard/ProductCard';
import Loader from '../Loader/Loader';
import Header from '../Header/Header';
import { useSelector } from 'react-redux';

const Product = () => {
    const [products, setProducts] = useState([]);
    const currentPath = window.location.pathname;
    const searchInputVal =  useSelector(state => state.searchVal);

    useEffect(()=>{
        fetch(`http://localhost:5000/api/v1/product/all?name=${searchInputVal}`)
        .then(res => res.json())
        .then(data => setProducts(data.products));
    }, [searchInputVal]);


    return (
       <Fragment>
            {currentPath === "/product" && <Header/>}
            <div className="container" id="product">
                <div className="product-heading">
                    <h2>Brand Product</h2>
                    <p>Choose your favorite product from here</p>
                </div>
                    {products.length ?<div className="row">
                        {
                            products.map(product => <ProductCard key={product._id}  product={product}/>)
                        }
                    </div>
                    :<Loader />}
        </div>
       </Fragment>
    );
};

export default Product;
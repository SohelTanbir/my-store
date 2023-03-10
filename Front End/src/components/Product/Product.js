import React, { Fragment, useEffect, useState } from 'react';
import './Product.css'
import ProductCard from '../ProductCard/ProductCard';
import Loader from '../Loader/Loader';
import Header from '../Header/Header';
import { useSelector } from 'react-redux';
import PagePagination from '../Pagination/PagePagination';


const Product = () => {
    const [products, setProducts] = useState([]);
    const currentPath = window.location.pathname;
    const searchInputVal =  useSelector(state => state.searchVal.searchVal);
    const pageNumber =  useSelector(state => state.PaginationSlice.page);
    const [totalProduct, setTotalProduct ] =  useState(0)

const loadProduct = async()=>{
    const res = await fetch(`http://localhost:5000/api/v1/product/all?name=${searchInputVal}&page=${pageNumber}`);
    const { products, total} = await res.json()
    setProducts(products);
    setTotalProduct(total)
}


    useEffect(()=>{
        loadProduct()
    }, [searchInputVal, pageNumber]);



    return (
       <Fragment>
            {currentPath === "/product" && <Header/>}
            <div className="container" id="product">
                <div className="product-heading">
                    <h2>Brand Product</h2>
                    <p>Choose your favorite product from here</p>
                </div>
                    {products.length ?<div className="row g-4">
                        {
                            products.map(product => <ProductCard key={product._id}  product={product}/>)
                        }
                    </div>
                    :<Loader />}

                   <div className="pagination-container">
                        <PagePagination totalProduct={totalProduct}/>
                   </div>
        </div>
       </Fragment>
    );
};

export default Product;
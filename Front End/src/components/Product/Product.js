import React, { useEffect, useState } from 'react';
import './Product.css'
import ProductCard from '../ProductCard/ProductCard';
import FakeData from '../../FakeData/FakeData';
import Loader from '../Loader/Loader';

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/api/v1/product/all")
        .then(res => res.json())
        .then(data => setProducts(data.products));
    }, []);

    return (
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
    );
};

export default Product;
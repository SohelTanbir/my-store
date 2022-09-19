import React from 'react';
import './Product.css'
import ProductCard from '../ProductCard/ProductCard';
import FakeData from '../../FakeData/FakeData';

const Product = () => {
    return (
       <div className="container" id="product">
           <div className="product-heading">
               <h2>Brand Product</h2>
               <p>Choose your favorite product from here</p>
           </div>
            <div className="row">
                {
                    FakeData.map(product => <ProductCard key={product.id}  product={product}/>)
                }
             </div>
       </div>
    );
};

export default Product;
import React from 'react';
import './Searchbox.css';




const SearchBox = () => {
    return (
       <div className="container">
         <div className='search-box'>
            <select name="category" id="category">
                <option selected>All Categories</option>
                <option value="men">Men Fasion</option>
                <option value="women">Women Fasion</option>
                <option value="winter">Winter Collection</option>
                <option value="electronics">Electronics Accesories</option>
                <option value="shoes">Shoes Collection</option>
                <option value="watch">Watch</option>
                <option value="bag">Bags</option>
                <option value="t-shirt">T-shirt</option>
                <option value="shirt">Shirt</option>
            </select>
            <input type="text" placeholder='What do you need?' />
            <button className='search-btn'>Search</button>
        </div>
       </div>
    );
};

export default SearchBox;
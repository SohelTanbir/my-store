import React, { useState } from 'react';
import './Searchbox.css';




const SearchBox = () => {
    const [searchVal, setSearchVal ] =  useState("");
    const [category, setCategory] = useState([])

// handle search
const handleSearch  = (e)=>{
    e.preventDefault();
    alert('Success');
}
// handle change form data
const handleChange = (e)=>{
    setSearchVal(e.target.value)
}
//handle change category
const handleChangeCategory = (e)=>{
    const newCategory = [...category, e.target.value]
    setCategory(newCategory)
}




    return (
       <div className="container">
         <div className='search-box'>
            <form onSubmit={handleSearch}>
                <select name="category" id="category" onChange={handleChangeCategory}>
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
                <input onBlur={handleChange} type="text" placeholder='What do you need?' />
                <button className='search-btn'>Search</button>
            </form>
        </div>
       </div>
    );
};

export default SearchBox;
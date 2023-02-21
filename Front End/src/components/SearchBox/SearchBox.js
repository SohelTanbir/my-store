import React, { useState } from 'react';
import './Searchbox.css';
import { useSelector, useDispatch } from 'react-redux';
import { getSearchInputVal } from '../../Store/SearchSlice/SearchSlice';


const SearchBox = () => {
    const [searchVal, setSearchVal ] =  useState("");
    const [category, setCategory] = useState([]);
    const [selectedVal, setSelectedVal] = useState("All Categories");
    const dispatch = useDispatch();

// handle search
const handleSearch  = (e)=>{
    e.preventDefault();
    
}

// handle change form data
const handleChange = (e)=>{
    setSearchVal(e.target.value);
    dispatch(getSearchInputVal(searchVal));
}
//handle change category
const handleChangeCategory = (e)=>{
    const newCategory = [...category, e.target.value]
    setCategory(newCategory);
}



    return (
         <div className='search-box'>
            <form onSubmit={handleSearch}>
                <select name="category" id="category" onChange={handleChangeCategory}>
                    <option value="all">All Categories</option>
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
                <input onChange={handleChange} type="text" placeholder='Search what do you need...' />
            </form>
        </div>
    );
};

export default SearchBox;
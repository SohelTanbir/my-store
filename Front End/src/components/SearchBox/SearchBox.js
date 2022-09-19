import React from 'react';
import './Searchbox.css';




const SearchBox = () => {
    return (
       <div className="container">
         <div className='search-box'>
            <input type="text" placeholder='What do you need?' />
            <button className='search-btn'>Search</button>
        </div>
       </div>
    );
};

export default SearchBox;
import React from 'react';
import './Loader.css';
import  {BeatLoader } from "react-spinners";


const Loader = () => {
    return (
        <div className='loader container'>
               <BeatLoader color="#dfb839" />
        </div>
    );
};

export default Loader;
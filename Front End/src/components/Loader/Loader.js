import React from 'react';
import './Loader.css';
import  {BeatLoader } from "react-spinners";


const Loader = ({color}) => {
    return (
        <div className='loader container'>
               <BeatLoader  color={color} />
        </div>
    );
};

export default Loader;
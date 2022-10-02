import React, { useRef, useState } from 'react';
import './PopUp.css';


const PopUp = ({title}) => {
    const [category, setCategory ] = useState("");
    const refElement  = useRef();

    


    // handle change input data
    const handleChange = e =>{
        setCategory(e.target.value);
    }

    // store category in db
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(category)
    }





    return (
        <div ref={refElement} className="popup-message">
            <div className="container">
                <div className="popup-box">
                     <div className="title">
                        <h3>{title}</h3>
                     </div>
                    <form onSubmit={handleSubmit}>
                    <input type="text" onChange={handleChange} name='category' placeholder='Enter Category ' /> <br />
                    <button>Add Now</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PopUp;
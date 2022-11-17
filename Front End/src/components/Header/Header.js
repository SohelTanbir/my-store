import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { userContext } from '../../App';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const {cartItems} =  useContext(userContext);    
    const [cart, setCart ]= cartItems;

    const handleMenu = ()=>{
        if(toggle === false){
           document.querySelector('.navbar ul').style.visibility ='visible';
           document.querySelector('.navbar ul').style.left ='0%';
           setToggle(true)
        }else{
            document.querySelector('.navbar ul').style.visibility ='hidden';
            document.querySelector('.navbar ul').style.left ='-100%';
           setToggle(false)
        }
    }

    return (
       <div className="header">
            <div className="container">
                <div className="row">
                    <div className="logo">
                       <Link to="/"> My<span>Store</span> </Link>
                    </div>
                    <div className="navbar">
                        <ul>
                            <li>
                                <Link to="/home">Home</Link>
                            </li>
                            <li>
                                <Link to="/product">Products</Link>
                            </li>
                            <li>
                                <Link to="/orders/track">TracK Order</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                            
                            <li>
                                <Link to="/login">Login/Sign Up</Link>
                            </li>

                        </ul>
                        <div id="mobileMenu">
                            <a href="#" onClick={handleMenu}>
                            <FontAwesomeIcon icon={faBars} />
                            </a>
                     </div>
                    </div>
                    <div className="addToCart">
                        <span className="product-count">{cart.length?cart.length:0}</span>
                    <Link to="/cart"> <FontAwesomeIcon icon={faCartPlus} /></Link>
                    </div>
                </div>
            </div>
       </div>
    );
};

export default Header;
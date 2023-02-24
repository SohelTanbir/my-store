import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBaby, faBars, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { userContext } from '../../App';
import { Container, Nav, Navbar } from 'react-bootstrap';
import SearchBox from '../SearchBox/SearchBox';

const Header = () => {
    const {userData} = useContext(userContext);
    const [loggedInUser, setLoggedInUser] = userData;
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
            <div className="container-fluid">
                <div className="d-flex justify-content-between align-items-center">
                        <div className="logo">
                        <Link to="/"> My<span>Store</span> </Link>
                        </div>
                    <div className="search-bar">
                        <SearchBox/>
                    </div>
                   <div className="header-action d-flex align-items-center">
                        <div className="login-btn">
                         <Link to="/login">
                            <button>Login</button>
                         </Link>
                        </div>
                        <div className="add-to-cart">
                            <div className="cart-icon">
                                <Link to="/cart">
                                    <FontAwesomeIcon icon={faCartPlus}/>
                                </Link>
                                <span className='cart-total'>5</span>
                            </div>
                        </div>
                        <div className="bars-icon">
                            <FontAwesomeIcon icon={faBars}/>
                        </div>
                   </div>
                </div>
            </div>
            <div className="header-bottom-search">
                <SearchBox/>
            </div>
       </div>
    );
};

export default Header;
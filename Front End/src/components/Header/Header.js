import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBars, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { userContext } from '../../App';
import SearchBox from '../SearchBox/SearchBox';
import RightNav from '../RightNav/RightNav';

const Header = () => {
    const {userData} = useContext(userContext);
    const [loggedInUser, setLoggedInUser] = userData;
    const [toggle, setToggle] = useState(false);
    const [showNav, setShowNav ] = useState(false);

// show or hide right sidebar menu
const handleRightNav = ()=>{
    setShowNav(!false);
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
                        <div className="bars-icon" onClick={handleRightNav}>
                            <FontAwesomeIcon icon={faBars}/>
                        </div>
                   </div>
                </div>
            </div>
            <div className="header-bottom-search">
                <SearchBox/>
            </div>
            {/* mobile menu  */}
            <RightNav showNav={showNav} setShowNav={setShowNav}/>
       </div>
    );
};

export default Header;
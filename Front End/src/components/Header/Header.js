import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartPlus } from '@fortawesome/free-solid-svg-icons'
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
                <div className="d-flex">
                        <div className="col-2">
                        <div className="logo">
                        <Link to="/"> My<span>Store</span> </Link>
                        </div>
                        </div>
                    <div className="col-6   ">
                        <SearchBox/>
                    </div>
                    <div className="menu">
                    <Navbar expand="lg">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Link to="/home">Home</Link>
                                <Link to="/orders/track">TracK Order</Link>
                                <Link to="/contact">Contact</Link>
                                <Link to="/login">Login</Link>
                                <Link to="/cart">
                                        <span>Cart</span>
                                </Link>
                        
                            </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </div>
            </div>
       </div>
    );
};

export default Header;
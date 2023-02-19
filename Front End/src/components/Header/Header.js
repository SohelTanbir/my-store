import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { userContext } from '../../App';
import { Container, Nav, Navbar } from 'react-bootstrap';

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
                <div className="row">
                    <div className="col-lg-2">
                        <div className="logo">
                        <Link to="/"> My<span>Store</span> </Link>
                        </div>
                    </div>
                    <div className="col-lg-9">
                    <Navbar expand="lg">
                        <Container>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Link to="/home">Home</Link>
                                <Link to="/product">Products</Link>
                                <Link to="/orders/track">TracK Order</Link>
                                <Link to="/contact">Contact</Link>
                                <Link to="/login">Login/Sign Up</Link>
                        
                            </Nav>
                            </Navbar.Collapse>
                        </Container>
                        </Navbar>

                        {/* <div className="navbar">
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
                                    {loggedInUser.name?<Link title='User' to="/users/profile">{loggedInUser.name}</Link>:<Link to="/login">Login/Sign Up</Link>}
                                </li>

                            </ul>
                            <div id="mobileMenu">
                                <Link to="#" onClick={handleMenu}>
                                <FontAwesomeIcon icon={faBars} />
                                </Link>
                        </div>
                        </div> */}
                    </div>
                    <div className="col-lg-1">
                        <div className="addToCart">
                            <span className="product-count">{cart?.length?cart.length:0}</span>
                        <Link to="/cart"> <FontAwesomeIcon icon={faCartPlus} /></Link>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    );
};

export default Header;
import React, { useState } from 'react';
import './RightNav.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import userPhoto from '../../images/users/sohelrana.jpg';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCompass, faEnvelope, faPowerOff, faUser } from '@fortawesome/free-solid-svg-icons';


const RightNav =  ({showNav, setShowNav}) =>{

  const handleClose = () => setShowNav(false);

  return (
    <>
      <Offcanvas show={showNav} onHide={handleClose} placement="end" id="Right-menu">
        <Offcanvas.Header>
          <div className="login-user">
                <img src={userPhoto} alt="user" />
                <h4>Sohel Rana</h4>
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body>

        <ul className='sidebar-right-menu'>
                <li>
                  <Link to="/users/profile">
                    <div className="left-icon">
                      <FontAwesomeIcon icon={faUser}/>
                    </div>
                      Profile
                    </Link>
                </li>
                <li>
                  <Link to="/orders/track">
                    <div className="left-icon">
                      <FontAwesomeIcon icon={faCompass}/>
                    </div>
                    Track order
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                  <div className="left-icon">
                      <FontAwesomeIcon icon={faEnvelope}/>
                    </div>
                    Contact
                  </Link>
                </li>                                           
                <li>
                  <Link to="/return/policy">
                    <div className="left-icon">
                      <FontAwesomeIcon icon={faEnvelope}/>
                    </div>
                    Easy Return
                  </Link>
                </li>
              
                <li>
                  <Link to="#">
                  <div className="left-icon">
                      <FontAwesomeIcon icon={faPowerOff}/>
                    </div>
                    Log out
                  </Link>
                </li>
      </ul>
      
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default RightNav;
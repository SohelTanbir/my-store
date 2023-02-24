import React, { useState } from 'react';
import './RightNav.css';
import Offcanvas from 'react-bootstrap/Offcanvas';

const RightNav =  ({showNav, setShowNav}) =>{

  const handleClose = () => setShowNav(false);

  return (
    <>
      <Offcanvas show={showNav} onHide={handleClose} placement="end" id="Right-menu">
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default RightNav;
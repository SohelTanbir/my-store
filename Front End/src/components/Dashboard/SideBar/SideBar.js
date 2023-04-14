import React from 'react';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {    faCog, faEdit, faEnvelope, faLayerGroup, faPlusSquare,faQrcode,faTh, faUserPlus, faUsers} from '@fortawesome/free-solid-svg-icons'
import { faBlogger } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


const SideBar = () => {
    return (
        <div className="sideBar">
                    <ul className='sidebar-with-text'>
                        <li>
                            <Link to="/dashboard"><FontAwesomeIcon icon={faTh} /> Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/products/addproduct"><FontAwesomeIcon icon={faPlusSquare} /> Add Product</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/products/manage"><FontAwesomeIcon icon={faEdit} /> Products</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/orders/all"><FontAwesomeIcon icon={faLayerGroup} /> Orders</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/category/all"><FontAwesomeIcon icon={faQrcode} /> Category</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/admin/users"><FontAwesomeIcon icon={faUsers} /> Users</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/users/message"><FontAwesomeIcon icon={faEnvelope} /> Mesages <span className="badge bg-danger">4</span></Link>
                        </li>
                        <li>
                            <Link><FontAwesomeIcon icon={faCog} /> Setting</Link>
                        </li>
                    </ul>
                    <ul className='sidebar-without-text'>
                        <li title='Dashboard'>
                            <Link to="/dashboard"><FontAwesomeIcon icon={faTh} /></Link>
                        </li>
                        <li title='Add Product'>
                            <Link to="/dashboard/products/addproduct"><FontAwesomeIcon icon={faPlusSquare} /></Link>
                        </li>
                        <li title='Manage Product'>
                            <Link to="/dashboard/products/manage"><FontAwesomeIcon icon={faEdit} /></Link>
                        </li>
                        <li title='Orders'>
                            <Link to="/dashboard/orders/all"><FontAwesomeIcon icon={faLayerGroup} /></Link>
                        </li>
                        <li title='Category'>
                            <Link to="/dashboard/category/all"><FontAwesomeIcon icon={faQrcode} /></Link>
                        </li>
                        <li title='users'>
                            <Link to="/dashboard/admin/users"><FontAwesomeIcon icon={faUsers} /></Link>
                        </li>
                        <li title='message'>
                            <Link to="/dashboard/users/message"><FontAwesomeIcon icon={faEnvelope} /></Link>
                        </li>
                        <li title='Setting'>
                            <Link><FontAwesomeIcon icon={faCog} /></Link>
                        </li>
                    </ul>
        </div>
    );
};

export default SideBar;
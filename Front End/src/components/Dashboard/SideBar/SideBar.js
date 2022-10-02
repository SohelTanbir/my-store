import React from 'react';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {    faCog, faEdit, faLayerGroup, faPlusSquare,faTh, faUserPlus} from '@fortawesome/free-solid-svg-icons'
import { faBlogger } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


const SideBar = () => {
    return (
        <div className="sideBar">
                    <ul>
                        <li>
                            <Link to="/dashboard"><FontAwesomeIcon icon={faTh} /> Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/products/addproduct"><FontAwesomeIcon icon={faPlusSquare} /> Add Product</Link>
                        </li>
                        <li>
                            <Link to="/products/manage"><FontAwesomeIcon icon={faEdit} /> Manage Product</Link>
                        </li>
                        <li>
                            <Link to="/orders/all"><FontAwesomeIcon icon={faLayerGroup} /> Orders</Link>
                        </li>
                        <li>
                            <Link to="/admin/make-admin"><FontAwesomeIcon icon={faUserPlus} /> Make Admin</Link>
                        </li>
                        <li>
                            <Link to="/blogs"><FontAwesomeIcon icon={faBlogger} /> Blogs</Link>
                        </li>
                        <li>
                            <Link to="/manageblogs"><FontAwesomeIcon icon={faEdit} /> Manage Blogs</Link>
                        </li>
                        <li>
                            <Link><FontAwesomeIcon icon={faCog} /> Setting</Link>
                        </li>
                    </ul>
                </div>
    );
};

export default SideBar;
import React from 'react';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBlog, faCog, faCogs, faEdit, faPlusSquare, faPowerOff, faSignOutAlt, faTh, faUserPlus} from '@fortawesome/free-solid-svg-icons'
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
                            <Link to="/addproduct"><FontAwesomeIcon icon={faPlusSquare} /> Add Product</Link>
                        </li>
                        <li>
                            <Link to="/manageproduct"><FontAwesomeIcon icon={faEdit} /> Manage Product</Link>
                        </li>
                        <li>
                            <Link to="/orders"><FontAwesomeIcon icon={faBars} /> Orders</Link>
                        </li>
                        <li>
                            <Link to="/manageorders"><FontAwesomeIcon icon={faEdit} /> Manage Orders</Link>
                        </li>
                        <li>
                            <Link to="/makeadmin"><FontAwesomeIcon icon={faUserPlus} /> Make Admin</Link>
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
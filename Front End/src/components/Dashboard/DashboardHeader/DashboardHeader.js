import React from 'react';
import './DashboardHeader.css';
import user from '../../../images/user-photo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPowerOff} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'




const DashboardHeader = () => {
    return (
        <div className="dashboradHeader">
            <div className="dashboard-header">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-3">
                            <div className="logo">
                                <Link to="/">My<span>Store</span></Link>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="activeUser align-items-center">
                                <p>Admin</p>
                                <div className="user-photo">
                                    <img src={user} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHeader;
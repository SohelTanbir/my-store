import React from 'react';
import './DashboardHeader.css';
import user from '../../../images/user-photo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPowerOff} from '@fortawesome/free-solid-svg-icons'



const DashboardHeader = () => {
    return (
        <div className="dashboradHeader">
            <div className="dashboard-header">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-3">
                            <div className="logo">
                                <a href="/dashboard">My<span>Store</span></a>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="activeUser align-items-center">
                                <div className="user-photo">
                                    <img src={user} alt="" />
                                </div>
                                <p>Admin</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHeader;
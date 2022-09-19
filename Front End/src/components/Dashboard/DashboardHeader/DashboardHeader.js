import React from 'react';
import './DashboardHeader.css';
import user from '../../../images/user-photo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBlog, faCog, faCogs, faEdit, faPlusSquare, faPowerOff, faSignOutAlt, faTh, faUserPlus} from '@fortawesome/free-solid-svg-icons'
import { faBlogger } from '@fortawesome/free-brands-svg-icons';
const DashboardHeader = () => {
    return (
        <div className="dashboradHeader">
            <div className="dashboard-header">
                <div className="container">
                    <div className="row">
                        <div className="logo">
                            <a href="/home">My<span>Store</span></a>
                        </div>
                        <div className="activeUser">
                            <div className="user-photo">
                                <img src={user} alt="" />
                            </div>
                            <p>SohelRana</p>
                            <div className="logout">
                                <p><FontAwesomeIcon icon={faPowerOff} /> Log Out</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHeader;
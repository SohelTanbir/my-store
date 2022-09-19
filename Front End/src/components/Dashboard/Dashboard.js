import React from 'react';
import './Dashboard.css'
import DashboardHeader from './DashboardHeader/DashboardHeader';
import SideBar from './SideBar/SideBar';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <DashboardHeader/>
            <div className="dashboard-main">
                <SideBar/>
                <div className="main-part">
                    <div className="statistics">
                        <div className="container">
                            <div className="row">
                                <div className="total-orders">
                                    <h4>Total Orders</h4>
                                    <h5>100+</h5>
                                </div>
                                <div className="total-blog">
                                    <h4>Total Blog</h4>
                                    <h5>10+</h5>
                                </div>
                                <div className="total-admin">
                                    <h4>Total Admin</h4>
                                    <h5>5+</h5>
                                </div>
                                <div className="total-review">
                                    <h4>Total Review</h4>
                                    <h5>52+</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dashboard-grap">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
import React from 'react';
import './ServiceCard.css';


const ServiceCard = ({service}) => {
    return (
        <div className="card">
                    <div className="col-3">
                        <div className="row">
                            <div className="col">
                                <img src={service.imgUrl} alt="" />
                            </div>
                            <div className="service-text">
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default ServiceCard;
import React from 'react';
import { Link } from 'react-router-dom';

const HomeService = (props) => {

    const { id, name, img, details } = props.service;

    return (
        <div className="col-md-4 g-4 service">
            <div className="card border-info" style={{width:"18rem"}}>
                <img src={img} className="card-img-top" alt="..."/>
                <div class ="card-body">
                <h3 class ="card-title">{name}</h3>
                <p class ="card-text">{details}</p>
                <Link to={`/service/${id}`}><button className="btn btn-primary">See Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HomeService;
import React from 'react';

const Service = (props) => {

    const{id,name,img,details} = props.service;

    return (
        <div>
            <h1>Id: {id}</h1>
        </div>
    );
};

export default Service;
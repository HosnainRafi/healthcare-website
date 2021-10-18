import React from 'react';

const Doctor = (props) => {

    const { id, name, work, details, img } = props.doctor;

    return (
        <div className="col-md-4 g-4 service">
            <div className="card border-info" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div class="card-body">
                    <h5>{work}</h5>
                    <h3 class="card-title">{name}</h3>
                    <p class="card-text">{details}</p>
                    <button className="btn btn-success">See Details</button>
                </div>
            </div>
        </div>
    );
};

export default Doctor;
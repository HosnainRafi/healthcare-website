import React from 'react';
import doctor from '../../../images/doctor1.jpg'
import './Team.css'

const Team = () => {
    return (
        <div className="team">
            <div className="container container-fluid">
            <div className="row">
                <div className="col-md-6 team-title d-flex flex-column justify-content-center">
                    <h3>Dr. Stephanie Wosniack</h3>
                    <br />
                    <h1>Our <span style={{color:'#1d7871', fontWeight:700}}>Team</span></h1>
                    <br />
                    <p>Dr. Stephanie Wosniack is dedicated to providing her patients with the best possible care. Her loves in life include her husband, Craig, two cattle dogs, Suture and Kanga, a Malinois, Kiva, and her two horses, Widget and Doc.</p>
                </div>
                <div className="col-md-6 img-fluid">
                    <img className="img-fluid" src={doctor} alt="" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Team;
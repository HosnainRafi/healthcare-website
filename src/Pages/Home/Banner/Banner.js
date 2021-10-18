import React from 'react';
import { useHistory } from 'react-router';
import './Banner.css'

const Banner = () => {
    const history = useHistory();

    const handleFindBtn = () => {
        history.push('/services');
    }

    const handleAboutBtn = () => {
        history.push('/about')
    }

    return (
        <div className="banner">
            <div className="row container-fluid">
                <div className="col-md-1">

                </div>
                <div className="col-md-5 banner-details">
                    <h1>WE TAKE <span style={{color:"red"}}>CARE</span></h1>
                    <br />
                    <h3 className="banner-description">We at MediCare are always fully focused on helping your child and you to overcame any hurdle, whether it’s chicken pox or just a seasonal flue.</h3>
                    <br />
                    <button onClick={handleAboutBtn} className="btn btn-customize text-white find-btn m-3 px-3 py-2">Find Out More</button>
                    <button onClick={handleFindBtn} className="btn btn btn-primary about-btn m-3 px-3 py-2">About Us</button>
                </div>
                <div className="col-md-6">

                </div>
            </div>
        </div>
    );
};

export default Banner;
import React from 'react';
import { useHistory } from 'react-router';
import img from '../../images/404-error.jpg'

const NotFound = () => {
    const history = useHistory();

    const handleHome = () => {
        history.push('/home');
    }
    return (
        <>
            <div className="container-fluid img-fluid text-center">
                <img src={img} alt="" />
                <br />
                
            </div>
            <div className= "text-center">
            <button className="btn btn-warning text-white px-4 py-2" onClick={handleHome}>Go Home</button>
            </div>
        </>
            

    );
};

export default NotFound;
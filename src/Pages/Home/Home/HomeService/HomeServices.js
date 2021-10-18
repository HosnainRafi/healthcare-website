import React from 'react';
import { useHistory } from 'react-router';
import useServices from '../../../../Hooks/useServices';
import HomeService from './HomeService/HomeService';

const HomeServices = () => {
    const { services } = useServices();
    const history = useHistory();
    const handleServices = () => {
        history.push('/services')
    }
    
    return (
        <div>
            <div className=" services">
            <div className="container">
                <h1 className="text-center">Our <span style={{ color: "#1d7871", fontWeight: "700" }}>Services</span></h1>
                <div className="row services-card">
                    {
                        services.slice(0,6).map(homeService => <HomeService
                            key={homeService.id}
                            service = {homeService}
                        ></HomeService>)
                    }
                </div>
                <div className=" mx-auto text-center">
                <button onClick={handleServices} className="btn btn-warning text-white px-3 py-2">See All Services</button>
                </div>
                
            </div>
        </div>
        </div>
    );
};

export default HomeServices;
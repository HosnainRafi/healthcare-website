import React from 'react';
import useServices from '../../Hooks/useServices';
import Service from './Service/Service';
import './Services.css'


const Services = () => {
    const { services } = useServices();

    return (
        <div className=" services">
            <div className="container">
                <h1 className="text-center">Our <span style={{ color: "#1d7871", fontWeight: "700" }}>Services</span></h1>
                <div className="row services-card">
                    {
                        services.slice(0,6).map(service => <Service
                            key={service.id}
                            service = {service}
                        ></Service> )
                    }
                </div>
                
            </div>
        </div>

    );
};

export default Services;
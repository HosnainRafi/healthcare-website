import React from 'react';
import useServices from '../../Hooks/useServices';
import Service from './Service/Service';


const Services = () => {
    const { services } = useServices();
    console.log(services);

    return (
        <div className=" services">
            <div className="container">
                <h1 className="text-center">Our <span style={{ color: "#1d7871", fontWeight: "700" }}>Services</span></h1>
                <div className="row">
                    {
                        services.slice(0,3).map(service => <Service
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
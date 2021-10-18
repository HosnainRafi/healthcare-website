import React from 'react';
import { useParams } from 'react-router';
import useServices from '../../../Hooks/useServices';

const ServiceDetails = () => {
    const {id} = useParams();
    const {services} = useServices();
    const detail = services?.find(service => service?.id === Number(id));
    console.log(detail);

    return (
        <div>
            <div class="card border-primary mb-3 mx-auto" style={{maxWidth: "540px"}}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={detail?.img} height="400px" class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5>{detail?.work}</h5>
                            <h3 class="card-title">{detail?.name}</h3>
                            <p class="card-text">{detail?.details}</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
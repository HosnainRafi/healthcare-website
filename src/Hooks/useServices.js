import React, { useEffect, useState } from 'react';

const useServices = () => {

    const [services,setServices] =useState([]);
    const [doctors,setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/HosnainRafi/red-onion-restaurant/main/public/services.json')
        .then(res=> res.json())
        .then(data => setServices(data))
    },[]);

    

    return {
        services,
        doctors
    }
};

export default useServices;
import React, { useEffect, useState } from 'react';

const useDoctors = () => {
    const [doctors,setDoctors] = useState();
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/HosnainRafi/red-onion-restaurant/main/public/doctors.json')
        .then(res=> res.json())
        .then(data => setDoctors(data))
    },[]);

    return {
        doctors
    }
};

export default useDoctors;
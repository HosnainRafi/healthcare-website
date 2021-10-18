import React from 'react';
import useDoctors from '../../Hooks/useDoctors';
import Doctor from './Doctor/Doctor';
import './Doctors.css'

const Doctors = () => {
    const { doctors } = useDoctors();

    return (
        <div className=" doctors">
            <div className="container">
                <h1 className="text-center">Our <span style={{ color: "#1d7871", fontWeight: "700" }}>Doctors</span></h1>
                <div className="row doctors-card">
                    {
                        doctors?.slice(0,6).map(doctor => <Doctor
                            key={doctor.id}
                            doctor = {doctor}
                        ></Doctor> )
                    }
                </div>
                
                
            </div>
        </div>

    );
};

export default Doctors;
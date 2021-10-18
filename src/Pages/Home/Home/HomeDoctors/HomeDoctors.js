import React from 'react';
import { useHistory } from 'react-router';
import useDoctors from '../../../../Hooks/useDoctors';
import HomeDoctor from './HomeDoctor/HomeDoctor';
import './HomeDoctors.css'

const HomeDoctors = () => {

    const { doctors } = useDoctors();
    const history = useHistory();
    const handleDoctors = () => {
        history.push('/doctors')
    }

    return (
        <div>
            <div className=" doctors">
            <div className="container">
                <h1 className="text-center">Our <span style={{ color: "#1d7871", fontWeight: "700" }}>Doctors</span></h1>
                <div className="row doctors-card">
                    {
                        doctors?.slice(0,3).map(doctor => <HomeDoctor
                            key={doctor.id}
                            doctor = {doctor}
                        ></HomeDoctor> )
                    }
                </div>
                <div className=" mx-auto text-center m-4">
                <button onClick={handleDoctors} className="btn btn-warning text-white px-3 py-2">See All Doctors</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default HomeDoctors;
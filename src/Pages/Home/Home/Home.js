import React from 'react';
import AboutUs from '../../AboutUs/AboutUs';
import Doctors from '../../Doctors/Doctors';
import Banner from '../Banner/Banner';
import Team from '../Team/Team';
import HomeDoctors from './HomeDoctors/HomeDoctors';
import HomeServices from './HomeService/HomeServices';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Team></Team>
            <HomeDoctors></HomeDoctors>
            <HomeServices></HomeServices>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;
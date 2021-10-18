import React from 'react';
import AboutUs from '../../AboutUs/AboutUs';
import Doctors from '../../Doctors/Doctors';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import Team from '../Team/Team';
import HomeServices from './HomeService/HomeServices';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Team></Team>
            <Doctors></Doctors>
            <HomeServices></HomeServices>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;
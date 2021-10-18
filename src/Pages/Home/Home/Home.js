import React from 'react';
import AboutUs from '../../AboutUs/AboutUs';
import Doctors from '../../Doctors/Doctors';
import Services from '../../Services/Services';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Team></Team>
            <Doctors></Doctors>
            <Services></Services>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;
import React from 'react';
import AboutUs from '../../AboutUs/AboutUs';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;
import React from 'react';
import AboutUs from '../../AboutUs/AboutUs';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;
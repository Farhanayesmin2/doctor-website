import React from 'react';
import InfoCards from '../InfoCard/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>   
        <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>

        </div>
    );
};

export default Home;
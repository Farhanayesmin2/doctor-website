import React from 'react';
import InfoCards from '../InfoCard/InfoCards';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
            <Services></Services>   
            <InfoCards></InfoCards>
            <Testimonial></Testimonial>

        </div>
    );
};

export default Home;
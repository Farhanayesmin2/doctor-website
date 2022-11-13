import React from 'react';
import InfoCards from '../InfoCard/InfoCards';
import Services from '../Services/Services';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
           <Banner></Banner>

         <Services></Services>   
         <InfoCards></InfoCards>

        </div>
    );
};

export default Home;
import React from 'react';
import Banner from './Banner';
import Partner from './Partner';
import ReserveCard from './ReserveCard';
import Hospital from './Hospital';
import Facilites from './Facilites';
import Footer from '../Footer';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Partner/>
            <ReserveCard/>
            <Hospital/>
            <Facilites/>
            <Footer/>
        </div>
    );
};

export default Home;
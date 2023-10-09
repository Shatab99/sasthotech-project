import React from 'react';
import Navbar from './Components/Home/Navbar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='font-popins bg-[#F9FBFC]'>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Root;
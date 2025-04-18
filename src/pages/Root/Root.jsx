import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {
    return (
    <div className="mx-auto max-w-[1170px]">
           <div className="h-16">
            <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <div className='mt-10'>
            <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Root;
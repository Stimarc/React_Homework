import React from 'react';
import {Outlet} from 'react-router-dom';
import { Header } from '.';

export const Layout = () => {
    return (
        <>
           <Header />

            <main className='main'>
                <Outlet/>
            </main>

            <footer className='footer'>Copyright 2023</footer>
        </>
    );
};

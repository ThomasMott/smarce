import React from 'react';
import { Outlet } from 'react-router-dom';

import Nav from '../components/Nav/Nav';
import Footer from '../components/Nav/Footer';

export default function Root() {
    return (
        <>
            <Nav />
            <section className="my-28 mx-12">
                <Outlet />
            </section>
            <Footer />
        </>
    );
}

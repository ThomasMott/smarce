import React from 'react';
import {Outlet} from 'react-router-dom';

import Nav from '../components/Nav/Nav';

export default function Root() {
    return (
        <>
            <Nav />
            <div className="my-20 mx-12">
                <Outlet />
            </div>
        </>
    );
}

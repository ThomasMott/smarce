import React from 'react';
import {Outlet} from 'react-router-dom';

import Nav from '../components/Nav/Nav';

export default function Root() {
    return (
        <>
            <Nav />
            <body className="my-28 mx-12">
                <Outlet />
            </body>
        </>
    );
}

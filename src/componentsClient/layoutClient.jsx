import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderClient from './headerClient';

function LayoutClient() {
    return (
        <React.Fragment>
            <HeaderClient />
            <Outlet />
        </React.Fragment>
    )
}

export default LayoutClient
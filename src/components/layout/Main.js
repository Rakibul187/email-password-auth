import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <nav className='text-end me-5 fs-5 fw-semibold decoration-none'>
                <Link className='me-3' to='login'>Login</Link>
                <Link to='register'>Register</Link>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
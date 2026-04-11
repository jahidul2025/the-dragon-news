import React from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png';

const Navbar = () => {
    return (
        <div className='flex justify-between mt-5 items-center'>
            <div className='' ></div>
            <div className='nav flex gap-4 items-center justify-center'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>

            <div className='flex gap-2 items-center' >
                <img src={userIcon} alt="" />
                <Link to='/auth/login' className='btn btn-primary px-8'>Login</Link>

            </div>
        </div>
    );
};

export default Navbar;
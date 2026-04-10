import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png';

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
                <img src={user} alt="" />
                <button className='btn btn-primary px-8'>Login</button>

            </div>
        </div>
    );
};

export default Navbar;
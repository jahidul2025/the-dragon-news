import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = use(AuthContext);
    const handelLogOut = () => {
        console.log('user trying to log out')
        logOut()
        .then(()=>{
            alert("you logOut successfully")
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    return (
        <div className='flex justify-between mt-5 items-center'>
            <div className='text-secondary' >{user && user.email}</div>
            <div className='nav flex gap-4 items-center justify-center'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>

            <div className='flex gap-2 items-center' >
                <img src={userIcon} alt="" />
                {
                    user ? <button onClick={handelLogOut} className='btn btn-primary px-8'>LogOut</button> : <Link to='/auth/login' className='btn btn-primary px-8'>Login</Link>
                }


            </div>
        </div>
    );
};

export default Navbar;
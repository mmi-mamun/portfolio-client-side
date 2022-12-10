import React from 'react';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import navLogo from '../../src/assets/logo/logo-1.png'

const Navbar = () => {
    const menuItem = <>
        <li className='font-bold'><Link to="/">Home</Link></li>
        <li className='font-bold'><Link to="/skills">Skills</Link></li>
        <li className='font-bold'><Link to="/projects">Projects</Link></li>
        <li className='font-bold'><Link to="/about">About</Link></li>
        <li className='font-bold'><Link to="/contact">Contact Me</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">
                    <img className='max-w-[70px]' src={navLogo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/resume' className="btn btn-outline btn-primary btn-sm">View Resume <FaEye className='ml-2'></FaEye></Link>
                {/* <a className='btn btn-outline btn-primary btn-sm' href="https://drive.google.com/file/d/1-pcilZ8N2yuj8xQ5c558Mc3EviUjxPWr/view?usp=sharing" target="_blank" rel='noreferrer'><FaEye className='mr-2'></FaEye>Resume</a> */}
            </div>
        </div>
    );
};

export default Navbar;
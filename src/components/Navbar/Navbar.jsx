import React from 'react';
import navImg from '../../assets/logo.png'

const Navbar = () => {
    return (
        <div className="navbar mx-auto w-11/12">
            <div className="flex-1">
                <a className="text-xl">
                    <img className='w-15 h-15' src={navImg} alt="" />
                </a>
            </div>
            <div className="flex gap-1">
                <span>10000 USD</span>
            </div>
        </div>
    );
};

export default Navbar;
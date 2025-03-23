import React from 'react';
import logo from '../assets/images/logo.png';
import { BsCoin } from "react-icons/bs"; 

const Nav = ({ count }) => {
    return (
        <div className=' flex justify-between items-center bg-slate-200  fixed  top-0 w-[1250px] z-50 px-5 py-3 shadow-md mt-2 ml-8 rounded-xl '>
            <div>
                <img src={logo} alt="Logo" />
            </div>
            <div>
                <ul className='flex gap-5'>
                    <li>Home</li>
                    <li>Fixture</li>
                    <li>Teams</li>
                    <li>Schedules</li>
                </ul>
            </div>
            <div>
                <button className='w-40 h-10 border-2 rounded-xl bg-[#FFFFFF] flex items-center justify-center gap-5'>
                    {count} Coin <BsCoin />
                </button>
            </div>
        </div>
    );
};

export default Nav;

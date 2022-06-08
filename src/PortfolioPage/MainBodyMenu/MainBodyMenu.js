import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const MainBodyMenu = () => {
    return (
        <div className='sticky bg-slate-900 top-0 z-50 mb-36 py-6 px-10'>
            <div class="dropdown dropdown-end flex justify-end">
                <div className='text-lg text-gray-400 flex items-center'>
                    <span>Menu</span>
                    <label tabindex="0" class="btn bg-transparent border-0 px-1.5 hover:bg-transparent"><FontAwesomeIcon icon={faBars} className='text-xl text-gray-400 hover:text-white'></FontAwesomeIcon></label>
                </div>
                <ul tabindex="0" class="dropdown-content menu py-2 mt-10 w-32">
                    <li><a className='border border-gray-600 rounded-tl-lg p-1.5 mx-0.5 text-gray-500 hover:bg-amber-500 hover:text-white' href="/">Profile</a></li>
                    <li><a className='border border-gray-600 p-1.5 mx-0.5 text-gray-500 hover:bg-amber-500 hover:text-white' href="/">My Skills</a></li>
                    <li><a className='border border-gray-600 p-1.5 mx-0.5 text-gray-500 hover:bg-amber-500 hover:text-white' href="/">Projects</a></li>
                    <li><a className='border border-gray-600 rounded-lg rounded-t-none p-1.5 mx-0.5 text-gray-500 hover:bg-amber-500 hover:text-white' href="/">Contact Me</a></li>
                </ul>
            </div>
        </div>
    );
};

export default MainBodyMenu;
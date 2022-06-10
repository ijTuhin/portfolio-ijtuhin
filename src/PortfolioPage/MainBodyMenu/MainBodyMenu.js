import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const MainBodyMenu = () => {
    return (
        <div className='flex flex-col justify-center items-end w-screen fixed z-50 top-[50%] bottom-[50%] right-3 pl-3'>
            <a href='https://github.com/ijTuhin' target="_blank" rel="noreferrer noopener" className="rounded-full bg-slate-700/50 hover:bg-slate-300 p-2.5 text-gray-700 mb-2.5 -ml-1.5 hover:text-gray-500 hover:-translate-x-3 transform transition ease-in-out delay-150">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="w-3.5 h-3.5"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
            </a>
            <a href='https://www.linkedin.com/in/israt-jahan-tuhin-2795bb1b7/' target="_blank" rel="noreferrer noopener" className="rounded-full bg-slate-700/50 hover:bg-slate-300 p-2.5 text-gray-700 mb-2.5 -ml-1.5 hover:text-gray-500 hover:-translate-x-3 transform transition ease-in-out delay-150">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className='bg-white'><path d="M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"/></svg>
            </a>
            <a href='/' target="_blank" rel="noreferrer noopener" className="rounded-full bg-slate-700/50 hover:bg-slate-300 p-2.5 text-gray-700 mb-2.5 -ml-1.5 hover:text-gray-500 hover:-translate-x-3 transform transition ease-in-out delay-150">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-3.5 h-3.5"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>
            </a>
            <a href='/' target="_blank" rel="noreferrer noopener" className="rounded-full bg-slate-700/50 hover:bg-slate-300 p-2.5 text-gray-700 mb-2.5 -ml-1.5 hover:text-gray-500 hover:-translate-x-3 transform transition ease-in-out delay-150">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" class="w-3.5 h-3.5"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>
            </a>
            {/* <div class="dropdown dropdown-end flex justify-end">
                <div className='text-lg text-gray-400 flex items-center'>
                    <span className='md:inline hidden'>Menu</span>
                    <label tabindex="0" class="btn bg-transparent border-0 px-1.5 hover:bg-transparent"><FontAwesomeIcon icon={faBars} className='text-xl text-gray-400 hover:text-white'></FontAwesomeIcon></label>
                </div>
                <ul tabindex="0" class="dropdown-content menu py-2 mt-10 w-32">
                    <li><a className='border border-gray-600 rounded-tl-lg p-1.5 mx-0.5 text-gray-500 hover:bg-amber-500 hover:text-white' href="#profile">Profile</a></li>
                    <li><a className='border border-gray-600 p-1.5 mx-0.5 text-gray-500 hover:bg-amber-500 hover:text-white' href="#skill">My Skills</a></li>
                    <li><a className='border border-gray-600 p-1.5 mx-0.5 text-gray-500 hover:bg-amber-500 hover:text-white' href="#service">My Services</a></li>
                    <li><a className='border border-gray-600 p-1.5 mx-0.5 text-gray-500 hover:bg-amber-500 hover:text-white' href="#project">Projects</a></li>
                    <li><a className='border border-gray-600 rounded-lg rounded-t-none p-1.5 mx-0.5 text-gray-500 hover:bg-amber-500 hover:text-white' href="#contact">Contact Me</a></li>
                </ul>
            </div> */}
        </div>
    );
};

export default MainBodyMenu;
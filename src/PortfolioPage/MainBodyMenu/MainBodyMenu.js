import { faCode, faMessage, faNoteSticky, faProjectDiagram, faToolbox, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './MainBodyMenu.css';

const MainBodyMenu = () => {
    return (
        <div className='flex flex-col justify-center items-end w-screen fixed z-40 top-[48%] bottom-[52%] right-3 pl-3'>
            <div class="tool-tip">
                <a href='#profile' className="rounded-full w-8 bg-slate-700/50 hover:bg-slate-300 text-gray-700 mb-2.5 flex justify-center py-2 hover:text-gray-500 hover:-translate-x-3 transform transition ease-in-out delay-150">
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> <span className='tooltiptext '>About</span>
                </a>
            </div>
            <div class="tool-tip">
                <a href='#skill' className="rounded-full w-8 bg-slate-700/50 hover:bg-slate-300 text-gray-700 mb-2.5 flex justify-center py-2 hover:text-gray-500 hover:-translate-x-3 transform transition ease-in-out delay-150">
                    <FontAwesomeIcon className='' icon={faCode}></FontAwesomeIcon> <span className='tooltiptext '>Skills</span>
                </a>
            </div>
            <div class="tool-tip">
                <a href='#project' className="rounded-full w-8 bg-slate-700/50 hover:bg-slate-300 text-gray-700 mb-2.5 flex justify-center py-2 hover:text-gray-500 hover:-translate-x-3 transform transition ease-in-out delay-150">
                    <FontAwesomeIcon icon={faProjectDiagram}></FontAwesomeIcon> <span className='tooltiptext '>Projects</span>
                </a>
            </div>
            <div class="tool-tip">
                <Link to='/blogs' className="rounded-full w-8 bg-slate-700/50 hover:bg-slate-300 text-gray-700 mb-2.5 flex justify-center py-2 hover:text-gray-500 hover:-translate-x-3 transform transition ease-in-out delay-150">
                    <FontAwesomeIcon icon={faNoteSticky}></FontAwesomeIcon> <span className='tooltiptext '>Blogs</span>
                </Link>
            </div>
            <div class="tool-tip">
                <a href='#service' className="rounded-full w-8 bg-slate-700/50 hover:bg-slate-300 text-gray-700 mb-2.5 flex justify-center py-2 hover:text-gray-500 hover:-translate-x-3 transform transition ease-in-out delay-150">
                    <FontAwesomeIcon icon={faToolbox}></FontAwesomeIcon> <span className='tooltiptext '>Services</span>
                </a>
            </div>
            <div class="tool-tip">
                <a href='#contact' className="rounded-full w-8 bg-slate-700/50 hover:bg-slate-300 text-gray-700 mb-2.5 flex justify-center py-2 hover:text-gray-500 hover:-translate-x-3 transform transition ease-in-out delay-150">
                    <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon> <span className='tooltiptext '>Contact</span>
                </a>
            </div>

            {/*
            <a href='#profile' className="rounded-full w-8 bg-slate-700/50 hover:bg-slate-300 text-gray-700 mb-2.5 flex justify-center py-2 hover:text-gray-500 hover:-translate-x-3 transform transition ease-in-out delay-150">
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            </a>
            <a href='#skill' className="rounded-full w-8 bg-slate-700/50 hover:bg-slate-300 text-gray-700 mb-2.5 flex justify-center py-2 hover:text-gray-500 hover:-translate-x-3 transform transition ease-in-out delay-150">
                <FontAwesomeIcon className='' icon={faCode}></FontAwesomeIcon>
            </a>
            <a href='#project' className="rounded-full w-8 bg-slate-700/50 hover:bg-slate-300 text-gray-700 mb-2.5 flex justify-center py-2 hover:text-gray-500 hover:-translate-x-3 transform transition ease-in-out delay-150">
                <FontAwesomeIcon icon={faProjectDiagram}></FontAwesomeIcon>
            </a>
            <a href='#service' className="rounded-full w-8 bg-slate-700/50 hover:bg-slate-300 text-gray-700 mb-2.5 flex justify-center py-2 hover:text-gray-500 hover:-translate-x-3 transform transition ease-in-out delay-150">
                <FontAwesomeIcon icon={faToolbox}></FontAwesomeIcon>
            </a>
            <a href='#contact' className="rounded-full w-8 bg-slate-700/50 hover:bg-slate-300 text-gray-700 mb-2.5 flex justify-center py-2 hover:text-gray-500 hover:-translate-x-3 transform transition ease-in-out delay-150">
                <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
            </a> 
             */}


        </div>
    );
};

export default MainBodyMenu;
import { faCode, faMessage, faProjectDiagram, faToolbox, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const MainBodyMenu = () => {
    return (
        <div className='flex flex-col justify-center items-end w-screen fixed z-50 top-[48%] bottom-[52%] right-3 pl-3'>
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
        </div>
    );
};

export default MainBodyMenu;
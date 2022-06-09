import { faCameraRetro, faCode, faTv, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const MyService = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-10 mb-96'>
            <h1 className='text-gray-500 text-4xl font-medium mb-10'>My Services</h1>
            <div className='grid grid-cols-4 gap-x-6'>
                <div className='flex flex-col justify-center items-start w-[275px] h-72 pl-10 pr-3 shadow-2xl rounded-md bg-[#1a212b]/50 hover:shadow-md hover:text-amber-400/70'>
                    <FontAwesomeIcon className='text-4xl' icon={faCode}></FontAwesomeIcon>
                    <h2 className='text-[1.5rem] font-semibold'>Web Development</h2>
                </div>
                <div className='flex flex-col justify-center items-start w-[275px] h-72 pl-10 pr-3 shadow-2xl rounded-md bg-[#1a212b]/50 hover:shadow-md hover:text-amber-400/70'>
                    <FontAwesomeIcon className='text-4xl' icon={faTv}></FontAwesomeIcon>
                    <h2 className='text-[1.5rem] font-semibold'>UI/UX Design</h2>
                </div>
                <div className='flex flex-col justify-center items-start w-[275px] h-72 pl-10 pr-3 shadow-2xl rounded-md bg-[#1a212b]/50 hover:shadow-md hover:text-amber-400/70'>
                    <FontAwesomeIcon className='text-4xl' icon={faUserFriends}></FontAwesomeIcon>
                    <h2 className='text-[1.5rem] font-semibold'>Project Management</h2>
                </div>
                <div className='flex flex-col justify-center items-start w-[275px] h-72 pl-10 pr-3 shadow-2xl rounded-md bg-[#1a212b]/50 hover:shadow-md hover:text-amber-400/70'>
                    <FontAwesomeIcon className='text-4xl' icon={faCameraRetro}></FontAwesomeIcon>
                    <h2 className='text-[1.5rem] font-semibold'>Marketing & Strategy</h2>
                </div>
            </div>

        </div>
    );
};

export default MyService;
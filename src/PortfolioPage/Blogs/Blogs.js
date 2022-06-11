import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <div className='flex justify-center items-center bg-gray-800 w-screen h-screen text-gray-500'>
            <div className='absolute top-3 left-0 font-mono'>
                <Link to='/' className='ml-4 font-mono hover:font-medium hover:text-cyan-600'><FontAwesomeIcon icon={faLeftLong}></FontAwesomeIcon> Back</Link>
            </div>
            <h2 className='text-6xl text-cyan-500 text center font-bold'>Coming Soon</h2>
        </div>
    );
};

export default Blogs;
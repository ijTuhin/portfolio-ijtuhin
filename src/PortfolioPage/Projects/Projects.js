import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { projectI1, projectII1, projectIII1, projectIV1 } from '../../index';
const Projects = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='flex justify-center mt-28 mb-10'>
                <span className='border-b-2 border-gray-600 w-20 mt-2.5 mx-2 h-2'></span>
                <h1 className='text-gray-500 text-2xl font-medium font-serif'>Recent Projects</h1>
                <span className='border-b-2 border-gray-600 w-20 mt-2.5 mx-2 h-2'></span>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-x-5 gap-y-3 cards mt-2'>
                <div className="w-[350px] h-52 text-center flex flex-col items-center justify-center relative z-20">
                    <div className='p-2 w-[350px] h-80 relative card-head'>
                        <img className='w-[350px] h-52' src={projectIV1} alt="" />
                        <div className="p-2 absolute inset-0 top-2 left-2 z-10 bg-slate-600/50 flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300 w-[95%] h-[92.5%]">
                            <p className='text-white font-semibold text-2xl'></p>
                            <p className='text-white'><i>MERN-STACK</i></p>
                            <p className='text-white text-sm font-light'>HTML, CSS, React.js, Express.js, MongoDb, Node.js, TailwindCSS</p>
                            <a className='text-white underline hover:text-amber-300' href="/" target='_blank' rel='noreferrer'>View Website</a>
                        </div>
                    </div>
                    <div className='hover:text-gray-400'>
                        <FontAwesomeIcon className='w-4 font-thin mx-1.5' icon={faLink}></FontAwesomeIcon><a className='text-lg' href="https://product-manufacturer-site.web.app/" target='_blank' rel='noreferrer'>Buy-US Manufacturing-Site</a>
                    </div>
                </div>
                <div className="w-[350px] h-52 text-center flex flex-col items-center justify-center relative z-20">
                    <div className='p-2 w-[350px] h-80 relative card-head'>
                        <img className='w-[350px] h-52' src={projectI1} alt="" />
                        <div className="p-2 absolute inset-0 top-2 left-2 z-10 bg-slate-600/50 flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300 w-[95%] h-[92.5%]">
                            <p className='text-white font-semibold text-2xl'></p>
                            <p className='text-white'><i>Full-STACK</i></p>
                            <p className='text-white text-sm font-light'>HTML, CSS, JavaScript, PHP, MySQL, TailwindCSS</p>
                            <a className='text-white underline hover:text-amber-300' href="/" target='_blank' rel='noreferrer'>View Website</a>
                        </div>
                    </div>
                    <div className='hover:text-gray-400'>
                        <FontAwesomeIcon className='w-4 font-thin mx-1.5' icon={faLink}></FontAwesomeIcon><a className='text-lg' href="https://ijtuhin.github.io/travelingSite-php/" target='_blank' rel='noreferrer'>Travelling website</a>
                    </div>
                </div>
                <div className="w-[350px] h-52 text-center flex flex-col items-center justify-center relative z-20">
                    <div className='p-2 w-[350px] h-80 relative card-head'>
                        <img className='w-[350px] h-52' src={projectII1} alt="" />
                        <div className="p-2 absolute inset-0 top-2 left-2 z-10 bg-slate-600/50 flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300 w-[95%] h-[92.5%]">
                            <p className='text-white font-semibold text-2xl'></p>
                            <p className='text-white'><i>MERN-STACK</i></p>
                            <p className='text-white text-sm font-light'>HTML, CSS, React.js, Express.js, MongoDb, Node.js, TailwindCSS</p>
                            <a className='text-white underline hover:text-amber-300' href="/" target='_blank' rel='noreferrer'>View Website</a>
                        </div>
                    </div>
                    <div className='hover:text-gray-400'>
                        <FontAwesomeIcon className='w-4 font-thin mx-1.5' icon={faLink}></FontAwesomeIcon><a className='text-lg' href="https://warehouse-management-ui.web.app/" target='_blank' rel='noreferrer'>Warehouse Management</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
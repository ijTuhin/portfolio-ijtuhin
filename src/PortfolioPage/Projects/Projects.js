import React from 'react';
import { projectI, projectII, projectIII, projectIV, projectV } from '../../index';
import './Projects.css';
const Projects = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='flex justify-center mt-28 mb-10'>
                <span className='border-b-2 border-gray-600 w-20 mt-2.5 mx-2 h-2'></span>
                <h1 className='text-gray-500 text-2xl font-medium font-serif'>Recent Projects</h1>
                <span className='border-b-2 border-gray-600 w-20 mt-2.5 mx-2 h-2'></span>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-x-5 gap-y-5 cards mt-2'>

                <div className='relative project'>
                    <div className='project-badge mx-1'></div>
                    <div className='border-4 rounded-sm border-gray-600'>
                        <img className='w-72' src={projectI} alt="" />
                    </div>
                    <div className="absolute inset-0 z-10 bg-slate-900/70 flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300 w-full h-full p-2 text-center border-4 hover:border-gray-600/70">
                        <p className='text-white font-medium text-xl'>Manufacturing Website</p>
                        <p className='text-white text-sm'><i>MERN-STACK</i></p>
                        <p className='text-white text-xs font-light'>HTML, CSS, React.js, Express.js, MongoDb, Node.js, TailwindCSS</p>
                        <a className='text-white rounded-sm bg-amber-400 hover:bg-amber-500 py-1 px-5 mt-4 hover:text-white' href="https://product-manufacturer-site.web.app/" target='_blank' rel='noreferrer'>View Website</a>
                    </div>
                </div>
                <div className='relative project'>
                    <div className='project-badge mx-1'></div>
                    <div className='border-4 rounded-sm border-gray-600'>
                        <img className='w-72' src={projectII} alt="" />
                    </div>
                    <div className="absolute inset-0 z-10 bg-slate-900/70 flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300 w-full h-full p-2 text-center border-4 hover:border-gray-600/70">
                        <p className='text-white font-medium text-xl'>HeroKu Motor Bike</p>
                        <p className='text-white text-sm'><i>MERN-STACK</i></p>
                        <p className='text-white text-xs font-light'>HTML, CSS, React.js, Express.js, MongoDb, Node.js, TailwindCSS</p>
                        <a className='text-white rounded-sm bg-amber-400 hover:bg-amber-500 py-1 px-5 mt-4 hover:text-white' href="https://warehouse-management-ui.web.app/" target='_blank' rel='noreferrer'>View Website</a>
                    </div>
                </div>
                <div className='relative project'>
                    <div className='project-badge mx-1'></div>
                    <div className='border-4 rounded-sm border-gray-600'>
                        <img className='w-72' src={projectIII} alt="" />
                    </div>
                    <div className="absolute inset-0 z-10 bg-slate-900/70 flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300 w-full h-full p-2 text-center border-4 hover:border-gray-600/70">
                        <p className='text-white font-medium text-xl'>RouteTo Go-Wonder</p>
                        <p className='text-white text-sm'><i>FULL-STACK</i></p>
                        <p className='text-white text-xs font-light'>HTML, CSS, JavaScript, PHP, MySQL, TailwindCSS</p>
                        <a className='text-white rounded-sm bg-amber-400 hover:bg-amber-500 py-1 px-5 mt-4 hover:text-white' href="https://ijtuhin.github.io/travelingSite-php/" target='_blank' rel='noreferrer'>View Website</a>
                    </div>
                </div>
                <div className='relative project'>
                    <div className='project-badge mx-1'></div>
                    <div className='border-4 rounded-sm border-gray-600'>
                        <img className='w-72' src={projectIV} alt="" />
                    </div>
                    <div className="absolute inset-0 z-10 bg-slate-900/70 flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300 w-full h-full p-2 text-center border-4 hover:border-gray-600/70">
                        <p className='text-white font-medium text-xl'>Manufacturing Website</p>
                        <p className='text-white text-sm'><i>MERN-STACK</i></p>
                        <p className='text-white text-xs font-light'>HTML, CSS, React.js, Express.js, MongoDb, Node.js, TailwindCSS</p>
                        <a className='text-white rounded-sm bg-amber-400 hover:bg-amber-500 py-1 px-5 mt-4 hover:text-white' href="https://product-manufacturer-site.web.app/" target='_blank' rel='noreferrer'>View Website</a>
                    </div>
                </div>
                <div className='relative project'>
                    <div className='project-badge mx-1'></div>
                    <div className='border-4 rounded-sm border-gray-600'>
                        <img className='w-72' src={projectV} alt="" />
                    </div>
                    <div className="absolute inset-0 z-10 bg-slate-900/70 flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300 w-full h-full p-2 text-center border-4 hover:border-gray-600/70">
                        <p className='text-white font-medium text-xl'>Manufacturing Website</p>
                        <p className='text-white text-sm'><i>MERN-STACK</i></p>
                        <p className='text-white text-xs font-light'>HTML, CSS, React.js, Express.js, MongoDb, Node.js, TailwindCSS</p>
                        <a className='text-white rounded-sm bg-amber-400 hover:bg-amber-500 py-1 px-5 mt-4 hover:text-white' href="https://product-manufacturer-site.web.app/" target='_blank' rel='noreferrer'>View Website</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
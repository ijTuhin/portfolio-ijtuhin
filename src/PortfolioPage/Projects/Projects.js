import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectI, projectII, projectIII, projectIV, projectV } from '../../index';
import './Projects.css';
const Projects = () => {
    return (
        <div className='w-screen flex flex-col justify-center items-center'>
            <div className='flex justify-center mt-28 mb-10'>
                <span className='border-b-2 border-gray-600 w-20 mt-2.5 mx-2 h-2'></span>
                <h1 className='text-gray-500 text-2xl font-medium font-serif'>Recent Projects</h1>
                <span className='border-b-2 border-gray-600 w-20 mt-2.5 mx-2 h-2'></span>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-x-5 gap-y-5 cards mt-2'>

                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <div className='flex flex-col justify-center items-start w-full h-full shadow-2xl rounded-md bg-[#1a212b]/50 hover:shadow-md hover:text-amber-400/70'>
                                <img className='w-72' src={projectI} alt="" />
                            </div>
                        </div>
                        <div class="flip-card-back">
                            <div className='flex flex-col justify-center items-center w-full h-full shadow-2xl rounded-md bg-[#1a212b]/50 hover:shadow-md text-white'>
                                <p className='text-white font-medium text-xl'>Manufacturing Website</p>
                                <p className='text-white text-sm'><i>MERN-STACK</i></p>
                                <p className='text-white text-xs font-light'>HTML, CSS, React.js, Express.js, MongoDb, Node.js, TailwindCSS, DaisyUI, Firebase</p>
                                <Link to='/project-I'  className='text-white rounded-sm bg-amber-400 hover:bg-amber-500 py-1 px-5 mt-4 hover:text-white'>View Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <div className='flex flex-col justify-center items-start w-full h-full shadow-2xl rounded-md bg-[#1a212b]/50 hover:shadow-md hover:text-amber-400/70'>
                                <img className='w-72' src={projectII} alt="" />
                            </div>
                        </div>
                        <div class="flip-card-back">
                            <div className='flex flex-col justify-center items-center w-full h-full shadow-2xl rounded-md bg-[#1a212b]/50 hover:shadow-md text-white'>
                                <p className='text-white font-medium text-xl'>HeroKu Motor Bike</p>
                                <p className='text-white text-sm'><i>MERN-STACK</i></p>
                                <p className='text-white text-xs font-light'>HTML, CSS, React.js, Express.js, MongoDb, Node.js, TailwindCSS, Firebase</p>
                                <Link to='/project-II'  className='text-white rounded-sm bg-amber-400 hover:bg-amber-500 py-1 px-5 mt-4 hover:text-white'>View Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <div className='flex flex-col justify-center items-start w-full h-full shadow-2xl rounded-md bg-[#1a212b]/50 hover:shadow-md hover:text-amber-400/70'>
                                <img className='w-72' src={projectIII} alt="" />
                            </div>
                        </div>
                        <div class="flip-card-back">
                            <div className='flex flex-col justify-center items-center w-full h-full shadow-2xl rounded-md bg-[#1a212b]/50 hover:shadow-md text-white'>
                                <p className='text-white font-medium text-xl'>RouteTo Go-Wonder</p>
                                <p className='text-white text-sm'><i>FULL-STACK</i></p>
                                <p className='text-white text-xs font-light'>HTML, CSS, JavaScript, PHP, MySQL, TailwindCSS</p>
                                <Link to='/project-III' className='text-white rounded-sm bg-amber-400 hover:bg-amber-500 py-1 px-5 mt-4 hover:text-white'>View Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <div className='flex flex-col justify-center items-start w-full h-full shadow-2xl rounded-md bg-[#1a212b]/50 hover:shadow-md hover:text-amber-400/70'>
                                <img className='w-72' src={projectIV} alt="" />
                            </div>
                        </div>
                        <div class="flip-card-back">
                            <div className='flex flex-col justify-center items-center w-full h-full shadow-2xl rounded-md bg-[#1a212b]/50 hover:shadow-md text-white'>
                                <p className='text-white font-medium text-xl'>Foodie Food</p>
                                <p className='text-white text-sm'><i>Catering Service</i></p>
                                <p className='text-white text-xs font-light'>HTML, CSS, React.js, TailwindCSS, Firebase</p>
                                <Link to='/project-IV'  className='text-white rounded-sm bg-amber-400 hover:bg-amber-500 py-1 px-5 mt-4 hover:text-white'>View Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <div className='flex flex-col justify-center items-start w-full h-full shadow-2xl rounded-md bg-[#1a212b]/50 hover:shadow-md hover:text-amber-400/70'>
                                <img className='w-72' src={projectV} alt="" />
                            </div>
                        </div>
                        <div class="flip-card-back">
                            <div className='flex flex-col justify-center items-center w-full h-full shadow-2xl rounded-md bg-[#1a212b]/50 hover:shadow-md text-white'>
                                <p className='text-white font-medium text-xl'>De Ornam&</p>
                                <p className='text-white text-xs font-light'>HTML, CSS, React.js, TailwindCSS</p>
                                <Link to='/project-V'  className='text-white rounded-sm bg-amber-400 hover:bg-amber-500 py-1 px-5 mt-4 hover:text-white'>View Details</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;
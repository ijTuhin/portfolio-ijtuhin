import { faCameraRetro, faCode, faTv, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css';
import './MyService.css';

const MyService = () => {
    return (
        <div>
            <ScrollAnimation animateIn="animate__backInRight animate__slow" className='md:block hidden'>
                <div className='flex flex-col justify-center items-center w-screen h-screen mb-96 md:mb-6'>

                    <h1 className='text-gray-500 text-4xl font-medium mb-10'>My Services</h1>
                    <div className='grid grid-cols-1 gap-y-6 md:grid-cols-4 md:gap-x-6'>

                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <div className='flex flex-col justify-center items-start w-[275px] h-72 pl-10 pr-3 shadow-2xl rounded-md bg-[#1a212b]/50 hover:shadow-md'>
                                        <FontAwesomeIcon className='text-4xl' icon={faCode}></FontAwesomeIcon>
                                        <h2 className='text-[1.5rem] font-semibold'>Web Development</h2>
                                    </div>
                                </div>
                                <div class="flip-card-back">
                                    <div className='flex flex-col justify-center items-start w-[275px] h-72 pl-10 pr-3 shadow-2xl rounded-md bg-[#1a212b]/50 hover:shadow-md text-white'>
                                        <p>Lorem, ipsum dolor sit amet libero minima ex commodi! consectetur adipisicing elit. Odio eligendi itaque labore, expedita vel nam accusamus, consequuntur optio autem reiciendis provident soluta rem consectetur, ab repellendus </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <div className='flex flex-col justify-center items-start w-[275px] h-72 pl-10 pr-3 shadow-2xl rounded-md bg-[#1a212b]/50 hover:shadow-md hover:text-amber-400/70'>
                                        <FontAwesomeIcon className='text-4xl' icon={faTv}></FontAwesomeIcon>
                                        <h2 className='text-[1.5rem] font-semibold'>UI/UX Design</h2>
                                    </div>
                                </div>
                                <div class="flip-card-back">
                                    <div className='flex flex-col justify-center items-start w-[275px] h-72 pl-10 pr-3 shadow-2xl rounded-md bg-[#1a212b]/50 hover:shadow-md text-white'>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio eligendi itaque labore, expedita vel nam accusamus, consequuntur optio autem reiciendis provident soluta rem consectetur, ab repellendus libero minima ex commodi!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <div className='flex flex-col justify-center items-start w-[275px] h-72 pl-10 pr-3 shadow-2xl rounded-md bg-[#1a212b]/50 hover:shadow-md hover:text-amber-400/70'>
                                        <FontAwesomeIcon className='text-4xl' icon={faUserFriends}></FontAwesomeIcon>
                                        <h2 className='text-[1.5rem] font-semibold'>Project Management</h2>
                                    </div>
                                </div>
                                <div class="flip-card-back">
                                    <div className='flex flex-col justify-center items-start w-[275px] h-72 pl-10 pr-3 shadow-2xl rounded-md bg-[#1a212b]/50 hover:shadow-md text-white'>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio eligendi itaque labore, expedita vel nam accusamus, consequuntur optio autem reiciendis provident soluta rem consectetur, ab repellendus libero minima ex commodi!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <div className='flex flex-col justify-center items-start w-[275px] h-72 pl-10 pr-3 shadow-2xl rounded-md bg-[#1a212b]/50 hover:shadow-md hover:text-amber-400/70'>
                                        <FontAwesomeIcon className='text-4xl' icon={faCameraRetro}></FontAwesomeIcon>
                                        <h2 className='text-[1.5rem] font-semibold'>Marketing & Strategy</h2>
                                    </div>
                                </div>
                                <div class="flip-card-back">
                                    <div className='flex flex-col justify-center items-start w-[275px] h-72 pl-10 pr-3 shadow-2xl rounded-md bg-[#1a212b]/50 hover:shadow-md text-white'>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio eligendi itaque labore, expedita vel nam accusamus, consequuntur optio autem reiciendis provident soluta rem consectetur, ab repellendus libero minima ex commodi!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </ScrollAnimation>
            <div className='flex flex-col justify-center items-center w-screen h-screen mb-96 md:mb-96 md:hidden'>

                <h1 className='text-gray-500 text-4xl font-medium mb-10'>My Services</h1>
                <div className='grid grid-cols-1 gap-y-6 md:grid-cols-4 md:gap-x-6'>
                    <ScrollAnimation animateIn="animate__backInRight animate__slow">
                    <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <div className='flex flex-col justify-center items-start w-[275px] h-72 pl-10 pr-3 shadow-2xl rounded-md bg-[#1a212b]/50 hover:shadow-md'>
                                        <FontAwesomeIcon className='text-4xl' icon={faCode}></FontAwesomeIcon>
                                        <h2 className='text-[1.5rem] font-semibold'>Web Development</h2>
                                    </div>
                                </div>
                                <div class="flip-card-back">
                                    <div className='flex flex-col justify-center items-start w-[275px] h-72 pl-10 pr-3 shadow-2xl rounded-md bg-[#1a212b]/50 hover:shadow-md text-white'>
                                        <p>Lorem, ipsum dolor sit amet libero minima ex commodi! consectetur adipisicing elit. Odio eligendi itaque labore, expedita vel nam accusamus, consequuntur optio autem reiciendis provident soluta rem consectetur, ab repellendus </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__backInLeft animate__slow">
                    <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <div className='flex flex-col justify-center items-start w-[275px] h-72 pl-10 pr-3 shadow-2xl rounded-md bg-[#1a212b]/50 hover:shadow-md hover:text-amber-400/70'>
                                        <FontAwesomeIcon className='text-4xl' icon={faTv}></FontAwesomeIcon>
                                        <h2 className='text-[1.5rem] font-semibold'>UI/UX Design</h2>
                                    </div>
                                </div>
                                <div class="flip-card-back">
                                    <div className='flex flex-col justify-center items-start w-[275px] h-72 pl-10 pr-3 shadow-2xl rounded-md bg-[#1a212b]/50 hover:shadow-md text-white'>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio eligendi itaque labore, expedita vel nam accusamus, consequuntur optio autem reiciendis provident soluta rem consectetur, ab repellendus libero minima ex commodi!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__backInRight animate__slow">
                    <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <div className='flex flex-col justify-center items-start w-[275px] h-72 pl-10 pr-3 shadow-2xl rounded-md bg-[#1a212b]/50 hover:shadow-md hover:text-amber-400/70'>
                                        <FontAwesomeIcon className='text-4xl' icon={faUserFriends}></FontAwesomeIcon>
                                        <h2 className='text-[1.5rem] font-semibold'>Project Management</h2>
                                    </div>
                                </div>
                                <div class="flip-card-back">
                                    <div className='flex flex-col justify-center items-start w-[275px] h-72 pl-10 pr-3 shadow-2xl rounded-md bg-[#1a212b]/50 hover:shadow-md text-white'>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio eligendi itaque labore, expedita vel nam accusamus, consequuntur optio autem reiciendis provident soluta rem consectetur, ab repellendus libero minima ex commodi!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__backInLeft animate__slow">
                    <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <div className='flex flex-col justify-center items-start w-[275px] h-72 pl-10 pr-3 shadow-2xl rounded-md bg-[#1a212b]/50 hover:shadow-md hover:text-amber-400/70'>
                                        <FontAwesomeIcon className='text-4xl' icon={faCameraRetro}></FontAwesomeIcon>
                                        <h2 className='text-[1.5rem] font-semibold'>Marketing & Strategy</h2>
                                    </div>
                                </div>
                                <div class="flip-card-back">
                                    <div className='flex flex-col justify-center items-start w-[275px] h-72 pl-10 pr-3 shadow-2xl rounded-md bg-[#1a212b]/50 hover:shadow-md text-white'>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio eligendi itaque labore, expedita vel nam accusamus, consequuntur optio autem reiciendis provident soluta rem consectetur, ab repellendus libero minima ex commodi!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>

            </div>
        </div>
    );
};

export default MyService;
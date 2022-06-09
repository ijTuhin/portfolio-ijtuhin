import React from 'react';
import { portfolio } from '../../index';
const AboutMe = () => {
    return (
        <div className='md:mb-0 pt-28 mb-[100%]'>
            <div className='w-full flex md:flex-row md:justify-center flex-col-reverse h-screen'>
                <div className='w-[50%] h-[50%] md:ml-16 ml-10 p-4 md:mt-14 relative flex flex-col items-start justify-start'>
                    <div className='md:w-full w-[300px] my-2.5'>
                        <h1 className='text-gray-500 text-2xl font-medium'>About me</h1>
                        <div className='ml-28 -mt-2 border-t-2 border-gray-700 w-[70%]'></div>
                        <h1 className='text-gray-500 -mt-0.5 ml-[85%] text-sm'>ijTuhin638@gmail.com</h1>
                        <h1 className='text-gray-500 ml-[85%] text-xs'>+880-1316797638</h1>
                    </div>
                    <h2 className='text-gray-500 text-sm md:block hidden'>Hello! My name is Israt Jahan Tuhin, a detail-oriented individual with an associate degree in computer science & engineering. I enjoy critical thinking, problem-solving & playful outcomes from programming. In year 2018, I first started my journey as a programmer with C language, then C++. Then, in year 2021, I chose my career path as a React Developer. It's fun to work with codes & ui.</h2>
                    <h2 className='text-gray-500 text-sm md:block hidden'> Expertise in React.js, and problem-solving. Familiar with Node.js, Express.js, MongoDB, PHP, MYSQL. And Familiar with Python, C/C++. I am an adaptive & fast learner. Thus, I am comfortable working with any environment or new technologies. My Educational Qualifications are as follows</h2>
                    <div className='my-2.5 md:block hidden'>
                        <h1 className='text-lg'>- B.Sc in Computer Science & Engineering</h1>
                        <h1 className='text-gray-600 mx-3'> International Islamic University Chittagong, <span className='text-sm'>Sitakundo, Chattagram</span></h1>

                    </div>
                    <div className='mb-2.5 md:block hidden'>
                        <h1 className='text-lg'>- Higher Secondary Certificate</h1>
                        <h1 className='text-gray-600 mx-3'> Hajera-Taju University College, <span className=' text-sm'>Chandgaon, Chattagram</span></h1>

                    </div>
                    <div className='mb-2.5 md:block hidden'>
                        <h1 className='text-lg'>- Secondary School Certificate</h1>
                        <h1 className='text-gray-600 mx-3'> Bakolia Government High School, <span className='text-sm'>Bakolia, Chattagram</span></h1>
                    </div>
                    {/* ================== Mobile ================== */}
                    <div className='md:hidden w-[370px]'>
                        <h2 className='text-gray-500 text-sm'>Hello! My name is Israt Jahan Tuhin, a detail-oriented individual with an associate degree in computer science & engineering. I enjoy critical thinking, problem-solving & playful outcomes from programming. In year 2018, I first started my journey as a programmer with C language, then C++. Then, in year 2021, I chose my career path as a React Developer. It's fun to work with codes & ui.</h2>
                        <h2 className='text-gray-500 text-sm'> Expertise in React.js, and problem-solving. Familiar with Node.js, Express.js, MongoDB, PHP, MYSQL. And Familiar with Python, C/C++. I am an adaptive & fast learner. Thus, I am comfortable working with any environment or new technologies. My Educational Qualifications are as follows,</h2>
                        <div className='my-2.5'>
                            <h1 className='text-lg'>- B.Sc in Computer Science & Engineering</h1>
                            <h1 className='text-gray-600 mx-3'> International Islamic University Chittagong, <span className='text-sm'>Sitakundo, Chattagram</span></h1>

                        </div>
                        <div className='mb-2.5'>
                            <h1 className='text-lg'>- Higher Secondary Certificate</h1>
                            <h1 className='text-gray-600 mx-3'> Hajera-Taju University College, <span className=' text-sm'>Chandgaon, Chattagram</span></h1>

                        </div>
                        <div className='mb-2.5'>
                            <h1 className='text-lg'>- Secondary School Certificate</h1>
                            <h1 className='text-gray-600 mx-3'> Bakolia Government High School, <span className='text-sm'>Bakolia, Chattagram</span></h1>
                        </div>
                    </div>

                </div>
                <div className='w-96 h-96 ml-16 mt-20 relative'>

                    <div className='border-0 z-10 rounded bg-gray-500 w-[12em] h-[12em] absolute top-4 left-14'>
                        <img src={portfolio} alt="" />
                    </div>
                    <div className='border border-gray-500 w-[12em] h-[13.80em] absolute top-6 left-16'>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
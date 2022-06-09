import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { projectI, projectII, projectIII, projectIV, projectV } from '../../index';
import './Projects.css';
const Projects = () => {
    const [isFlippedI, setIsFlippedI] = useState(false);
    const [isFlippedII, setIsFlippedII] = useState(false);
    const [isFlippedIII, setIsFlippedIII] = useState(false);
    const [isFlippedIV, setIsFlippedIV] = useState(false);
    const [isFlippedV, setIsFlippedV] = useState(false);

    const handleFlipI = () => {
        setIsFlippedI(!isFlippedI);
    }
    const handleFlipII = () => {
        setIsFlippedII(!isFlippedII);
    }
    const handleFlipIII = () => {
        setIsFlippedIII(!isFlippedIII);
    }
    const handleFlipIV = () => {
        setIsFlippedIV(!isFlippedIV);
    }
    const handleFlipV = () => {
        setIsFlippedV(!isFlippedV);
    }
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='flex justify-center mt-28 mb-10'>
                <span className='border-b-2 border-gray-600 w-20 mt-2.5 mx-2 h-2'></span>
                <h1 className='text-gray-500 text-2xl font-medium font-serif'>Recent Projects</h1>
                <span className='border-b-2 border-gray-600 w-20 mt-2.5 mx-2 h-2'></span>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-x-5 gap-y-5 cards mt-2'>

                <ReactCardFlip isFlipped={isFlippedI} flipDirection="vertical">
                    <div className='relative project'>
                        <div className='project-badge mx-1'></div>
                        <div className='border-4 rounded-sm border-gray-600'>
                            <img className='w-72' src={projectI} alt="" />
                        </div>
                        <div className="absolute inset-0 z-10 bg-slate-900/70 flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300 w-full h-full p-2 text-center border-4 hover:border-gray-600/70">
                            <p className='text-white font-medium text-xl'>Manufacturing Website</p>
                            <p className='text-white text-sm'><i>MERN-STACK</i></p>
                            <p className='text-white text-xs font-light'>HTML, CSS, React.js, Express.js, MongoDb, Node.js, TailwindCSS</p>
                            <button onClick={handleFlipI} className='text-white rounded-sm bg-amber-400 hover:bg-amber-500 py-1 px-5 mt-4 hover:text-white'>View Details</button>
                        </div>
                    </div>

                    <div className='relative project w-72 bg-white h-full flex flex-col items-center' onClick={handleFlipI}>
                        <p className='text-black text-sm p-2'>1. Different dashboard for admin & user, Which gives them access to the different routes. <br />
                            2. Add a review, Purchase product, view product from the cart, or cancel order option for the User. <br />
                            3. Manage users, delete or change the role of a user to admin, and add or delete products are the
                            functionalities for Admin. <br />
                            4. Email, Google & JWT verification for admin & user. <br />
                            Tools: <small>MongoDb, Express.js, React.js, Node.js, HTML, CSS, Firebase, Heroku, TailwindCSS elements, React AOS.</small></p>
                        <div className='w-full absolute bottom-0'>
                            <a className='w-full block text-white rounded-sm bg-amber-400 hover:bg-amber-500 py-1 px-5 mt-4 hover:text-white' href="https://product-manufacturer-site.web.app/" target='_blank' rel='noreferrer'>Client-Side</a>
                            <a className='w-full block text-white rounded-sm bg-sky-400 hover:bg-sky-500 py-1 px-5 hover:text-white' href="https://product-manufacturer-site.web.app/" target='_blank' rel='noreferrer'>Server-Side</a>
                        </div>
                    </div>
                </ReactCardFlip>
                <ReactCardFlip isFlipped={isFlippedII} flipDirection="vertical">
                    <div className='relative project'>
                        <div className='project-badge mx-1'></div>
                        <div className='border-4 rounded-sm border-gray-600'>
                            <img className='w-72' src={projectII} alt="" />
                        </div>
                        <div className="absolute inset-0 z-10 bg-slate-900/70 flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300 w-full h-full p-2 text-center border-4 hover:border-gray-600/70">
                            <p className='text-white font-medium text-xl'>HeroKu Motor Bike</p>
                            <p className='text-white text-sm'><i>MERN-STACK</i></p>
                            <p className='text-white text-xs font-light'>HTML, CSS, React.js, Express.js, MongoDb, Node.js, TailwindCSS</p>
                            <button onClick={handleFlipII} className='text-white rounded-sm bg-amber-400 hover:bg-amber-500 py-1 px-5 mt-4 hover:text-white'>View Details</button>
                        </div>
                    </div>

                    <div className='relative project w-72 bg-white h-full flex flex-col items-center' onClick={handleFlipII}>
                        <p className='text-black text-sm p-2'>1. Different dashboard for admin & user, Which gives them access to the different routes. <br />
                            2. Add a review, Purchase product, view product from the cart, or cancel order option for the User. <br />
                            3. Manage users, delete or change the role of a user to admin, and add or delete products are the
                            functionalities for Admin. <br />
                            4. Email, Google & JWT verification for admin & user. <br />
                            Tools: <small>MongoDb, Express.js, React.js, Node.js, HTML, CSS, Firebase, Heroku, TailwindCSS elements, React AOS.</small></p>
                        <div className='w-full absolute bottom-0'>
                            <a className='w-full block text-white rounded-sm bg-amber-400 hover:bg-amber-500 py-1 px-5 mt-4 hover:text-white' href="https://product-manufacturer-site.web.app/" target='_blank' rel='noreferrer'>Client-Side</a>
                            <a className='w-full block text-white rounded-sm bg-sky-400 hover:bg-sky-500 py-1 px-5 hover:text-white' href="https://product-manufacturer-site.web.app/" target='_blank' rel='noreferrer'>Server-Side</a>
                        </div>
                    </div>
                </ReactCardFlip>
                <ReactCardFlip isFlipped={isFlippedIII} flipDirection="vertical">
                    <div className='relative project'>
                        <div className='project-badge mx-1'></div>
                        <div className='border-4 rounded-sm border-gray-600'>
                            <img className='w-72' src={projectIII} alt="" />
                        </div>
                        <div className="absolute inset-0 z-10 bg-slate-900/70 flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300 w-full h-full p-2 text-center border-4 hover:border-gray-600/70">
                            <p className='text-white font-medium text-xl'>RouteTo Go-Wonder</p>
                            <p className='text-white text-sm'><i>FULL-STACK</i></p>
                            <p className='text-white text-xs font-light'>HTML, CSS, JavaScript, PHP, MySQL, TailwindCSS</p>
                            <button onClick={handleFlipIII} className='text-white rounded-sm bg-amber-400 hover:bg-amber-500 py-1 px-5 mt-4 hover:text-white'>View Details</button>
                        </div>
                    </div>

                    <div className='relative project w-72 bg-white h-full flex flex-col items-center' onClick={handleFlipIII}>
                        <p className='text-black text-sm p-2'>1. Different dashboard for admin & user, Which gives them access to the different routes. <br />
                            2. Add a review, Purchase product, view product from the cart, or cancel order option for the User. <br />
                            3. Manage users, delete or change the role of a user to admin, and add or delete products are the
                            functionalities for Admin. <br />
                            4. Email, Google & JWT verification for admin & user. <br />
                            Tools: <small>MongoDb, Express.js, React.js, Node.js, HTML, CSS, Firebase, Heroku, TailwindCSS elements, React AOS.</small></p>
                        <div className='w-full absolute bottom-0'>
                            <a className='w-full block text-white rounded-sm bg-amber-400 hover:bg-amber-500 py-1 px-5 mt-4 hover:text-white' href="https://product-manufacturer-site.web.app/" target='_blank' rel='noreferrer'>Client-Side</a>
                            <a className='w-full block text-white rounded-sm bg-sky-400 hover:bg-sky-500 py-1 px-5 hover:text-white' href="https://product-manufacturer-site.web.app/" target='_blank' rel='noreferrer'>Server-Side</a>
                        </div>
                    </div>
                </ReactCardFlip>
                <ReactCardFlip isFlipped={isFlippedIV} flipDirection="vertical">
                    <div className='relative project'>
                        <div className='project-badge mx-1'></div>
                        <div className='border-4 rounded-sm border-gray-600'>
                            <img className='w-72' src={projectIV} alt="" />
                        </div>
                        <div className="absolute inset-0 z-10 bg-slate-900/70 flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300 w-full h-full p-2 text-center border-4 hover:border-gray-600/70">
                            <p className='text-white font-medium text-xl'>Foodie Food</p>
                            <p className='text-white text-sm'><i>Catering Service</i></p>
                            <p className='text-white text-xs font-light'>HTML, CSS, React.js, TailwindCSS, Firebase</p>
                            <button onClick={handleFlipIV} className='text-white rounded-sm bg-amber-400 hover:bg-amber-500 py-1 px-5 mt-4 hover:text-white'>View Details</button>
                        </div>
                    </div>

                    <div className='relative project w-72 bg-white h-full flex flex-col items-center' onClick={handleFlipIV}>
                        <p className='text-black text-sm p-2'>1. Different dashboard for admin & user, Which gives them access to the different routes. <br />
                            2. Add a review, Purchase product, view product from the cart, or cancel order option for the User. <br />
                            3. Manage users, delete or change the role of a user to admin, and add or delete products are the
                            functionalities for Admin. <br />
                            4. Email, Google & JWT verification for admin & user. <br />
                            Tools: <small>MongoDb, Express.js, React.js, Node.js, HTML, CSS, Firebase, Heroku, TailwindCSS elements, React AOS.</small></p>
                        <div className='w-full absolute bottom-0'>
                            <a className='w-full block text-white rounded-sm bg-amber-400 hover:bg-amber-500 py-1 px-5 mt-4 hover:text-white' href="https://catering-service-provider.web.app/" target='_blank' rel='noreferrer'>View Website</a>
                            <a className='w-full block text-white rounded-sm bg-sky-400 hover:bg-sky-500 py-1 px-5 hover:text-white' href="https://github.com/programming-hero-web-course-4/independent-service-provider-ijTuhin" target='_blank' rel='noreferrer'>GitHub-repo</a>
                        </div>
                    </div>
                </ReactCardFlip>
                <ReactCardFlip isFlipped={isFlippedV} flipDirection="vertical">
                    <div className='relative project'>
                        <div className='project-badge mx-1'></div>
                        <div className='border-4 rounded-sm border-gray-600'>
                            <img className='w-72' src={projectV} alt="" />
                        </div>
                        <div className="absolute inset-0 z-10 bg-slate-900/70 flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300 w-full h-full p-2 text-center border-4 hover:border-gray-600/70">
                            <p className='text-white font-medium text-xl'>De Ornam&</p>
                            <p className='text-white text-xs font-light'>HTML, CSS, React.js, TailwindCSS</p>
                            <button onClick={handleFlipV} className='text-white rounded-sm bg-amber-400 hover:bg-amber-500 py-1 px-5 mt-4 hover:text-white'>View Details</button>
                        </div>
                    </div>

                    <div className='relative project w-72 bg-white h-full flex flex-col items-center' onClick={handleFlipV}>
                        <p className='text-black text-sm p-2'>1. Different dashboard for admin & user, Which gives them access to the different routes. <br />
                            2. Add a review, Purchase product, view product from the cart, or cancel order option for the User. <br />
                            3. Manage users, delete or change the role of a user to admin, and add or delete products are the
                            functionalities for Admin. <br />
                            4. Email, Google & JWT verification for admin & user. <br />
                            Tools: <small>MongoDb, Express.js, React.js, Node.js, HTML, CSS, Firebase, Heroku, TailwindCSS elements, React AOS.</small></p>
                        <div className='w-full absolute bottom-0'>
                            <a className='w-full block text-white rounded-sm bg-amber-400 hover:bg-amber-500 py-1 px-5 mt-4 hover:text-white' href="https://my-lucky-store.netlify.app/" target='_blank' rel='noreferrer'>View Website</a>
                            <a className='w-full block text-white rounded-sm bg-sky-400 hover:bg-sky-500 py-1 px-5 hover:text-white' href="https://github.com/Programming-Hero-Web-Course4/lucky-one-ijTuhin" target='_blank' rel='noreferrer'>GitHub-Repo</a>
                        </div>
                    </div>
                </ReactCardFlip>

            </div>
        </div>
    );
};

export default Projects;
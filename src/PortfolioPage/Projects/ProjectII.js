import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { projectII1, projectII2, projectII3 } from '../../index';
import PortfolioNavbar from '../PorfolioNavBar/PorfolioNavBar';
import './Projects.css';

const ProjectII = () => {
    return (
        <div className='bg-gray-800 text-gray-500'>
            <PortfolioNavbar></PortfolioNavbar>
            <div className='absolute top-3 left-0 font-mono'>
                <Link to='/' className='ml-4 font-mono hover:font-medium hover:text-cyan-600'><FontAwesomeIcon icon={faLeftLong}></FontAwesomeIcon> Back</Link>
            </div>
            <div className='absolute top-3 right-0 font-mono'>
                <a className='mr-4 hover:font-medium hover:text-cyan-600' href="https://warehouse-management-ui.web.app/" target='_blank' rel='noreferrer'>Website</a>
                <a className='mr-4 hover:font-medium hover:text-cyan-600' href="https://github.com/ProgrammingHeroWC4/warehouse-management-client-side-ijTuhin" target='_blank' rel='noreferrer'>Git-Client</a>
                <a className='mr-4 hover:font-medium hover:text-cyan-600' href="https://github.com/ProgrammingHeroWC4/warehouse-management-server-side-ijTuhin" target='_blank' rel='noreferrer'>Git-Server</a>
            </div>
            <div className='flex flex-col justify-center items-center w-screen h-screen detail'>
                <div className='flex justify-center mb-5 detail-header w-full'>
                    <span className='border-b-2 border-gray-600 md:w-20 w-14 mt-2.5 mx-2 h-2'></span>
                    <h1 className='text-gray-500 md:text-2xl text-2xl font-medium font-serif'>HeroKu Motor Bike</h1>
                    <span className='border-b-2 border-gray-600 md:w-20 w-14 mt-2.5 mx-2 h-2'></span>
                </div>
                <div className='border-2 border-gray-500 mx-20 p-2 details-box hover:border-gray-500'>
                    <div className='flex justify-center items-center'>
                        <div><img className='w-72 h-44 m-2' src={projectII1} alt="" /></div>
                        <div><img className='w-72 h-44 m-2' src={projectII2} alt="" /></div>
                        <div><img className='w-72 h-44 m-2' src={projectII3} alt="" /></div>
                    </div>
                    <div className='w-full flex justify-center my-2'>
                        <div className='w-[450px] flex flex-wrap justify-center'>
                            <p className='m-1 px-2 py-0.5 hover:border-cyan-500 hover:text-cyan-500  rounded-md border border-gray-600'>HTML</p>
                            <p className='m-1 px-2 py-0.5 hover:border-cyan-500 hover:text-cyan-500  rounded-md border border-gray-600'>CSS</p>
                            <p className='m-1 px-2 py-0.5 hover:border-cyan-500 hover:text-cyan-500  rounded-md border border-gray-600'>React.js</p>
                            <p className='m-1 px-2 py-0.5 hover:border-cyan-500 hover:text-cyan-500  rounded-md border border-gray-600'>Express.js</p>
                            <p className='m-1 px-2 py-0.5 hover:border-cyan-500 hover:text-cyan-500  rounded-md border border-gray-600'>MongoDb</p>
                            <p className='m-1 px-2 py-0.5 hover:border-cyan-500 hover:text-cyan-500  rounded-md border border-gray-600'>Node.js</p>
                            <p className='m-1 px-2 py-0.5 hover:border-cyan-500 hover:text-cyan-500  rounded-md border border-gray-600'>TailwindCSS</p>
                            <p className='m-1 px-2 py-0.5 hover:border-cyan-500 hover:text-cyan-500  rounded-md border border-gray-600'>Firebase</p>
                        </div>
                    </div>
                    <div className='m-2 w-full'>
                        <h1>Project Features</h1>
                        <p>   </p>
                        <ul className='list-disc list-inside'>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid a ex alias nulla</li>
                            <li>natus nesciunt fugiat nobis sit tenetur tempora odit sequi magnam nostrum aut, laudantium</li>
                            <li>minima hic, autem atque itaque animi quos quae quod iusto! Assumenda, ipsum ut</li>
                            <li>ipsa est tenetur ab! Quia, ab obcaecati. Nam quaerat laudantium enim.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectII;
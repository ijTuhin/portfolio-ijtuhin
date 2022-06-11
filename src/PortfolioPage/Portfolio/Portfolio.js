import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';
import IntroPart from '../IntroPart/IntroPart';
import MainBodyMenu from '../MainBodyMenu/MainBodyMenu';
import MyService from '../MyService/MyService';
import MySkills from '../MySkills/MySkills';
import PortfolioNavbar from '../PorfolioNavBar/PorfolioNavBar';
import ProblemSolving from '../ProblemSolving/ProblemSolving';
import Projects from '../Projects/Projects';

const Portfolio = () => {
    return (
        <div className='absolute bg-gradient-to-r from-slate-900 to-gray-900 text-gray-500'>
            <MainBodyMenu></MainBodyMenu>
            <IntroPart></IntroPart>
            <PortfolioNavbar></PortfolioNavbar>
            <div className='bg-[#101825] relative z-30' id='main-body'>
                <div id='profile'>
                    <AboutMe></AboutMe>
                </div>
                <div id='service'>
                    <MyService></MyService>
                </div>
                <div id='skill' className='mt-14'>
                    <MySkills></MySkills>
                </div>
                <div id='project'>
                    <Projects></Projects>
                    {/* <ProblemSolving></ProblemSolving> */}
                </div>
                <div id='contact'>
                    <ContactMe></ContactMe>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
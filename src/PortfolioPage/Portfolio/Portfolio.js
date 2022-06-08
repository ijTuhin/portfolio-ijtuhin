import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';
import IntroPart from '../IntroPart/IntroPart';
import MainBodyMenu from '../MainBodyMenu/MainBodyMenu';
import MySkills from '../MySkills/MySkills';
import PortfolioNavbar from '../PorfolioNavBar/PorfolioNavBar';
import ProblemSolving from '../ProblemSolving/ProblemSolving';
import Projects from '../Projects/Projects';
const Portfolio = () => {
    return (
        <div className='absolute bg-gray-900 text-gray-500'>
            <MainBodyMenu></MainBodyMenu>
            <IntroPart></IntroPart>
            <PortfolioNavbar></PortfolioNavbar>
            <div className='bg-[#101825] relative z-40' id='main-body'>
                <div id='profile'>
                    <AboutMe></AboutMe>
                </div>
                <div id='skill' className='mt-14'>
                    <MySkills></MySkills>
                    <ProblemSolving></ProblemSolving>
                </div>
                <div id='project'>
                    <Projects></Projects>
                </div>
                <div id='contact'>
                    <ContactMe></ContactMe>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
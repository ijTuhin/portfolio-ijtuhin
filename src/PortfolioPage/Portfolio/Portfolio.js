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
            <IntroPart></IntroPart>
            <PortfolioNavbar></PortfolioNavbar>
            <div className='bg-slate-900 relative z-50' id='main-body'>
                <MainBodyMenu></MainBodyMenu>
                <AboutMe></AboutMe>
                <MySkills></MySkills>
                <Projects></Projects>
                <ProblemSolving></ProblemSolving>
                <ContactMe></ContactMe>
            </div>

        </div>
    );
};

export default Portfolio;

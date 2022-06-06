import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';
import IntroPart from '../IntroPart/IntroPart';
import MySkills from '../MySkills/MySkills';
import PortfolioNavbar from '../PorfolioNavBar/PorfolioNavBar';
import Projects from '../Projects/Projects';

const Portfolio = () => {
    return (
        <div className='relative bg-gray-800 text-gray-500'>
            <IntroPart></IntroPart>
            <PortfolioNavbar />
            <div className='' id='main-body'>
                <AboutMe></AboutMe>
                <MySkills></MySkills>
                <Projects></Projects>
                <ContactMe></ContactMe>
            </div>

        </div>
    );
};

export default Portfolio;

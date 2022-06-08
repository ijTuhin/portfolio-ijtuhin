import React from 'react';
import './IntroPart.css';
import { downArrow } from '../../index';
import { Link } from 'react-router-dom';
const IntroPart = () => {
    return (
        <div className='bubble text-white w-full flex flex-col justify-center h-screen sticky-top top-0 z-0' id='top'>
            <div className='writing mx-auto'>
                <h1 className='font-serif font-medium md:text-xl mb-0.5 text-I'>
                    Hello, I am
                </h1>
                <h1 className='font-serif font-semibold text-amber-400/80 md:text-6xl text-4xl mb-0.5 text-II'>
                    Israt Jahan Tuhin
                </h1>
                <h1 className='font-medium md:text-xl mb-0.5 text-III'>
                    & I'm working with <span className='text-sky-600 md:text-2xl text-lg'>FRONT-END WEB DEVELOPMENT</span>
                </h1>
            </div>
            <br /><br />
            <a href="https://drive.google.com/file/d/1MurmfSe80GRxa3XaTRg3jK_SVgFUNav2" target='_blank' rel='noreferrer' className='hover:text-amber-300 flex mx-auto items-center' download><img src={downArrow} className="right-arrow md:w-6 w-6 mt-[2px] mx-3" alt="" /> DOWNLOAD RESUME</a>
            <div className='bubblediv'><span class="dot"></span></div>
            <div className='bubblediv'><span class="dot"></span></div>
            <div className='bubblediv'><span class="dot"></span></div>
            <div className='bubblediv'><span class="dot"></span></div>
            <div className='bubblediv'><span class="dot"></span></div>
            <div className='bubblediv'><span class="dot"></span></div>
            <div className='bubblediv'><span class="dot"></span></div>
            <div className='bubblediv'><span class="dot"></span></div>
            <div className='bubblediv'><span class="dot"></span></div>
            <div className='bubblediv'><span class="dot"></span></div>
            <div className='bubblediv'><span class="dot"></span></div>
            <div className='bubblediv'><span class="dot"></span></div>
            <div className='bubblediv'><span class="dot"></span></div>
            <div className='bubblediv'><span class="dot"></span></div>
            <div className='bubblediv'><span class="dot"></span></div>
            <div className='bubblediv'><span class="dot"></span></div>
            <div className='bubblediv'><span class="dot"></span></div>
            <div className='bubblediv'><span class="dot"></span></div>
            <div className='bubblediv'><span class="dot"></span></div>
            <div className='bubblediv'><span class="dot"></span></div>
        </div>
    );
};

export default IntroPart;
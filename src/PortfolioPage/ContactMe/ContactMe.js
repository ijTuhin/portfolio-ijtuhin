import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ContactMe = () => {
    const { register, handleSubmit } = useForm();
    const [submit, setSubmit] = useState(false);
    const [display, setDisplay] = useState(false);
    const onSubmit = data => {
        setSubmit(true);
        if (data) {
            setDisplay(true);
        }
        else {
            setDisplay(false);
        }
    };

    return (
        <div className='mt-10 w-screen h-full flex flex-col justify-center items-center pt-36 pb-72'>
            <form onSubmit={handleSubmit(onSubmit)} className='ml-10'>
                <div className='md:block hidden'>
                    <div className='text-center mr-8'>
                        <h1 className='text-4xl font-medium mb-1.5'>Get in touch!!!</h1>
                        <p>Got a question or proposal, or just want
                            to say hello? Go ahead.</p>
                    </div>
                    {
                        submit ?
                            <>
                                {
                                    display ?
                                        <><p className='text-cyan-500 font-mono z-50'>Thanks for your interest!!!</p></>
                                        :
                                        <><p className='text-red-500 font-mono'>Form is empty!!!</p></>
                                }
                            </>
                            :
                            <></>
                    }
                    <div className='w-[600px] mt-8'>
                        <div className='grid grid-cols-2 mb-6'>
                            <input placeholder='Your Name' className='form-control bg-transparent placeholder-gray-600 text-gray-200 border-b border-gray-300 p-2 w-[275px]' {...register("name", { required: true })} />
                            <input placeholder='Email Address' className='form-control bg-transparent placeholder-gray-600 text-gray-200 border-b border-gray-300 p-2 w-[275px]' {...register("email", { required: true })} /> <br />
                        </div>
                    </div>
                    <textarea className="form-control bg-transparent placeholder-gray-600 text-gray-200 border-b border-gray-300 mb-2 p-2 w-[580px]" placeholder='Hi, we have a project "X" at our company "Y". How soon can you hop on to discuss this? ' rows="2" {...register("feedback", { required: true })} />
                    <div className='flex justify-end mr-5'>
                        <button className='bg-gray-500 text-gray-800 hover:bg-cyan-600 hover:text-black px-4 py-1.5 rounded'>Submit</button>
                    </div>
                </div>


                <div className='grid grid-cols-1 md:hidden'>
                    <div className='text-left w-[24rem] mb-5'>
                        <h1 className='text-4xl font-medium mb-1.5'>Get in touch!!!</h1>
                    </div>
                    <input placeholder='Your Name' className='form-control bg-transparent placeholder-gray-600 text-gray-200 border-b border-gray-300 py-2 px-1 w-[23rem]' {...register("name")} />
                    <input placeholder='Email Address' className='form-control bg-transparent placeholder-gray-600 text-gray-200 border-b border-gray-300 py-2 px-1 w-[23rem]' {...register("email")} /> <br />
                    <textarea className="form-control bg-transparent placeholder-gray-600 text-gray-200 border-b border-gray-300 mb-2 py-2 px-1 w-[23rem]" placeholder='Hi, we have a project "X" at our company "Y". How soon can you hop on to discuss this? ' rows="3" {...register("feedback")} />
                    <div className='flex justify-end mr-5'>
                        <button className='bg-gray-500 text-gray-800 hover:bg-cyan-600 hover:text-black px-4 py-1.5 rounded'>Submit</button>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default ContactMe;
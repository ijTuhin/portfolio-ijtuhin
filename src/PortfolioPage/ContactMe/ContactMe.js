import React from 'react';
import { useForm } from 'react-hook-form';

const ContactMe = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        data = '';
    };

    return (
        <div className='mt-10 h-screen flex flex-col justify-center items-center'>
            <h1 className='text-4xl font-medium mb-1.5'>Get in touch!</h1>
            <p>Got a question or proposal, or just want
                to say hello? Go ahead.</p>
            <form onSubmit={handleSubmit(onSubmit)} className='ml-10'>
                <div className='w-[650px] mt-8'>
                    <div className='grid grid-cols-2'>
                        <input placeholder='Your Name' className='form-control bg-transparent text-gray-200 border-b border-gray-300 mb-2 p-2 w-[300px]' {...register("name")} />
                        <input placeholder='Email Address' className='form-control bg-transparent text-gray-200 border-b border-gray-300 mb-2 p-2 w-[300px]' {...register("email")} /> <br />
                    </div>
                </div>
                <textarea className="form-control bg-transparent text-gray-200 border-b border-gray-300 mb-1 p-2 w-[630px]" placeholder='Hi, we have a project "X" at our company "Y". How soon can you hop on to discuss this? ' rows="2" {...register("feedback")} />
                <br />
                <button className='bg-gray-500 text-gray-800 hover:bg-gray-400 px-4 py-1.5 rounded'>Submit</button>
            </form>
            <div className='grid grid-cols-1'>

            </div>
        </div>
    );
};

export default ContactMe;
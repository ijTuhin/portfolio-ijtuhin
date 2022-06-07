import React from 'react';
import { hackerRank, uva, uri, codeforces } from '../../index';
const ProblemSolving = () => {
    return (
        <div className='flex justify-center mt-64 mb-10'>
            <div className='border border-gray-600 border-l-0 border-r-0 py-5 w-[68rem]'>
                <a className='text-lg' href="https://www.hackerrank.com/ijTuhin638?hr_r=1" target='_blank' rel='noreferrer'><img className='w-36 inline mx-3 hover:translate-y-3 transform transition ease-in-out delay-1s' src={hackerRank} alt="" /></a>
                <a className='text-lg' href="https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=15" target='_blank' rel='noreferrer'><img className='w-14 inline mx-3 hover:translate-y-3 transform transition ease-in-out delay-1s' src={uva} alt="" /></a>
                <a className='text-lg' href="https://www.beecrowd.com.br/judge/en/profile/465600" target='_blank' rel='noreferrer'><img className='w-36 inline mx-3 hover:translate-y-3 transform transition ease-in-out delay-1s' src={uri} alt="" /></a>
                <a className='text-lg' href="https://codeforces.com/profile/rachel__G?f0a28=1" target='_blank' rel='noreferrer'><img className='w-36 inline mx-3 hover:translate-y-3 transform transition ease-in-out delay-1s' src={codeforces} alt="" /></a>
            </div>
        </div>
    );
};

export default ProblemSolving;
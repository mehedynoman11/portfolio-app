import React from 'react';
import { FaCanadianMapleLeaf, FaTelegramPlane } from 'react-icons/fa';
import { FiOctagon } from 'react-icons/fi';
import { LiaMountainSolid, LiaTelegram } from 'react-icons/lia';
import { LuLayers3 } from 'react-icons/lu';
import { WiSunset } from 'react-icons/wi';

const Company = () => {
    return (
        <div id='company' className=' hidden md:flex items-center justify-evenly py-3 bg-white'>
            <div className="flex flex-col justify-center gap-1">
                <span className='text-4xl flex justify-center items-center'><LuLayers3 /></span>
                <p className='text-xl font-semibold text-center'>oceanic</p>
            </div>
            <div className="flex flex-col justify-center gap-1">
                <span className='text-4xl flex justify-center items-center'><LiaTelegram /></span>
                <p className='text-xl font-semibold text-center'>paperline</p>
            </div>
            <div className="flex flex-col justify-center gap-1">
                <span className='text-4xl flex justify-center items-center'><FaCanadianMapleLeaf /></span>
                <p className='text-xl font-semibold text-center'>leaf & co.</p>
            </div>
            <div className="flex flex-col justify-center gap-1">
                <span className='text-4xl flex justify-center items-center'><LiaMountainSolid /></span>
                <p className='text-xl font-semibold text-center'>northern</p>
            </div>
            <div className="flex flex-col justify-center gap-1">
                <span className='text-4xl flex justify-center items-center'><WiSunset /></span>
                <p className='text-xl font-semibold text-center'>sundazw</p>
            </div>
            <div className="flex flex-col justify-center gap-1">
                <span className='text-4xl flex justify-center items-center'><FiOctagon /></span>
                <p className='text-xl font-semibold text-center'>hive digital</p>
            </div>
        </div>
    );
};

export default Company;
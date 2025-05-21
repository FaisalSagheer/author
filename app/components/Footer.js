
'use client'

import React from 'react';
import { footer1, footer2 } from '../constant';
import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <div className='bg-[#111] text-white list-none'>
                <div className="flex flex-wrap justify-center items-center lg:justify-between border-b-[.20px] border-b-white py-5 px-4 lg:px-8 text-lg">
                    
                    <div className='flex flex-wrap flex-col'>
                        <div className='flex flex-col'>
                            <Link href='/' className='flex flex-col items-center lg:items-start'>
                                <h2 className='text-2xl pl-2 py-20'>Author</h2>
                                {/* <img src="/" className='w-72 lg:-ml-16'/> */}
                            </Link>
                                <p className='text-xl sm:text-sm lg:text-lg -mt-20 lg:-mt-16 py-5 lg:py-0 px-3'>Empowering innovation and delivering cutting-edge solutions,<br/> 
                                    our software startup is here to redefine the future of technology.</p>
                        </div>
                        <div className='flex pt-5 lg:pt-10 pb-5 lg:pb-0 justify-center lg:justify-start  pl-0 lg:pl-4'>
                        {
                            footer2.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href} target={item.target} className='text-2xl'><i className={item.icon}></i></a>
                                </li>
                            ))
                        }
                        </div>
                    </div>

                    <div className='flex flex-col pt-4 lg:pt-64'>                      
                         {
                            footer1.map((item, index) => (
                                <li className='px-5 pb-2' key={index}>
                                    <a href={item.href} target={item.target} className='text-2xl'><i className={item.icon}></i>{item.No}</a>
                                </li>
                            ))
                        }
                    </div>
                </div>

                <div className='text-center'>
                    <p className='p-10'>© 2024 Author. All rights reserved</p>
                </div>

            </div>
        </>
    )
}
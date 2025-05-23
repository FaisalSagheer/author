'use client'

import { Landmark, MapPin, Minus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { TourCards } from '../constant'


function Tour() {
    return (
        <>
            <section className='max-w-2xl lg:max-w-7xl mx-auto py-10 px-4 lg:px-10'>

                <div className='flex justify-between items-center pb-10'>
                    <h2 className='text-2xl lg:text-5xl font-bold'>
                        Upcoming Events
                    </h2>
                    <Link
                        href="/pages/tour"
                        className="border border-gray-300 px-10 py-4.5 text-[1rem] font-semibold text-[#111] shadow-xs hover:bg-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
                    >
                        View All
                    </Link>
                </div>
                {/* Tour-Cards */}
                {
                    TourCards.map(item => (
                        <div className='border-b border-gray-200 flex justify-between py-10'>
                            <div className='flex justify-between'>

                                <div>
                                    <img src={item.src} alt={item.src} className='w-60 lg:h-50' />
                                </div>
                                <div className='pl-10 pt-5'>
                                    <div className='flex text-[1rem] gap-2'>

                                        <span className='flex gap-x-1'><MapPin /> {item.place}</span> <Minus />
                                        <span className='flex gap-x-1'><Landmark /> {item.eventplace}</span>
                                    </div>
                                    <h2 className='text-4xl font-medium py-3'>{item.title}</h2>
                                    <p className='text-lg text-gray-500 w-3/4 py-3'>
                                     {item.description}
                                    </p>
                                </div>
                            </div>
                            <div className='pt-20'>
                                <h3 className='flex justify-end text-xl'>
                                    Nov
                                </h3>
                                <span className='text-7xl font-medium'>20</span>

                            </div>
                        </div>
                    ))
                }

            </section>
        </>
    )
}

export default Tour

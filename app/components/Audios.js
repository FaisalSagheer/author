'use client'

import { ChartNoAxesColumn, Play } from 'lucide-react'
import React from 'react'

function Audios() {
    const people = [
        {
            no: "01",
            name: 'Leslie Alexander',
            email: 'leslie.alexander@example.com',
            role: 'Co-Founder / CEO',
            imageUrl:
                'assets/Book2.png',
            lastSeen: '3h ago',
            lastSeenDateTime: '2023-01-23T13:23Z',
        },
        {
            no: "02",
            name: 'Michael Foster',
            email: 'michael.foster@example.com',
            role: 'Co-Founder / CTO',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            lastSeen: '3h ago',
            lastSeenDateTime: '2023-01-23T13:23Z',
        },
        {
            no: "03",
            name: 'Dries Vincent',
            email: 'dries.vincent@example.com',
            role: 'Business Relations',
            imageUrl:
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            lastSeen: null,
        },
        {
            no: "04",
            name: 'Lindsay Walton',
            email: 'lindsay.walton@example.com',
            role: 'Front-end Developer',
            imageUrl:
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            lastSeen: '3h ago',
            lastSeenDateTime: '2023-01-23T13:23Z',
        },
    ]

    return (
        <>
            <section className='mx-auto py-10 px-4 lg:px-10 bg-[#f8fafb]'>
                <div className='pb-10'>
                    <h2 className='text-5xl font-bold text-center'>
                        Listen to a David Sedaris Excerpt
                    </h2>
                </div>
                <div className='flex flex-wrap items-center justify-center pt-10'>
                    <div>
                        <img src='assets/audio.png' alt='/' className='w-100' />
                    </div>
                    <div className='px-30 py-5 bg-white'>
                        <ul role="list" className="divide-y divide-gray-200">
                            {people.map((person) => (
                                <li key={person.email} className="flex justify-between items-center gap-x-6 py-5">
                                    <div className="flex min-w-0 gap-x-4 items-center">
                                        <span className='text-xl'>{person.no}</span>
                                        <img alt="/" src={person.imageUrl} className="size-18 flex-none bg-gray-50" />
                                        <div className="min-w-0 flex-auto px-20">
                                            <p className="text-lg/6 font-semibold text-gray-900">{person.name}</p>
                                        </div>
                                    </div>
                                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                        <span className="flex gap-x-4 text-sm/6 text-gray-900">
                                            <Play />
                                            19.8k
                                            <ChartNoAxesColumn />
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Audios

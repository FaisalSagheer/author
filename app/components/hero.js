
'use client'
import React from 'react'
import { HeroItems } from '../constant'
import Link from 'next/link'
import { Minus } from 'lucide-react'



export default function Hero() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden px-6 pt-8 sm:px-16 md:pt-16 lg:flex items-center lg:gap-x-60 lg:px-0 lg:pt-0">
            {/* Hero Description */}
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <p className="text-base/7 text-gray-500 leading-10 flex items-center justify-center lg:justify-start"><Minus/> David Sedarisis</p>
              <h2 className="text-[#111] text-6xl font-medium leading-18">
               The "champion storyTeller,"
              </h2>
               <span className='text-3xl text-[#111] leading-10'>(Los Angeles Times)</span>
              <p className="mt-6 text-lg/8 text-pretty text-gray-400">
              David Sedarisis the best selling author of the books Calypso,
              Theft by Finding,Let's Explore 
              Diabetes with Owls, Squirrels Seeks e.t.c. 
              </p>
              <div className="mt-6 flex items-center justify-center lg:justify-start gap-x-6">
              <Link
                href="#"
                className="rounded-md bg-[#111] px-7.5 py-4.5 text-sm font-semibold text-white shadow-xs hover:bg-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
              >
                Read More
              </Link>
              <Link href="#" className="text-[1rem] font-semibold text-gray-900 hover:underline">
                Check My Work 
                {/* <span aria-hidden="true">→</span> */}
              </Link>
            </div>
            </div>
            {/* Hero-Image */}
            <div className="relative h-80 lg:mt-0 mb-30 lg:mb-0">
              {HeroItems.map((item,key)=>
              <img key={key}
              alt={item.alt}
              src={item.src}
            //   width={1800}
            //   height={1080}
              className="relative mx-auto left-0 lg:left-20 top:0 lg:bottom-40 lg:w-[40rem] w-[25rem] max-w-none rounded-md"
              />
            )  
            }
            </div>
          </div>
          
        </div>
        
      </div>
    )
  }
  
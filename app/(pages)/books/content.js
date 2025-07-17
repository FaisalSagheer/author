'use client'
import { AuthorBooks } from '@/app/constant'
import Link from 'next/link'
import React from 'react'

function Content() {
  return (
    <>
      <div className="bg-white py-20">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <h2 className="text-5xl font-bold tracking-tight text-[#111] text-center">You'll Also Love</h2>

        <div className="py-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {AuthorBooks.map((product) => (
            <div key={product.id} className="relative ">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="lg:w-full object-contain lg:h-100 m-5 p-5"
              />
              <div className="mt-20 flex justify-between">
                <div >
                    <Link href={product.href}>
                  <h2 className="text-4xl text-gray-800 font-semibold">
                      {/* <span aria-hidden="true" className="absolute inset-0" /> */}
                      {product.name}
                  </h2>
                    </Link>
                  {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                </div>
                {/* <p className="text-sm font-medium text-gray-900">{product.price}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default Content

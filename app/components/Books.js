'use client'

import React from 'react'
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "David Sedaris's Calypso",
    href: '#',
    imageSrc: 'assets/Calypso.png',
    imageAlt: "Front of men's Basic Tee in black.",
    // price: '$35',
    // color: 'Black',
  },
  {
    id: 2,
    name: "Theft by Finding Diaries",
    href: '#',
    imageSrc: 'assets/Book2.png',
    imageAlt: "Front of men's Basic Tee in black.",
    // price: '$35',
    // color: 'Black',
  },
  {
    id: 3,
    name: "Let's Explore Diabetes with Owls",
    href: '#',
    imageSrc: 'assets/Book3.png',
    imageAlt: "Front of men's Basic Tee in black.",
    // price: '$35',
    // color: 'Black',
  },
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
        <h2 className="text-5xl font-bold tracking-tight text-gray-900">You'll Also Love</h2>

        <div className="py-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="relative ">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="lg:w-full object-contain bg-gray-50 lg:h-100 m-5 p-5"
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
  )
}

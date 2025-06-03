
'use client'

import Link from 'next/link';
import React from 'react';
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '#about' },
    { name: 'Products', link: '#products' },
    { name: 'Services', link: '#services' },
    { name: 'Contact', link: '#contact' }
  ];

  const productCategories = [
    { name: 'Terms of Use', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Contact Us', href: '/contact' }
  ];

  return (
    <footer className="bg-[#111] text-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-y-10 lg:gap-y-0 lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 mb-12">

          {/* Quick Links */}
          <div className='text-center lg:flex justify-start'>
            <ul className="space-y-3">
            <h3 className="text-xl font-semibold mb-6">Logo Image</h3>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.link} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Company */}
          <div className='text-center flex flex-col items-center gap-y-3'>
            {/* <img className='h-14 w-72 mb-6 -ml-0 lg:-ml-7' src='/' alt='Footer'/> */}
            <h2 className='text-2xl'>Author</h2>
            <p className="text-gray-400 mb-6 text-lg">
             'Sedaris droll assessment of the mundane and the ecentrics who inhabitat the world's cervics make him one of the greatests humorist writing today.' - Chicago Tribune
            </p>
            <div className="flex space-x-4 justify-center">
              <a href="#" className="text-gray-400 hover:text-white">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FiLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FiInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Product Categories */}
          <div className='text-center lg:flex justify-end'>
            <ul className="space-y-3">
            <h3 className="text-xl font-semibold mb-6">Product Categories</h3>
              {productCategories.map((category, index) => (
                <li key={index}>
                  <Link href={category.href} className="text-gray-400 hover:text-white transition-colors">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Author. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
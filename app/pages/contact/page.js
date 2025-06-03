'use client'

import React from 'react'
import Navbar from '../../components/navbar'
import Footer from '@/app/components/Footer';
import Email from './Email';
import Banner from '@/app/components/Banner';

function Contact() {
    return (
        <>
            <Navbar />
            <Banner title="Contact Me"/>
            <Email />
            <Footer />
        </>
    )
}

export default Contact;

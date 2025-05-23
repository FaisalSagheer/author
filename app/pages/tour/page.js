
'use client'

import Banner from '@/app/components/Banner';
import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/navbar';
import Tour from '@/app/components/Tour';
import React from 'react'

function TourPage() {
    return (
        <>
            <Navbar />
            <Banner />
            <Tour />
            <Footer />
        </>
    )
}

export default TourPage;

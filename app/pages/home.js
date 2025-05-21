'use client'

import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import LogoClouds from '../components/LogoClouds'
import ProductSection from '../components/BookIntro'
import Books from '../components/Books'
import Tour from '../components/Tour'
import Audios from '../components/Audios'
import NewsLetter from '../components/NewsLetter'

function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <LogoClouds/>
      <ProductSection/>
      <Books/>  
      <Tour/>
      <Audios/>
      <NewsLetter/>
    </>
  )
}

export default Home

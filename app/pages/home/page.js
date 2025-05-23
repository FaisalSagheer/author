'use client'

import React from 'react'
import Hero from '../../components/hero'
import LogoClouds from '../../components/LogoClouds'
import ProductSection from '../../components/BookIntro'
import Books from '../../components/Books'
import Tour from '../../components/Tour'
import Audios from '../../components/Audios'
import NewsLetter from '../../components/NewsLetter'
import Footer from '../../components/Footer'

function Home() {
  return (
    <>
      <Hero/>
      <LogoClouds/>
      <ProductSection/>
      <Books/>  
      <Tour/>
      <Audios/>
      <NewsLetter/>
      <Footer/>
    </>
  )
}

export default Home

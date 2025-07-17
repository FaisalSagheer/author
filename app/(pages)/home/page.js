'use client'

import React, { useRef } from 'react'
import Hero from '../../components/hero'
import LogoClouds from '../../components/LogoClouds'
import ProductSection from '../../components/BookIntro'
import Books from '../../components/BooksSection'
import Tour from '../../components/TourComponents/Tour'
import Audios from '../../components/Audios'
import NewsLetter from '../../components/NewsLetter'
function Home() {
  
  return (
    <>
      <Hero/>
      <LogoClouds />
      <ProductSection />
      <Books />
      <Tour />
      <Audios />
      <NewsLetter />      
    </>
  )
}

export default Home

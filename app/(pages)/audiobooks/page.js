'use client'
import Banner from '@/app/components/Banner'
import NewsLetter from '@/app/components/NewsLetter'
import React from 'react'
import Content from './content'
import ReactLenis from '@studio-freight/react-lenis'

function AudioBooks() {
  return (
    <>
    <ReactLenis root>
     <Banner title="Audio Books"/>
     <Content/>
     <NewsLetter/>
    </ReactLenis>
    </>
  )
}

export default AudioBooks

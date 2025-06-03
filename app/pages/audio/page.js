import Banner from '@/app/components/Banner'
import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/navbar'
import NewsLetter from '@/app/components/NewsLetter'
import React from 'react'
import Content from './content'

function audio() {
  return (
    <>
     <Navbar/>
     <Banner title="Audio Books"/>
     <Content/>
     <NewsLetter/>
     <Footer/> 
    </>
  )
}

export default audio

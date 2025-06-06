'use client'
import React, { useRef }  from 'react'
import { useGSAP } from '@gsap/react'
import {gsap} from 'gsap';

const GsapRef = useRef()
  useGSAP(() => {
    gsap.to(GsapRef.current, {
      y: -300,
      duration: 2,
      delay: 1,
      opacity: 0
    }
    )
  })

"use client"

import React from 'react'
import {delay, motion} from "framer-motion"
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'


interface props {
    src : string ;
    width : number;
    height : number;
    index : number;
}

const SkillDataProvider = ({src, width, index, height} : props) => {
    const {ref,inView} = useInView({
        triggerOnce : true
    })

    const imagevariants ={
        hidden : {opacity: 0 },
        visible : {opacity : 1 }
    }

    const animationDelay = 0.3 

  return (
    
   <motion.div
   ref={ref}
   initial = "hidden"
   variants={imagevariants}
   animate ={inView ? "visible" : "hidden"}
   custom={index}
   transition={{delay: index * animationDelay}}
   >
     <Image
      src={src}
      width={width}
      height={height}
      alt="skill image"
      />
   </motion.div>
      
  )
}

export default SkillDataProvider
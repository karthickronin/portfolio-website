import React from 'react'
import { CONTACT } from '../constants'
import {motion} from "framer-motion"


const Contact = () => {
  return (
    <div id='contact' className='border-t border-b border-stone-900 pb-8'>
      <motion.h2 whileInView={{opacity:1,y:0}}
        initial={{ y: -100, opacity: 1 }}
        transition={{ duration: 0.5 }} className='my-10 text-center text-4xl'>Get in Touch</motion.h2>
      <div className='text-center tracking-tighter'>
        <motion.p whileInView={{opacity:1,x:0}}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1}} className='my-4'>{CONTACT.address}</motion.p>
        <motion.p whileInView={{opacity:1,x:0}}
        initial={{ x: 100, opacity: 0 }}
        transition={{ duration: 1}} className='my-4'>{CONTACT.phoneNo}</motion.p>
        <motion.a href="karthimad7707@gmail.com" whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
                  transition={{ type: 'spring', stiffness: 300 }}>{CONTACT.email}</motion.a>
      </div>
    </div>
  )
}

export default Contact

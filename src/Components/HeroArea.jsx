import { section } from 'framer-motion/client'
import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import HeroImg from "../assets/hero-image.png"
import { fadeIn, textVariant } from '../Utils/motion'
import {motion} from 'framer-motion'

function HeroArea () {
  return (
    <section className='container mx-auto pt-44 pb-24 px-4 md:px-8 '>
      <div className='flex justify-center items-center md:flex-row flex-col gap-5'>

        {/* left section */}
        <div className='w-full md:w-1/2  '>
              <motion.div
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{once:true}}
                className='flex items-center gap-2 bg-gray-50 px-4 py-4 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group w-fit'>

                  <FaStar className='text-blue-600 group-hover:text-amber-400 group-hover:scale-110'/>
                  <span >Jump start you growth</span>
              </motion.div>

              <motion.h1
                variants={textVariant(0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{once:true}}
                className='text-5xl md:text-6xl font-semibold md:font-bold leading-tight mt-6 md:mt-8 relative'>
                  We boost the growth for
                  <span className='relative inline-block  text-blue-600 '>
                  Startup to Fortne 500                                 
                  <span className=' absolute bg-blue-200 w-full h-0.5 left-0 -bottom-1'></span> 
                  </span> 
                   Companies
                  <span className=' animate-pulse'>🕒</span>
              </motion.h1>
              <motion.p
                variants={textVariant(0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{once:true}}
                className='max-w-[576px] my-8 text-xl leading-[28px]'>
                  Get the most accurate leads, sales people training and conversions , tools and more all within the some one bulling.
              </motion.p>
              <motion.div
                variants={fadeIn("top", 0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{once:true}}
                className='flex items-center gap-3 max-w-[450px] sm:flex-row flex-col'>
                  <input type="text" placeholder='Email address' className='px-4 py-4 border-1 border-gray-200 rounded-lg w-full' />
                  <button className='px-8 py-4 bg-blue-600 rounded-lg'><FaArrowRight className='size-6 text-white' /></button>
              </motion.div>
        </div>

        {/* right section */}
        <motion.div
         variants={fadeIn("left", 0.4)}
         initial="hidden"
         whileInView="show"
         viewport={{once:true}}
         className='w-full md:w-1/2 md:mt-0 mt-10'>
              <img className=' hover:scale-[1.02] transition-transform duration-300' src={HeroImg} alt="" />
        </motion.div>
      </div>
    </section>
  )
}

export default HeroArea
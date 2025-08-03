import { div } from 'framer-motion/client'
import React from 'react'
import { fadeIn } from '../Utils/motion'
import {motion} from 'framer-motion'

  const Features = [
    {
      icon: "🔍", 
      title: "Find out what you need",
      description: "We present you a proposal and discuss nitty-gritty like"
    },
    {
      icon: "⚙️",
      title: "Work out the details", 
      description: "Communication protocols apart from engagement models"
    },
    {
      icon: "🚀",
      title: "We get to work fast",
      description: "Protocols apart from engage models, pricing billing"
    }
  ]

function FeatureSection() {
  return (
    <section>
         <div className='max-w-7xl mx-auto px-5 py-12'>

            {/* title section */}

            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{once:true}} 
              className=' flex justify-center items-center flex-col mb-8 md:mb-12'>
                <h2 className='text-3xl font-bold mb-4'>How can we help your business</h2>
                <p className='font-base font-normal text-gray-600'>When you result besnik, you build trust and incrase</p>
            </motion.div>

            {/* body section */}
            <motion.div
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{once:true}}  className='flex justify-center items-center gap-10'>
                {Features.map((data , index) => (
                    <div className='flex justify-center items-center flex-col text-center' key={index}>
                        <div
                        className='w-24 h-24 flex justify-center items-center rounded-full group cursor-pointer mb-6' 
                        style={{backgroundColor:index === 0 ? "#F1EFF0" : index === 1 ? "#FEE7E7" : "#FFF3E4" }}>
                            <span className='text-3xl group-hover:scale-110 transition-all'>{data.icon}</span>
                        </div>
                        <h2 className='text-2xl font-medium mb-3'>{data.title}</h2>
                        <p className=' text-gray-600 md:w-9/10'>{data.description}</p>
                    </div>
                ))}
            </motion.div>

            <motion.div
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{once:true}}  className='my-12 flex justify-center items-center'>
                <button className='px-9 py-3 bg-blue-600 hover:bg-blue-700 transition-all text-white rounded-full cursor-pointer relative'>
                   Become a Partner
                   <span className=' absolute w-full h-full left-0 top-0 -z-20 bg-blue-600/30 blur-xl rounded-full'></span>
                </button>
            </motion.div>

            
        </div>
    </section>
  )
}

export default FeatureSection
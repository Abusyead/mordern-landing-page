import { div } from 'framer-motion/client'
import React from 'react'
import { BsStack } from "react-icons/bs";
import { HiLightBulb } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { BiTime } from "react-icons/bi";
import { fadeIn, textVariant } from '../Utils/motion'
import {motion} from 'framer-motion'

const Services = [
    {
      icon: <BsStack className="w-8 h-8 text-indigo-600" />,
      title: "Web Design",
      description: "One for all and all for one, Muskehounds are always ready.",
      link: "#learn-more"
    },
    {
      icon: <HiLightBulb className="w-8 h-8 " />,
      title: "Ad-Creatives", 
      description: "Alphabet Village and the subline of her own road.",
      link: "#learn-more"
    },
    {
      icon: <FiSettings className="w-8 h-8 text-red-400" />,
      title: "Automation",
      description: "Little Blind Text should turn around and return.",
      link: "#learn-more"
    },
    {
      icon: <BiTime className="w-8 h-8 text-cyan-400" />,
      title: "Infographics",
      description: "Nothing the copy said could convince her.",
      link: "#learn-more"
    }
  ]

function FutureSection() {
  return (
    <section className=' py-24'>
        <div className='px-10 container mx-auto flex items-center md:flex-row flex-col md:justify-start justify-center'>
            <motion.div
                             variants={fadeIn("right", 0.3)}
                             initial="hidden"
                             whileInView="show"
                             viewport={{once:true}}
             className='md:w-1/2 w-full '>
                <h2 className=' text-4xl font-bold max-w-[392px]'>future of support with new shape</h2>
                <p className='my-6 text-[18px] text-gray-700 max-w-[392px]'>Discuss your goals determine success metrics identify problems</p>
                <div  className='flex items-center gap-3 mb-3'>
                   <div className='w-5 h-5 bg-[#E0E7FF] rounded-full flex justify-center items-center'>
                      <div className='h-2.5 w-2.5 rounded-full bg-[#4F39F7]'>
                      </div>
                   </div>
                  <span className=' text-gray-700'>
                      UX design content strategy
                  </span>
                </div>
                <div className='flex items-center gap-3'>
                   <div className='w-5 h-5 bg-[#E0E7FF] rounded-full flex justify-center items-center'>
                      <div className='h-2.5 w-2.5 rounded-full bg-[#4F39F7]'>
                      </div>
                   </div>
                  <span className=' text-gray-700'>
                      Development Dring
                  </span>
                </div>
                <button className='px-10 py-3.5 rounded-full bg-[#4F39F7] text-white mt-5 hover:bg-blue-600 transition-colors duration-300'>
                    Get Started
                </button>
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{once:true}}
             className='md:w-1/2 w-full grid md:grid-cols-2 grid-cols-1 gap-8 md:justify-items-end justify-items-start mt-20 md:mt-0'>
                {Services.map((data , index) =>(
                    <div className='max-w-[288px] p-6  ' key={index}>
                        <div className='mb-4'>{data.icon}</div>
                        <h2 className='mb-2 font-semibold text-xl'>{data.title}</h2>
                        <p className='mb-4 text-gray-700'>{data.description}</p>
                        <a href={data.link} className=' uppercase text-[#4f39f7]'>Learn More</a>
                    </div>
                ))}
            </motion.div>
        </div>
    </section>
  )
}

export default FutureSection
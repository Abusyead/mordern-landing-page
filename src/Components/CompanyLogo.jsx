import React from 'react'
import slack from "../assets/slack.png"
import amazon from "../assets/amazon.png"
import woocommerce from "../assets/woocommerce.png"
import meundies from "../assets/meundies.png"
import sitepoint from "../assets/sitepoint.png"
import { fadeIn } from '../Utils/motion'
import {motion} from 'framer-motion'



const Logo = [slack , amazon , woocommerce ,meundies , sitepoint]

function CompanyLogo() {
  return (
    <motion.section
      variants={fadeIn("down", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{once:true}}
      className='container px-5 mx-auto py-24 overflow-hidden flex items-center'>
        <div className='relative z-10 bg-white'>
            <span className='absolute left-0 h-16 w-1 bg-blue-500 -top-1'></span>
            <p className='md:w-[300px] w-[200px] pl-3 md:pl-8 pr-0 md:pr-16 text-base font-semibold text-gray-700'>Proud partner at <br />
               Hubsport & Segment</p>
        </div>
        <div className='flex items-center logo-marquee whitespace-nowrap'>
            {Logo.map((data , index) =>(
                <img className='mx-12 w-36 h-8 object-contain opacity-75 hover:opacity-100 cursor-pointer grayscale hover:grayscale-0 transition-all' src={data} key={index} alt="" />
            ))}

          {/* duplicate logo */}

            {Logo.map((data , index) =>(
                <img className='mx-12 w-36 h-8 object-contain opacity-75 hover:opacity-100 cursor-pointer grayscale hover:grayscale-0 transition-all' src={data} key={index} alt="" />
            ))}

        </div>
    </motion.section>
  )
}

export default CompanyLogo
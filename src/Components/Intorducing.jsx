import React from 'react'
import StreamleineImg from  "../assets/stats.webp"
import { FaArrowRight } from "react-icons/fa";
import { fadeIn } from '../Utils/motion'
import {motion} from 'framer-motion'

function Streamleine() {
  return (
    <section>
        <div className='flex md:max-w-7xl md:py-24 py-5 px-5 items-center gap-10 mx-auto md:flex-row flex-col container'>
            <motion.div
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{once:true}} 
              className='flex-1/2'>
                <h4 className=' text-base font-semibold uppercase  text-[#FF6900] mb-6'>Scheduie</h4>
                <h2 className='text-4xl font-bold mb-6'>Intorducing best mobile carousels</h2>
                <p>Before the ship is really back. Round , round all around the world Round all around the world Round all, all around the world Round all around the world</p>

                <a href='#' className='flex gap-2 hover:gap-4 mt-8 font-semibold text-blue-600 transition-all items-center'>Learn more about monitoring<FaArrowRight className='size-6'/></a>
            </motion.div>
            <motion.div
             variants={fadeIn("left", 0.5)}
             initial="hidden"
             whileInView="show"
             viewport={{once:true}} 
             className='flex-1/2'>
                <img src={StreamleineImg} alt="" />
            </motion.div>
        </div>
    </section>
  )
}

export default Streamleine
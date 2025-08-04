import { p } from 'framer-motion/client';
import React, { useState } from 'react'
import { fadeIn } from '../Utils/motion'
import {motion} from 'framer-motion'
import { textVariant } from '../Utils/motion';

function PricingSection() {
    const [productsCount , setProductsCount] = useState(1);

    const starterPrice = Math.round(4000*(productsCount / 50))
    const busnessPrice = Math.round(7500*(productsCount / 50))
  return (
    <section className='py-24 px-4'>
        <div className='max-w-6xl mx-auto'>
            <motion.h2
             variants={fadeIn("down" , (0.3))}
             initial="hidden"
             whileInView="show"
             viewport={{once:true}} 
             className=' text-3xl md:text-4xl font-bold text-center mb-16'>
                Pricing
            </motion.h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <motion.div
                 variants={fadeIn("right" , (0.4))}
                 initial="hidden"
                 whileInView="show"
                 viewport={{once:true}} 
                 className=' flex-1/2 bg-white p-8 rounded-lg shadow-lg'>
                    <h1 className='text-xl text-gray-600 mb-4'>Stater</h1>
                    <p className=' text-3xl font-bold mb-6'>${starterPrice}/mo</p>
                </motion.div>
                <motion.div
                 variants={fadeIn("left" , (0.4))}
                 initial="hidden"
                 whileInView="show"
                 viewport={{once:true}} 
                className=' flex-1/2 bg-white p-8 rounded-lg shadow-lg'>
                    <h1 className='text-xl text-gray-600 mb-4'>Business</h1>
                    <p className=' text-3xl font-bold mb-6'>${busnessPrice}/mo</p>
                </motion.div>
            </div>
            <motion.div
             variants={fadeIn("down" , (0.5))}
             initial="hidden"
             whileInView="show"
             viewport={{once:true}} 
             className='mt-10 max-w-xl mx-auto mb-5'>
                <h2 className=' text-base text-gray-600 text-center mb-12'>{productsCount} products</h2>
                <div className=' flex items-center justify-center gap-2'>
                    <span>1</span>
                    <input
                    min="1"
                    max="50"
                    type="range" 
                    className='flex-1  h-2 bg-gray-200 rounded-xl appearance-none'
                    value={productsCount}
                    onChange={(e) => setProductsCount(parseInt(e.target.value))}
                    />
                    <span>50</span>
                </div>
            </motion.div>
            <motion.div
             variants={fadeIn("down" , (0.5))}
             initial="hidden"
             whileInView="show"
             viewport={{once:true}} 
             className=" text-center">
                <p className='text-xl text-gray-600 mb-4'>Ready to ge started?</p>
                <button className='bg-blue-600 text-white px-6 py-3 transition-colors cursor-pointer rounded-lg mt-3'>Get Started</button>
            </motion.div>
        </div>
    </section>
  )
}

export default PricingSection
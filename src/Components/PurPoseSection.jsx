import { div, h2 } from 'framer-motion/client';
import React from 'react'

const Features = [
    {
        icon: "🟣", // Replace with your actual icon component or image
        title: "Built for impact",
        description: "We identify and nurture a truly diverse team of designers, developers and marketers"
    },
    {
        icon: "🔴", // Replace with your actual icon component or image
        title: "In sync with you",
        description: "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless."
    }
];

function PurPoseSection() {
  return (
    <section className='  bg-gray-100 px-8 py-12'>
        <div className=' md:px-10 lg:px-20 xl:px-30 container mx-auto grid grid-cols-1 lg:grid-cols-12 bg-amber-300'>

            {/* left colum */}
            <div className='lg:col-span-4'>
                <h4 className=' text-base font-medium capitalize text-[#FA9810] mb-2'>Achieve More</h4>
                <h2 className='text-4xl md:w-4/6 leading-tight w-full font-bold'>Purpose of a convoy is to keep your team</h2>
            </div>

            {/* right colum */}

            <div className='lg:col-span-8 '>
                <div className='grid md:grid-cols-2 grid-cols-1 '>
                    {Features.map((data , index) =>(
                        <div key={index} className='flex lg:mt-0 md:mt-10 mt-8'>
                            <div className='mt-3 mr-5'>{data.icon}</div>
                            <div>
                               <h2 className='text-xl font-semibold mb-3'>{data.title}</h2>
                               <p className=' text-base font-normal text-gray-800 md:w-4/5 w-full'>{data.description}</p>
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default PurPoseSection
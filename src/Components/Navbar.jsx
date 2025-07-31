import React, { useState } from 'react'
import logoimg from "/fav-icon.png" 
import { fadeIn } from '../Utils/motion'
import {motion} from 'framer-motion'
import { HiX ,HiMenu} from "react-icons/hi";


const navLink = [
    {href:"#home" , label:"Home"},
    {href:"#about" , label:"About"},
    {href:"#services" , label:"Our Services"},
    {href:"#testimonials" , label:"Testimonials"}
]

function Navbar() {
  const [activeLink , setactiveLink] = useState("#home")
  const [mobileMenu , setMobileMenu ] = useState(false)
  return (
    <motion.nav
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{once:true}}
        className=' bg-white/90 border-b-2 border-gray-200'>
        <div className=' container  mx-auto md:h-20 h-16 md:px-8 px-4 flex items-center justify-between'>
            {/* logo */}
            <div>
               <img src={logoimg} alt="" />
            </div>

            {/* mobile menu */}
            <buttonm className="md:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
                  {mobileMenu ? <HiX className='size-6'/> : <HiMenu className='size-6' />}
            </buttonm>
            

            {/* desktop nav bar */}
            <div className='hidden md:flex justify-center items-center gap-10'>
                {navLink.map((data , index) => (
                    <a onClick={() => setactiveLink(data.href)} className={` text-base font-medium relative after:absolute after:w-0 hover:after:w-full after:bg-blue-600 cursor-pointer after:left-0 after:-bottom-0.5 after:h-0.5 ${activeLink === data.href ? "text-blue-600 after:w-full" : "text-gray-600 hover:text-gray-900"}`} key={index} href={data.href}>{data.label}</a>
                ))}
            </div>

            {/* get intouch */}
            <button className='hidden md:flex px-6 py-3 bg-[#175DFC] hover:bg-[#1347E5] transition-all duration-300 text-white border-0 rounded-lg cursor-pointer'>
                <a href="">Get in touch</a>
            </button>
        </div>
        {mobileMenu && 
            <div className='md:hidden bg-white/90 border-t border-gray-100 py-4'>
                <div className='container mx-auto px-4 space-y-3'>
                    {navLink.map((data , index) => (
                        <a onClick={() => setactiveLink(data.href)} className={`block text-sm font-medium py-2 ${activeLink === data.href ? "text-blue-600": "text-gray-600 hover:text-gray-900"}`} href={data.href} key={index}>{data.label}</a>
                    ))}

                    <button className='flex items-center justify-center md:hidden w-full px-6 py-2 bg-[#175DFC] hover:bg-[#1347E5] transition-all duration-300 text-white border-0 rounded-lg cursor-pointer'>
                    <a href="">Get in touch</a>
                    </button>
                </div>   
            </div>
        }
    </motion.nav>
  )
}

export default Navbar
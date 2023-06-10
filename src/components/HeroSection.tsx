import React from 'react'
import { Link as ScrollLink } from 'react-scroll';
import Skills from './Skills';
import {SiGithub, SiLinkedin} from 'react-icons/si';
import {AiOutlineArrowDown} from 'react-icons/ai'; 

const HeroSection = () => {
  return (
    <div className='flex items-center justify-center flex-col py-20 h-[100vh]'>
        <div className='text-center'>
        <h1 className='text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 font-semibold'>Jesse Taylor</h1>
        <p className='text-md md:text-xl font-semibold max-w-md mb-3 text-gray-600'>Software Developer</p>
        <p className='text-sm md:text-lg max-w-md mb-3 text-gray-600'>Queensland, Australia</p>
        <div className='flex justify-center'>
          <a  href='https://github.com/JesseTDev' rel='noreferrer' target='_blank' className='cursor-pointer text-gray-600 w-8 h-4 m-1 mb-5 text-xl hover:text-[22px] hover:text-gray-300 duration-300'><SiGithub /></a>
          <a  href='https://www.linkedin.com/in/jesse-taylor-dev' rel='noreferrer' target='_blank' className='cursor-pointer text-gray-600 w-4 h-4 m-1 text-xl hover:text-[22px] hover:text-gray-400 duration-300'><SiLinkedin /></a>
        </div>
        <a href="mailto:jessetaylordev5@gmail.com" target='_blank' rel="noreferrer" className='inline-block px-5 py-3 border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-300 duration-300 md:text-md md:px-8 md:py-3 md:text-base shadow-xl'>Contact</a>
        </div>
        <Skills />
        <ScrollLink
          name="scroll-down"
          className='cursor-pointer text-xl m-9 inline-block px-8 py-3 border-2 border-gray-800 hover:px-10 font-medium rounded-md text-gray-800 duration-300 md:text-md hover:bg-gray-800 hover:text-gray-100'
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={800}
        >
          <AiOutlineArrowDown />
        </ScrollLink>
    </div>
  )
}

export default HeroSection; 
import React from 'react'
import { ProjectType } from './Projects'

const ProjectCard = ({imgURL, tech, title, gitHub, liveURL }: ProjectType) => {
  return (
    <div className='bg-gray-200 rounded-md overflow-hidden shadow-lg'>
    <img src={imgURL} alt={title} className='w-full h-36 md:h-60 object-cover' /> 
    <div className='text-gray-600 p-5 w-full'>
      <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold'>{title}</h3>
      <div className='flex justify-evenly m-5'>
          <a href={gitHub} target='_blank' rel='noreferrer' className='inline-block px-8 py-3 border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-300 duration-300 shadow-lg'>Code</a>
          <a href={liveURL} target='_blank' rel='noreferrer' className='inline-block px-8 py-3 border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-300 duration-300 shadow-lg'>Live</a>
        </div>
      <p className='flex flex-wrap gap-2 flex-row items-center text-xs'>{tech.map(item =>
        <span className='inline-block px-2 py-1 bg-slate-400 text-gray-100 rounded-md' key={item}>{item}</span>
      )}</p>
    </div>
    </div>
  )
}

export default ProjectCard;
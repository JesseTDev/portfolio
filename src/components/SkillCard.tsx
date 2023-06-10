import React from 'react'
import { SkillType } from './Skills';


const SkillCard = ({title, icon}: SkillType) => {
  return (
    <div className='bg-slate-300 hover:bg-slate-200 transition-all transform hover:translate-y-2 duration-300 rounded-md shadow-lg'>
        <div className='text-gray-800 w-6 h-6 m-3'>
            {icon}
        </div>
        <h2 className='font-semibold text-lg text-gray-600 m-3'>{title}</h2>
    </div>
  )
}

export default SkillCard; 
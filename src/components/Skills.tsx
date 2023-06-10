import React from 'react'
import {MdWeb} from 'react-icons/md';
import {FaHandHoldingHeart} from 'react-icons/fa';
import {VscCode} from 'react-icons/vsc';
import SkillCard from './SkillCard';

export type SkillType = {
  title: string;
  icon?: string | any;  
}; 

const SkillTypes: SkillType[] = [
{
  title: 'Front-End Development',
  icon: <VscCode className='w-full h-full'/>
},
{
  title: 'Web Design',
  icon: <MdWeb className='w-full h-full'/>
},
{
  title: 'Application Development',
  icon: <FaHandHoldingHeart className='w-full h-full'/>
},
];

function Skills() {
  return (
    <div>
         <h2 className='text-3xl text-center font-bold mt-12 text-indigo-600'>What I do</h2>
    <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      {SkillTypes.map((skill: SkillType) => {
        return (
         <SkillCard key={skill.title} title={skill.title} icon={skill.icon}/>
        )
      })}
    </div>
    </div>
  )
}

export default Skills
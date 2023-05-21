import React from "react";
import {FaGithub, FaLinkedin} from 'react-icons/fa'; 
import {HiOutlineMail} from 'react-icons/hi';

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                GitHub <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/JesseTDev', 
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/jesse-taylor-dev/', 
            style: 'rounded-tr-md'
        },
        {
            id: 3,
            child: (
                <>
                Contact <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:jessetaylordev5@gmail.com', 
            style: 'rounded-br-md'
        },
    ]; 

    return (
 <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
    <ul>
        {links.map((socialIcons) => {
            return (
                <li key={socialIcons.id} className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-600">
                <a href={socialIcons.href} className="flex justify-between items-center w-full text-white" target='_blank' rel="noreferrer"> 
                <>
                {socialIcons.child}
                </>
                </a>
               </li>
            ); 
        })}
       
    </ul>
 </div>
    );
}; 

export default SocialLinks; 
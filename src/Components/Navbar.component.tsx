import React, {useContext} from "react";
import {FaBars, FaTimes} from 'react-icons/fa'; 
import { PortfolioContext } from "../Context/Site.context";
import { Link } from "react-scroll";

interface NavLinks {
    id: number | string; 
    link: string;
}; 

const Navbar = () => {

    const {nav, setNav} = useContext(PortfolioContext); 

    const navClickHandler = () => {
        setNav(!nav); 
    }; 

    const links: NavLinks[] = [
        {
            id: 1,
            link: 'home'
        },
        { 
            id: 2,
            link: 'about'
        },
        {
            id: 2,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'contact'
        },
    ];


    return (
<div className="flex justify-between items-center w-full h-20 bg-white text-black fixed px-4 z-10">
   <h1 className="text-2xl ml-2 italic">{`<J.T.>`}</h1>

   <ul className="hidden md:flex">

    {links.map((navlink => {
        return (
            <li key={navlink.id} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
            <Link to={navlink.link} smooth duration={800} offset={-60}>{navlink.link}</Link></li>
        )
    }))}
   </ul>

   <div onClick={navClickHandler} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
    {nav ? <FaTimes size={30} /> : <FaBars size={30} /> }
   </div>

   {nav &&  <ul className="flex flex-col justify-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-200 text-center">
    {links.map((navLink) => {
        return (
            <li className="px-4 cursor-pointer capitalize py-6 text-4xl" key={navLink.id}>
                <Link onClick={navClickHandler} to={navLink.link} smooth duration={800}>{navLink.link}</Link>
            </li>
        )
    })}
   </ul>}

</div>
    );
};

export default Navbar; 
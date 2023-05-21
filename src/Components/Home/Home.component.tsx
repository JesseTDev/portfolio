import React, {useContext} from "react";
import { MdOutlineArrowForward } from 'react-icons/md'
import {BsGit} from 'react-icons/bs'; 
import {SiTypescript, SiJavascript, SiTailwindcss, SiStyledcomponents, SiRedux, SiNetlify} from 'react-icons/si'; 
import {FaReact, FaCss3Alt, FaHtml5} from 'react-icons/fa'; 
import { Link } from "react-scroll";
import { PortfolioContext } from "../../Context/Site.context";

const Home = () => {

  const {nav} = useContext(PortfolioContext); 

  const techIcons = [
    { icon: SiTypescript, color: "#007acc" },
    { icon: SiJavascript, color: "#F0DB4F" },
    { icon: FaReact, color: "#61dbfb" },
    { icon: SiRedux, color: "#764abc" }, 
    { icon: SiTailwindcss, color: "#48e0d1" },
    { icon: SiStyledcomponents, color: "pink" },
    { icon: FaCss3Alt, color: "#264de4" }, 
    { icon: FaHtml5, color: "#e34c26" },
    { icon: BsGit, color: "#F1502F" },
    { icon: SiNetlify, color: "#29B6B3"},
  ];

  return (
    <div id="home" className="w-full h-screen bg-gradient-to-b from-white via-white to-gray-300">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center h-full text-center">
          <h2 className="text-4xl sm:text-7xl font-bold text-black">Jesse Taylor</h2>
          <h4 className="m-2 text-2xl sm:text-4xl text-black">Software Developer</h4>
          <div className="flex">
          {techIcons.map((icon, index) => (
              <p className="text-gray-500 px-3 py-4 max-w-md" key={index}>
                {React.createElement(icon.icon, { size: 25, color: icon.color })}
              </p>
            ))}
          </div>
          <div className="flex items-center justify-center">
           {nav ? null : <Link to='portfolio' offset={-80} smooth duration={800} className="group text-white w-fit px-8 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer transform transition-transform duration-300 hover:scale-105">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineArrowForward className="ml-1" />
              </span>
            </Link>}
          </div>
        </div>
      </div>
    </div>
 
  );
};

export default Home; 
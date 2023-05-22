import React from "react";
import bookStore from "../Assets/Portfolio/bookstore.png";
import trivia from "../Assets/Portfolio/trivia.png";
import reduxTodo from "../Assets/Portfolio/reduxTodo.png";
import portfolioImg from "../Assets/Portfolio/portfolio.png"; 
import {SiTypescript, SiJavascript, SiTailwindcss, SiStyledcomponents, SiRedux, SiNetlify} from 'react-icons/si'; 
import {FaReact, FaCss3Alt, FaHtml5} from 'react-icons/fa'; 
import {IconType} from 'react-icons/lib';

interface PortfolioInfo {
  id: number;
  title: string;
  icons?: { icon: IconType; color: string }[];
  desc: string;
  src?: string;
  netlify: string;
  codeLink: string; 
};

const Portfolio = () => {

  const portfolioInfo: PortfolioInfo[] = [
    {
      id: 1,
      title: "Book Store Project",
      icons: [
        { icon: SiJavascript, color: "#F0DB4F" },
        { icon: FaReact, color: "#61dbfb" },
        { icon: FaCss3Alt, color: "#264de4" }, 
        { icon: FaHtml5, color: "#e34c26" },
        { icon: SiStyledcomponents, color: "pink" },
        { icon: SiNetlify, color: "#29B6B3"}, 
      ],
      desc: "React (Context API, Styled Components) | Javascript | Firebase | MUI",
      src: bookStore,
      netlify: "https://github.com/JesseTDev/bookstoreproject",
      codeLink: "https://github.com/JesseTDev/bookstoreproject"
    },
    {
      id: 2,
      title: "Trivia Application",
      icons: [
        { icon: SiJavascript, color: "#F0DB4F" },
        { icon: FaReact, color: "#61dbfb" },
        { icon: FaCss3Alt, color: "#264de4" }, 
        { icon: FaHtml5, color: "#e34c26" },
        { icon: SiStyledcomponents, color: "pink" },
        { icon: SiNetlify, color: "#29B6B3"},
      ],
      desc: "React (Context API, Styled Components) | Javascript | MUI",
      src: trivia,
      netlify: "https://jesse-taylor-trivia-application.netlify.app/",
      codeLink: "https://github.com/JesseTDev/trivia-project-app"
    },
    {
      id: 3,
      title: "Redux Todo Application",
      icons: [
        { icon: SiTypescript, color: "#007acc" },
        { icon: SiJavascript, color: "#F0DB4F" },
        { icon: FaReact, color: "#61dbfb" },
        { icon: SiRedux, color: "#764abc" },
        { icon: FaCss3Alt, color: "#264de4" }, 
        { icon: FaHtml5, color: "#e34c26" },
        { icon: SiStyledcomponents, color: "pink" },
        { icon: SiNetlify, color: "#29B6B3"},
      ],
      desc: "Typescript | React (Redux, Styled Components)",
      src: reduxTodo,
      netlify: "https://jesse-taylor-redux-todo.netlify.app/",
      codeLink: "https://github.com/JesseTDev/redux-todo-project"
    },
    {
      id: 4,
      title: "Portfolio Site",
      icons: [
        { icon: SiTypescript, color: "#007acc" },
        { icon: SiJavascript, color: "#F0DB4F" },
        { icon: FaReact, color: "#61dbfb" },
        { icon: SiTailwindcss, color: "#48e0d1" },
        { icon: FaCss3Alt, color: "#264de4" }, 
        { icon: FaHtml5, color: "#e34c26" },
        { icon: SiNetlify, color: "#29B6B3"},
      ],
      desc: "Tailwind CSS | Responsive Mobile First  | Tyescript | React (Context API)",
      src: portfolioImg,
      netlify: 'https://jessetaylorportfolio.netlify.app/',
      codeLink: "https://github.com/JesseTDev/portfolio"
    }
  ];

  return (
    <div id="portfolio" className="bg-gradient-to-b from-gray-800 to-black text-white min-h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-400">Portfolio</p>
          <p className="py-6">My Projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolioInfo.map((project) => {
            return (
              <div key={project.id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={project.src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                  style={{ width: "100%", height: "200px" }}
                />
                <h2 className="text-center m-2 text-xl/8 font-bold">{project.title}</h2>
                <p className="text-center m-1">
                {project.icons && (
                <div className="flex justify-center">
                  {project.icons.map((icon) => (
                  <span
                    key={icon.color}
                    style={{ color: icon.color }}
                    className="mr-1"
                  >
                  {React.createElement(icon.icon)}
                  </span>
                 ))}
                </div>
                  )}
              </p>
                <p className="text-center m-1">{project.desc}</p>
                <div className="flex items-center justify-center">
                  <a href={project.netlify} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 cursor-pointer" target="_blank" rel="noreferrer">
                    Interact
                  </a>
                  <a href={project.codeLink} className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105 cursor-pointer" target="_blank" rel="noreferrer">
                    Code
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div> 

        </div>
    ); 
};

export default Portfolio; 
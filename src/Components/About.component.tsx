import React from "react";

const About = () => {
  return (
    <div id="about" className="min-h-screen bg-gradient-to-b from-gray-300 to-gray-800 text-white flex items-center">
      <div className="max-w-screen-lg p-4 mx-auto bg-gray-900 rounded-lg shadow-lg">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-cyan-400">About Me</h2>
        </div>
        <p className="text-md mt-5">
          My name is Jesse Taylor, and I am a software developer with a passion for creating engaging and user-friendly applications and web experiences. While my journey started as a successful touring musician, I have transitioned into the world of software developing to explore my love for creativity and technology.
        </p>

        <br />

        <p className="text-md">
          As a front-end developer, I specialize in React, Next.js and relevant hooks, which allow me to build dynamic and interactive web applications. React's component-based architecture resonates with my artistic background, enabling me to create modular and reusable code that drives smooth user experiences. I have a passion for using Typescript / Javascript to give great functionality to every application I create. I strive to create intuitive interfaces that engage users and provide them with a seamless browsing experience.

          In addition to React, Typescript/Javascript, I have a strong command of core web technologies such as HTML and CSS. I am also well-versed in styling frameworks like Tailwind CSS and Styled Components.
        </p>
                
          I am proficient in working with Git, a powerful version control system. With Git, I can effectively manage code repositories, collaborate seamlessly with other developers, and track changes throughout the development process. 
        <p className="text-md mt-5">
                
          I am an avid learner with a deep passion for technology, and I am constantly seeking opportunities to expand my skill set and stay at the forefront of the ever-evolving software development landscape. I thrive on the excitement of discovering and mastering new technologies, and tools that can enhance the user experience. With an insatiable curiosity and a dedication to lifelong learning, I am eager to embrace and adapt to emerging technologies, ensuring that I can provide innovative solutions that meet the needs of today's digital world

         </p>
          <p className="text-md mt-5">
          My background as a professional musician has instilled in me a strong work ethic, attention to detail, and the ability to collaborate effectively with diverse teams. I am a creative problem-solver who thrives on challenges and takes pride in delivering high-quality solutions. 
        </p>
      </div>
    </div> 
  );
};

export default About;

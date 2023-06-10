import React from "react";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";

const App = () => {

  return (

      <div className='font-inter bg-white max-w-5xl mx-auto w-11/12'>
        <HeroSection /> 
        <Projects /> 
      </div>
  );
}

export default App;

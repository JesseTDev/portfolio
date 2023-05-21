import React from 'react';
import './index.css'; 

// Imported Components 
import Home from './Components/Home/Home.component';
import About from './Components/About.component';
import SocialLinks from './Components/Home/SocialLinks.component';
import Portfolio from './Components/Portfolio.component';
import Contact from './Components/Contact.component';
import Navbar from './Components/Navbar.component';

const  App = () => {
  return (
    <div>
      <Navbar />
      <Home /> 
      <About /> 
      <Portfolio /> 
      <Contact /> 
      <SocialLinks /> 
    </div>
  );
}

export default App;
  
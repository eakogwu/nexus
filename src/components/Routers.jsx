import React from 'react';
import {Routes, Route} from "react-router";
import Home from "../pages/home";
import About from "../pages/about";
import Services from "../pages/services";
import Contact from "../pages/contact";

const Routers = () => {
  return (
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="services" element={<Services/>}/>
      <Route path="contact" element={<Contact/>}/>
    </Routes>
  );
};

export default Routers;
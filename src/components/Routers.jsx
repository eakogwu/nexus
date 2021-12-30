import React from 'react';
import {Routes, Route} from "react-router";
import Home from "../pages/home";
import About from "../pages/about";
import Services from "../pages/services";
import Contact from "../pages/contact";
import Login from "../admin/components/Login";
import Dashboard from "../admin/components/Dashboard";

const Routers = () => {
  return (
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="services" element={<Services/>}/>
      <Route path="contact" element={<Contact/>}/>

        <Route path="/login" element={<Login/>}/>
        <Route path="/admin">
            <Route path="dashboard" element={<Dashboard/>}/>
        </Route>
    </Routes>
  );
};

export default Routers;
import React from 'react';
import {Routes, Route} from "react-router";
import Home from "../pages/home";

const Router = () => {
  return (
    <Routes>
      <Route  path="/" element={<Home/>}/>

    </Routes>
  );
};

export default Router;
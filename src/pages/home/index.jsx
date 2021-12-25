import React from 'react';
import Layout from "../../components/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import Register from "./components/Register";
import Contact from "./components/Contact";

const Home = () => {
  return (
    <div>
      <Layout>
        <Hero/>
        <About/>
        <Register/>
        <Contact/>
      </Layout>
    </div>
  );
};

export default Home;
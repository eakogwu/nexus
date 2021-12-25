import React, {useEffect} from 'react';
import Layout from "../../components/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import Register from "./components/Register";
import Contact from "./components/Contact";
import scrollreveal from "scrollreveal";

const Home = () => {

  useEffect( () => {
    const sr = scrollreveal({
      origin:"top",
      distance: "80px",
      duration:2000,
      reset:true
    });
    sr.reveal(
      `
      #heroContent,
      #aboutContainer,
      #registerContainer 
      `,
      {
        opacity:0,
        interval:300
      }
    )

  },[] )

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
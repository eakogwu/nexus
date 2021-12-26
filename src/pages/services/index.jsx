import React, {useEffect} from 'react';
import Layout from "../../components/Layout";
import HowItWorks from "./components/HowItWorks";
import OurServices from "./components/OurServices";
import FaQsTestimonials from "./components/FAQsTestimonials";
import scrollreveal from "scrollreveal";
const Services = () => {

    useEffect( () => {
        const sr = scrollreveal({
            origin:"top",
            distance: "80px",
            duration:1500,
            reset:true
        });
        sr.reveal(
            `
      #howItWorks,
      .service,
      #faqs,
      .testimonials 
      `,
            {
                opacity:0,
                interval:300
            }
        )

    },[] )

  return (
    <Layout>
        <HowItWorks/>
        <OurServices/>
        <FaQsTestimonials/>
    </Layout>
  );
};

export default Services;
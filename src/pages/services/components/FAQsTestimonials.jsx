import React from 'react';
import styled from "styled-components";
import FaQs from "./FAQs";
import Testimonials from "./Testimonials";

const FaQsTestimonials = () => {
    return (
        <Section>
            <FaQs/>
            <Testimonials/>
        </Section>
    );
};

const Section = styled.section`
  display: flex;
  padding: 3rem;


  @media screen and (min-width: 260px) and (max-width: 780px){
    flex-direction: column;
  }
`;

export default FaQsTestimonials;
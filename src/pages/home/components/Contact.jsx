import React from 'react';
import styled from "styled-components";
import {FaEnvelope} from "react-icons/fa";
import {BsFillTelephoneFill} from "react-icons/bs";



const Contact = () => {
  return (
    <Section>
      <div className="title">
        <h1>Contact us</h1>
      </div>
      <div className="content">
        <div className="email">
          <FaEnvelope/> <a href="mailto:contact@nexus.com" target="_blank"  rel="noopener noreferrer">contact@nexus.com</a>
        </div>
        <div className="phone">
          <BsFillTelephoneFill/>  <a href="tel:+447 546 46454" target="_blank"  rel="noopener noreferrer">+447 546 46454</a>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  padding: 3rem;
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  .title{
    h1{
      font-size: 2rem;
      font-weight: 300;
      &:after{
        content: "";
        height: 0.2rem;
        width: 7.300000000000001rem;
        display: block;
        text-align: center;
        margin: 1rem auto;
        background-color: black;
      }
    }
   
  }
  
  .content{
    display: flex;
    gap: 1.3rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 2rem;
    
    .email,.phone{
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.5rem;
      a{
        text-decoration: none;
        color:#002441;
      }
    }
  }

  @media screen and (min-width: 260px) and (max-width: 750px){
    height: auto;
    .content{
      flex-direction: column;
      padding: 1rem;
    }
  }
`

export default Contact;
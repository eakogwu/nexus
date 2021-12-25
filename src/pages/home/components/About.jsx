import React from 'react';
import styled from "styled-components";

const About = () => {
  return (
    <Section>
      <div className="container">
        <div className="title">
          <h1>Bio (About us)</h1>
        </div>
        <div className="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequuntur cupiditate deleniti dolore eius ipsam labore nam nihil obcaecati pariatur quibusdam quis reiciendis sint temporibus tenetur totam, ullam voluptate voluptatem!</p>
        </div>
      </div>
    </Section>
  );
};


const Section = styled.section`
  padding: 2rem 3rem;
  display: flex;
  justify-content:center;
  align-items: center;
  width: 100%;
  height: 80vh;
  .container{
    width: 80%;
    padding: 1rem;
    .title{
      text-align: center;
      h1{
        font-size: 2rem;
        padding: 1rem 0;
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
      padding: 1rem 2rem;
      font-size: 1.4rem;
    }
  }

  @media screen and (min-width: 260px) and (max-width: 1080px){
    padding: 1rem;
    height: 100%;
    .container{
      width: 100%;
      
      .content{
        padding:  0.5rem; 
      }
    }
  }
`

export default About;
import React from 'react';
import styled from "styled-components";
const HowItWorks = () => {


    return (
        <Section id="howItWorks">
            <div className="container howItWorks">
                <div className="title">
                    <h1>HOW IT WORKS</h1>
                </div>
                <div className="content">
                    <ul>
                        <li>
                            <span>1</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, voluptate?</p>
                        </li>
                        <li>
                            <span>2</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, voluptate?</p>
                        </li>
                        <li>
                            <span>3</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, voluptate?</p>
                        </li>
                    </ul>
                </div>
            </div>
        </Section>

    );
};

const Section = styled.section`
  width: 100%;
  padding: 2rem 0;
  
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
  
  .container{
    padding: 1rem 3rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 70vh;
    
    ul{
      display: flex;
      justify-content: center;
      list-style-type: none;
      gap: 2rem;
      
      li{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
        text-align: center;
        span{
          border-radius: 50%;
          width: 3rem;
          height: 3rem;
          line-height: 3rem;
          background-color: #EEF8F3;
          
        }
        
      }
    }
    
  }

  @media screen and (min-width: 260px) and (max-width: 1000px){
    .container{
      height: auto;
      ul{
        flex-direction: column;
      }
    }
  }
`



export default HowItWorks;
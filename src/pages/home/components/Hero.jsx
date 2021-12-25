import React, {Fragment} from 'react';
import hero from "../../../assets/hero-img.jpeg";
import whiteLogo from "../../../assets/logo-white.png";
import styled from "styled-components";

const Hero = () => {
  return (
    <Fragment>
      <Section id="hero">
        <div className="background">
          <img src={hero} alt="hero"/>
        </div>
        <div className="content" id="heroContent">
          <div className="title">
            <h1>You Deserve Better: Join the
              Future of Healthcare with
              NEXUS | NURSING.</h1>
          </div>
        </div>
        <div className="transparent-logos">
          <img src={whiteLogo} alt=""/>
        </div>
      </Section>
    </Fragment>
  );
};


const Section = styled.section`
  position: relative;
  width: 100%;
  height: 80vh;
  
  
  .transparent-logos{
    position: absolute;
    bottom: -20px;
    left: -10px;
    
    img{
      &:first-of-type{
        width: 200%;
        filter: blur(8px);
      }
    }
    
  }
  
  .background{
    height: 100% ;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(60%);
    }
  }
  .content{
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    gap: 1rem;
    
    .title{
      color: white;
      width: 50%;
      h1{
        font-size: 3rem;
        letter-spacing: 0.2rem;
      }
    }
  }

  @media screen and (min-width: 260px) and (max-width: 980px){
    height: 25rem;
    .background{
      img{
        height: 100%;
      }
    }
    .content{
      .title{
        width: 100%;
        h1{
          font-size: 1.5rem;
          
        }
      }
    }
  }
`;

export default Hero;
import React from 'react';
import styled from "styled-components";
import whiteLogo from "../../../assets/logo-white.png";

const OurServices = () => {
    const services = [
        {service:"Lorem ipsum dolor sit amet consectetur adipiscin Lorem ipsum dolor sit amet consectetur adipiscin"},
        {service:"Lorem ipsum dolor sit amet consectetur adipiscin"},
        {service:"Lorem ipsum dolor sit amet consectetur adipiscin"},
        {service:"Lorem ipsum dolor sit amet consectetur adipiscin"}
    ]

    const Icon = () => {
        return <div className="icon">
            <img src={whiteLogo} alt="nexus"/>
        </div>
    }


    return (
        <Section id="ourServices">
            <div className="container ourServices">
                <div className="title">
                    <h1>OUR SERVICES</h1>
                </div>
                <div className="content">
                    {
                        services.map( (service,index) => <div className="service" key={index}>
                                <Icon/><p>{service.service}</p>
                            </div>

                        )
                    }
                </div>
            </div>
        </Section>
    );
};

const Section = styled.section`
  height: 60vh;
    .container{
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
      
      &.ourServices{
        background-color: #F5F5F5;
        padding: 2rem 3rem 5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
         
        .content{
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 1rem 6rem;
          
          .service{
            display: flex;
            gap: 1rem;
            justify-content: center;
            align-items: center;
            .icon{
              background-color: #002441;
              width: 2rem;
              height: 2rem;
              padding: 0.3rem;
              border-radius: 50%;
              line-height: 1.5rem;
              img{
                width: 100%;
              }
            }
            p{
              flex-basis: 350px;
            }
          }
        }

      }
      
    }

  @media screen and (min-width: 260px) and (max-width: 780px){
    height: auto;
    .container{
      &.ourServices{
        .content {
          grid-template-columns: 1fr;
          .service{
            .icon{
              min-width: 2rem;
              min-height:2rem;
            }
            p{
              flex-basis: auto;
            }
          }
          
        }
      }
      
    }
  }
    
`

export default OurServices;
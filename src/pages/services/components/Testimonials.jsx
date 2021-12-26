import React from 'react';
import styled from "styled-components";
import {BsStarFill} from "react-icons/bs";

const Testimonials = () => {
    return (
        <Section>
            <div className="container">
                <div className="title">
                    <h1>What people are saying</h1>
                </div>
                <div className="content">
                    <div className="testimonials">
                        <div className="testimonial">
                            <div className="rating">
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStarFill/>
                            </div>

                            <div className="message">
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscin
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscin
                            </div>
                            <div className="author">
                                <p>Emmanuel</p>
                            </div>

                        </div>

                        <div className="testimonial">
                            <div className="rating">
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStarFill/>
                            </div>

                            <div className="message">
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscin
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscin
                            </div>
                            <div className="author">
                                <p>Emmanuel</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

const Section = styled.section`
    flex: 1;
  
  .container{

    > .title {
      padding: 1rem 1.5rem;

      h1 {
        font-size: 1.5rem;
        font-weight: 400;
      }

    }
    
    .content{
      
      .testimonials{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 2rem 1rem;
        .testimonial{
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          background-color: #EEF8F3;
          padding: 1rem;
          .rating{
            color: #FFD704;
          }
          
          .author{
            align-self: end;
          }
        }
        
      }
      
    }
  }

  
  
`;

export default Testimonials;
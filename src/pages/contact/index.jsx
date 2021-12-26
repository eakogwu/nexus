import React from 'react';
import styled from "styled-components";
import Layout from "../../components/Layout";
import nursesVid from "../../assets/nurses.mp4";
import Form from "./components/Form";
import ContactDetails from "../home/components/Contact";

const Contact = () => {
  return (
    <Layout>
        <Main>
            <div className="container">
                <video autoPlay loop muted id="videoBg">
                    <source src={nursesVid} type="video/mp4"/>
                </video>
                <Form/>
            </div>
            <ContactDetails/>
        </Main>
    </Layout>
  );
};

const Main = styled.main`
    width: 100%;

  .container{
    position: relative;
    padding: 0 3rem;
    display: flex;
    justify-content: end;
    align-items: center;
    height: 90vh;
    video{
      position: absolute;
      left: 0;
      width: 100%;
      height:inherit;
      object-fit: cover;
      z-index: -1;
    }
  }

  @media screen and (min-width: 260px) and (max-width: 750px){
    .container{
      justify-content: center;
      video{
        display: none;
      }
    }
  }
`;

export default Contact;
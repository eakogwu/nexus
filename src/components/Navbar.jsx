import React, {useState} from 'react';
import styled from "styled-components";
import logo from "../assets/logo.png";
import {GiHamburgerMenu} from "react-icons/gi";
import {VscChromeClose} from "react-icons/vsc";
import {Link} from "react-router-dom";
import CustomLink from "./CustomLink";
const Navbar = () => {
  const [navbarIsActive,setNavbarIsActive] = useState();

  return (
    <>
    <Nav>
      <div className="brand">
        <div className="container">
          <Link to="/">
            <img src={logo} alt="Nexus|Nursing Logo" id="mainLogo"/>
          </Link>

        </div>
        <div className="toggle">
          {navbarIsActive ? <VscChromeClose onClick={ () => setNavbarIsActive(false)}/> :
          <GiHamburgerMenu onClick={ () => setNavbarIsActive(true) } />}
        </div>
      </div>

      <ul id="desktopMenu">
        <li><CustomLink to="/">Home</CustomLink></li>
        <li><CustomLink to="/services">Services</CustomLink></li>
        <li><CustomLink to="/about">About us</CustomLink></li>
        <li><CustomLink to="/contact">Contact us</CustomLink></li>
      </ul>
    </Nav>

    <ResponsiveNav state={navbarIsActive}>
    <ul>
      <li><CustomLink to="/" onClick={ () => setNavbarIsActive(false) }>Home</CustomLink></li>
      <li><CustomLink to="/services" onClick={ () => setNavbarIsActive(false) }>Services</CustomLink></li>
      <li><CustomLink to="/about" onClick={ () => setNavbarIsActive(false) }>About</CustomLink></li>
      <li><CustomLink to="/contact" onClick={ () => setNavbarIsActive(false) }>Contact</CustomLink></li>
    </ul>
    </ResponsiveNav>
    </>
  );
};


const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  background-color: #EEF8F3;

  .brand{
    .container{
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;
      font-size: 1.2rem;
      text-transform: uppercase;
      font-weight: 900;
      
      img{
        width: 150px;
      }
    }
    .toggle{
      display: none;
    }
  }

  ul{
    display: flex;
    list-style-type: none;
    gap: 1rem;
    li{
      a{
        text-decoration: none;
        color:#0077b6;
        transition: 0ms.1s ease-in-out;
        &:hover{
          color: #023e8a;
        }
      }
      a.active{
         color: #023e8a;
         font-weight: 700;
       }
    }
  }

  @media screen and (min-width: 260px) and (max-width: 1080px){
    .brand{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .toggle{
        display: block;
        z-index: 10;
      }
    }
    ul,
    button{
      display: none;
    }
  }
`;


const ResponsiveNav = styled.div`
  display: flex;
  position: absolute;
  z-index: 5;
  background-color: white;
  width: 100%;
  height: 30vh;
  align-items: center;
  transition: 0.3s ease-in-out;
  top: ${({ state }) => (state ? "0px":"-400px")};
  ul{
    width: 100%;
    list-style-type: none;
    li{
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;
      a{
        text-decoration: none;
        color: #0077b6;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover{
          color: #023e8a;
        }
        &:first-of-type {
          a {
            color: #023e8a;
            font-weight: 900;
          }
        }
      }
    }
  }
`;

export default Navbar;
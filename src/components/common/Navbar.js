import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import styled, { css } from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import {NavLink} from "react-bootstrap";

const Header = styled.div`
      &.header {
        position: fixed;
        width: 100%;
        z-index: 10;
        display: flex;
        justify-content: space-between;
        align-items: center;
        overflow: visible;
      }
      
    &.header-bg{
      background-color: rgba(0,0,0,.8);
      transition: 0.5s ease-in-out;
    }
  
      .nav-menu {
        display: flex;
        padding: 0;
      }
      
      .nav-menu li {
        padding: 0 1rem;
      }

      .hamburger {
        margin-right: 0.5rem;
        display: none;
      }
  
    .active{
    border-bottom: 2px solid white;
      transition: border 0.5s ease-in-out;
    }
        
      @media screen and (max-width: 1040px) {
        .nav-menu {
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100vh;
          background-color: rgba(0,0,0,0.9);
          position: absolute;
          transition: left 0.5s ease-in-out;
          top: 0;
          left: -100%;
          z-index: -3;
        }
        
        .nav-menu.active{
          left: 0;
        }
        
        .nav-menu li {
          padding: 1rem 0;
        }
        .nav-menu li a {
          font-size: 2rem;
        }
        
        .hamburger {
          display: initial;
        }
      }
    `;

const StyledLink = styled(Link)`
      font-size: 1.2rem;
      font-weight: 500;
      padding-bottom: 0.3rem;
    `;



function Navbar(props) {
    const [click, setClick] = useState(false);
    const [color, setColor] = useState(false);
    const location = useLocation();

    const handleClick = () =>{
        setClick(!click);
    }
    const changeColor = () =>{
        if(window.scrollY >=10){
            setColor(true);
        }else{
            setColor(false);
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", changeColor);
    });





    return (
        <Header className={color ? "header header-bg" : "header"}>
            <Link to="/"><h1>Sangbeom Yoo</h1></Link>
            <ul className={click? 'nav-menu active': 'nav-menu'}>
                <li onClick={()=>setTimeout(()=>setClick(false), 500)}><StyledLink exact className={location.pathname ==='/' ? 'active': ''} to="/">Home</StyledLink></li>
                <li onClick={()=>setTimeout(()=>setClick(false), 500)}><StyledLink className={location.pathname ==='/project' ? 'active': ''} to="/project">Project</StyledLink></li>
                <li onClick={()=>setTimeout(()=>setClick(false), 500)}><StyledLink className={location.pathname ==='/about' ? 'active': ''} to="/about">About</StyledLink></li>
                <li onClick={()=>setTimeout(()=>setClick(false), 500)}><StyledLink className={location.pathname ==='/contact' ? 'active': ''} to="/contact">Contact</StyledLink></li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{ color: "#fff" }} />) : (<FaBars size={20} style={{ color: "#fff" }} />)}
            </div>
        </Header>
    );
}

export default Navbar;
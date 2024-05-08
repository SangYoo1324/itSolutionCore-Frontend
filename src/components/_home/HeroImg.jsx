import React from 'react';
import styled from "styled-components";
import IntroImg from "../../assets/HeroImg.jpg"
import {Link} from "react-router-dom";
import cv from "../../assets/Sangbeom Yoo _Resume.pdf"
import {Cursor, useTypewriter} from "react-simple-typewriter";
const StylesHeroImg = styled.div`
    
  &.hero{
    width: 100%;
    position: relative;
  }
  &.hero .content{
    position: absolute;
    transform: translate(-50%, -50%); 
    top: 50%;
    left: 50%;
  }

  &.hero .content h1{
    text-align: center;
    font-size: 3rem;
    padding: 0.6rem 1.5rem;
    font-weight: bold;
  }

  &.hero .content p{
    text-align: center;
    font-size: 1.4rem;
    font-weight: 200;
    text-transform: uppercase;
  }
  
    .mask{
      width: 100%;
      height: 100vh;
      position: relative;
    }
  .into-img{
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    object-fit: cover;
  }
  
  .mask::after{
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left: 0;
    background-color: #000;
    opacity: 0.8;
  }
  
  .btn-wrap{
    display: flex;
    justify-content: center;
  }
  
  @media screen and (max-width: 640px){
    &.hero .content h1{
    font-size: 2rem;
    }
    
  }
`

function HeroImg(props) {
    const [text] = useTypewriter({
        words: ['Frontend App Development', ' Backend server Development', 'DevOps solutions for Businesses'],
        loop:{},
        typeSpeed: 120,
        deleteSpeed: 80
    });

    const downloadCv = ()=>{
        console.log("download CV");
        const link = document.createElement("a");
        link.href = cv;
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <StylesHeroImg className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt=""/>
        </div>

            <div className="content">
                <p>Hi, I'm open to IT jobs & services</p>
                <h1>{text}<span><Cursor cursorStyle={ '|'}/>
            </span></h1>
                <div className="btn-wrap">
                    <Link to="/project" className="btn block">Projects</Link>
                    <Link onClick={downloadCv} className="btn btn-light block">DOWNLOAD CV</Link>
                </div>

            </div>



        </StylesHeroImg>
    );
}

export default HeroImg;
import React from 'react';
import styled from "styled-components";
import sudo_background from '../../assets/HeroImg2.jpg';

const HeroImgStyles = styled.div`
    &.hero-img{
      width: 100%;
      background: rgba(0,0,0,0.5);
      height: 60vh;
      position: relative;
    }
  
  &.hero-img::before{
    content: "";
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${sudo_background});
    background-size: cover;
    background-position: center;
    height: 100%;
    width: 100%;
    position: absolute;
    top:0;
    left: 0;
    z-index: -1;
  }
  
  .heading{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  &.hero-img h1{
    font-size: 2.4rem;
    font-weight: bold;
  }
  
  &.hero-img p{
    font-size: 1.4rem;
    text-align: center;
  }
  
    @media screen and (max-width: 640px){
      &.hero-img h1{
        font-size: 1.8rem;
      }
    }
`

function HeroImg2(props) {
    return (
        <HeroImgStyles className="hero-img">

            <div className="heading">
                <h1>{props.heading}</h1>
                <p>{props.text}</p>

            </div>

        </HeroImgStyles>
    );
}

export default HeroImg2;
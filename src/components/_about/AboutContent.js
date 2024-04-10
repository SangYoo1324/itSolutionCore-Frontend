import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import frontend from "../../assets/about/Frontend.png";
import backend from "../../assets/about/Backend.png";
import devOps from "../../assets/about/DevOps.png";

const AboutContentStyles = styled.div`
  &.about{
    width: 100%;
    margin: 3rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    height: 100%;
  }
  
  &.about .left{
    text-align: center;
    margin: auto;
    padding: 1rem;
    max-width: 350px;
  }
  
  &.about .left p{
    margin: 1.2rem 0;
  }
  
  &.about .right{
    max-width: 700px;
  }
  
  .right .img-container{
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    position: relative;
    align-items: center;
    text-align: center;
  }
  
  .right .img{
    max-width: 100%;
    border: 1px solid #333;
    
  }
  

  .right .bottom{
    grid-column : 4 / 13;
    grid-row : 1;
    z-index: 5;
  }

  .right .top{
    grid-column : 3 / 12;
    grid-row : 1;
    padding-top: 10%;
    z-index: 6;
  }
  
  .right .middle{
    grid-column : 1/9;
    padding-top: 30%;
    grid-row: 1;
    z-index: 7;
  }
    
`

function AboutContent(props) {
    return (
        <AboutContentStyles className="about">
            <div className="left">
                <h1 className="font-bold">Who am I?</h1>
                <p>I'm a Full-Stack developer. I create responsive secure websites for my clients.</p>
                <Link to="/contact">
                    <button className="btn">CONTACT</button></Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img className="img" src={frontend} alt=""/>
                    </div>
                    <div className="img-stack middle">
                        <img className="img" src={backend} alt=""/>
                    </div>
                    <div className="img-stack bottom">
                        <img src={devOps} alt=""/>
                    </div>
                </div>
            </div>
        </AboutContentStyles>
    );
}

export default AboutContent;
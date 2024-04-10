import React from 'react';
import styled from "styled-components";
import SectionTitle from "../common/SectionTitle";

const TimeLineStyles = styled.div`
    div{
      overflow: visible;
    }
  
    h2, small, p{
      color: black;
    }
  
    &.timeline{
      position: relative;
      max-width: 1200px;
      margin: 40px auto;
    }
  .content-container{
    padding: 10px 50px;
    position: relative;
    width: 50%;
    opacity:0;
    animation: movedown 1s linear forwards;
  }
  
  @keyframes movedown{
    0%{
      opacity: 1;
      transform: translateY(-30px);
    }
    100%{
      opacity: 1;
      transform: translateY(0px);
    }
  }
  
  .content-container:nth-child(1){
  animation-delay: 0s;
}
  .content-container:nth-child(2){
    animation-delay: 1s;
  }
  .content-container:nth-child(3){
    animation-delay: 2s;
  }
  
  
  .text-box{
    padding: 20px 30px;
    background: #fff;
    position: relative;
    border-radius: 6px;
    font-size: 15px;
  }
  .left-container{
    left: 0;
  }
  .right-container{
    left: 50%;
  }
  
   img{
    position: absolute;
    width: 40px;
    border-radius: 50%;
    right: -20px;
    top: 32px;
    z-index: 0;
  }
  .right-container img{
    left: -20px;
  }
  
  &.timeline::after{
    content: '';
    position: absolute;
    width: 6px;
    height: 100%;
    background: #fff;
    top: 0;
    left: 50%;
    margin-left: -3px;
    z-index: -1;
    animation: moveline 3s linear forwards;
  }

  @keyframes moveline {
    0%{
      height: 0;
    }
    100%{
      height: 100%;
    }
  }
  
  .text-box h2{
    font-weight: 600;
  }
  .text-box small{
    display: inline-block;
    margin-bottom: 15px;
  }
  
  .left-container-arrow{
    height: 0;
    width: 0;
    position: absolute;
    top: 28px;
    z-index: 1;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 15px solid #fff;
    right: -15px;
  }
  .right-container-arrow{
    height: 0;
    width: 0;
    position: absolute;
    top: 28px;
    z-index: 1;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-right: 15px solid #fff;
    left: -15px;
  }
  
  @media screen and (max-width: 600px){
    &.timeline{
      margin: 20px auto;
    }
    &.timeline::after{
      left: 31px;
    }
    .content-container{
      width: 100%;
      padding-left: 80px;
      padding-right: 25px;
    }
    
   .right-container{
     left: 0;
   }
   
   .left-container img, .right-container img{
     left: 10px;
   }
   
   .left-container-arrow, .right-container-arrow{
     border-right: 15px solid #fff;
     border-left:0;
     left: -15px;
   }
  }
`

function Timeline(props) {
    return (
        <TimeLineStyles className="timeline">

                <div className="content-container left-container">
                    <img src={require('../../assets/about/web_dev.png')} alt=""/>
                    <div className="text-box">
                        <h2 className="font-bold">Terra Treasures E-Commerce - Web Dev</h2>
                        <small>01.03.2024 - 03.14.2024</small>
                        <p>E-Commerce App with Admin controllable inventory management system.</p>
                        <span className="left-container-arrow"></span>
                    </div>
                </div>

                <div className="content-container right-container">
                    <img src={require('../../assets/about/sys_admin.png')} alt=""/>
                    <div className="text-box">
                        <h2 className="font-bold">Sunrise Global Methodist Church - IT specialist</h2>
                        <small>06.30.2023 - CURRENT</small>
                        <p>E-Commerce App with Admin controllable inventory management system.</p>
                        <span className="right-container-arrow"></span>
                    </div>
                </div>

                <div className="content-container left-container">
                    <img src={require('../../assets/about/web_dev.png')} alt=""/>
                    <div className="text-box">
                        <h2 className="font-bold">Puget Sound Customs E-Commerce - Web Dev</h2>
                        <small>06.30.2023 - 09.27.2023</small>
                        <p>E-Commerce App with Admin controllable inventory management system.</p>
                        <span className="left-container-arrow"></span>
                    </div>
                </div>

            <div className="content-container right-container">
                <img src={require('../../assets/about/uw_logo.jpg')} alt=""/>
                <div className="text-box">
                    <h2 className="font-bold">University of Washington BS in Information Technology</h2>
                    <small>06.30.2023 - CURRENT</small>
                    <p>E-Commerce App with Admin controllable inventory management system.</p>
                    <span className="right-container-arrow"></span>
                </div>
            </div>
        </TimeLineStyles>
    );
}

export default Timeline;
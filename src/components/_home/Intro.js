import React from 'react';
import styled from "styled-components";
import selfie from "../../assets/home/sangbeom.jpg";
const IntroStyles = styled.div`
  
  &{
    margin: 3rem auto;
  }

    .intro-container{
      max-width: 1280px;
      margin: auto;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 40px;
      padding: 1rem 0;
    }
  
  .intro-container>*{
    min-height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .img-wrapper{
    width: 300px;
    height: 300px;
    border-radius: 50%;
    position: relative;
    
  }
  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }

  .img-wrapper::before {
    height: 300px;
    width: 300px;
    content: '';
    position: absolute;
    bottom: -100px; /* 이미지 아래로의 간격 조정 */
    left: -100px; /* 이미지 좌측으로의 간격 조정 */
    right: -100px; /* 이미지 우측으로의 간격 조정 */
    background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ZSSxn9Fohj2NK0BeNx89gI1FpjXt9zPcWunGHlRVFw&s");
    background-size: cover;
    background-position: center;
    object-fit: cover;
    border-radius: 50%;
    z-index: -1;
  }
  
  @media screen and (max-width: 960px){
    
    .intro-container{
      max-width: 90%;
      margin: auto;
      grid-template-columns: 1fr;
    }
    
    
    .img-wrapper::before{
      bottom: 0px; /* 이미지 아래로의 간격 조정 */
      left: 0px; /* 이미지 좌측으로의 간격 조정 */
      right: 0px; /* 이미지 우측으로의 간격 조정 */
    }
  }
  
`

function Intro(props) {
    return (
        <IntroStyles>

            <div className="intro-container">

                <div className="left">
                    <div className="img-wrapper">
                        <img src={selfie} alt=""/>
                    </div>
                </div>
                <div className="right">
                    <div className="text-wrap mt-[2rem]">
                        <h1 className="text-[1.8rem] mb-[2rem]">Hello, I'm  <b className="text-yellow-100">SANGBEOM YOO.</b> </h1>
                        <h3 className="text-[1.3rem]">~ Are you seeking a candidate with sufficient expertise in <b>Web Development?</b></h3>
                        <h3 className="text-[1.3rem]">~ Are you in search of <b>IT solutions</b>  tailored for your business?</h3>

                        <h3 className="text-[1.7rem] my-[3rem] text-yellow-100 font-bold text-center">" I am the perfect match for your needs! " </h3>

                        <p>During my time studying for an IT degree at the University of Washington, I acquired a significant amount of knowledge in the IT industry,
                            laying the groundwork for my expertise in Web Development. With a Full-Stack skillset encompassing Frontend UI, Backend server logic,
                            and DevOps solutions for enterprise-level system architecture, I am well-equipped to provide comprehensive Web-Dev solutions.
                            My skills have been demonstrated through internships at Sunrise-GMC and Terra-Treasures Web-App.
                            Please visit my portfolio website to explore my skillset and previous projects, which showcase how I meet your requirements. Thank you.</p>
                    </div>
                </div>

            </div>


        </IntroStyles>
    );
}

export default Intro;
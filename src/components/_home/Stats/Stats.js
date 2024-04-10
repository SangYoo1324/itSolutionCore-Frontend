import React from 'react';
import DonutProgressBar from "./DonutProgressBar";
import SectionTitle from "../../common/SectionTitle";
import styled from "styled-components";

const StatsStyles = styled.div`
    .stats-container{
    max-width: 1280px;
      margin:auto;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 40px;
      padding: 1rem 0;
    }
  
  
  @media screen and (max-width: 960px){
    .stats-container{
      max-width: 90%;
      margin: auto;
      grid-template-columns: 1fr;
    }
  }
`;


function stats(props) {
    return (
        <StatsStyles>
            <SectionTitle title={'Programming Language Skill-Level'} subTitle={'Compare the foundation of programming Language Skill-Level'}/>
            <div className="stats-container">
                <DonutProgressBar percentage={80} title={'TypeScript'}
                                  description={'Hands On Experience gained by Angular projects. Strong OOP foundation built by JAVA based projects.'}/>
                <DonutProgressBar percentage={90} title={'Java'}
                                  description={'Starting 2020, with the college requirement JAVA classes, it become my primary Programming language. Have concrete hands on experience with Backend Development with Springboot since 2022.'}/>
                <DonutProgressBar percentage={75} title={'SQL'}
                                  description={'Also have strong foundation with hands-on experience on Backend server Development. Not only DB design & control,have strong skillSet on ORM'}/>
            </div>

        </StatsStyles>
    );
}

export default stats;
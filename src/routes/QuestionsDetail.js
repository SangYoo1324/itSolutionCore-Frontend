import React from 'react';
import styled from "styled-components";
import {Link, useParams} from "react-router-dom";
import HeroImg2 from "../components/common/HeroImg2";
import {HashLink, NavHashLink} from "react-router-hash-link";

const QuestionsDetailStyles = styled.div`
  h1 {
    font-size: 24px;
    color: #fff;
  }

  .content {
    font-size: 16px;
    color: #fff;
    line-height: 1.6;
  }

  .back-link {
    display: block;
    margin-top: 20px;
    color: #007bff;
    text-decoration: none;
  }

  .back-link:hover {
    text-decoration: underline;
  }
  
  .bar{
    width: 100%;
    margin: 1.5rem auto;
    height: 2px;
    background-color: lightgray;
  }

`;

function QuestionsDetail(props) {

    const { id } = useParams();
    console.log("id",id);

    return (
        <QuestionsDetailStyles>
            <HeroImg2 heading={'Questionaries'} text={''}/>
            <div className="container">
                <h1>This is Title</h1>
                <div className="bar"></div>
                <p className="content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <HashLink to={'/contact#questions'} href="#" >Back ></HashLink>
            </div>
        </QuestionsDetailStyles>
    );
}

export default QuestionsDetail;
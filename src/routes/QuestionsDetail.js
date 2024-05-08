import React, {useEffect} from 'react';
import styled from "styled-components";
import {Link, useParams} from "react-router-dom";
import HeroImg2 from "../components/common/HeroImg2";
import {HashLink, NavHashLink} from "react-router-hash-link";
import {useDispatch, useSelector} from "react-redux";
import {asyncFetchQna} from "../redux/qna/QnASlice";

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
    const dispatch = useDispatch();
    const qna = useSelector(state=> state.qna);


    const { id } = useParams();
    console.log("id",id);
    useEffect(()=>{
        dispatch(asyncFetchQna(id));
    },[]);




    return (
        <QuestionsDetailStyles>
            <HeroImg2 heading={'Questionaries'} text={''}/>
            <div className="container">
                {qna.loading && (<h1>Loading....</h1>)}
                {!qna.loading && qna.data && (<h1>{qna.data.title}</h1>)}
                <div className="bar"></div>
                {qna.loading && (<h1>Loading....</h1>)}
                {qna.data && qna.data && ( <p className="content">{qna.data.content}</p>)}
                <HashLink to={'/contact#questions'} href="#" >{'<'} Back</HashLink>
            </div>
        </QuestionsDetailStyles>
    );
}

export default QuestionsDetail;
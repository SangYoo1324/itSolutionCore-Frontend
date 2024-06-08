import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import SectionTitle from "../common/SectionTitle";
import DashboardTable from "./DashboardTable";
import {asyncFetchQna, asyncFetchQnaList, fetchQnaList} from "../../redux/qna/QnAListSlice"
import {useDispatch, useSelector} from "react-redux";


const QuestionsStyles = styled.div`
`

function Questions(props) {

    const dispatch = useDispatch();
    const qnaList = useSelector(state=> state.qnaList.data);



// first render 시에만 호출
    useEffect(() => {
        dispatch(asyncFetchQnaList());
    }, []);

    const [qnaColumns, setQnaColumns] = useState([]);

    // qnaList가 변경될 시에만 호출
    useEffect(() => {
        if (qnaList && qnaList.length > 0) {
            const columns = Object.keys(qnaList[0])
                .map(key => ({ header: key, accessor: key }))
                .slice(0, 3);
            setQnaColumns(columns);

        }
    }, [qnaList]);

    // qnaColumns가 변경될 시에만 호출
    useEffect(()=>{
        console.log("qnaColumns", qnaColumns);
    }, [qnaColumns])

    return (
        <QuestionsStyles>
            {/*<button className="text-white" onClick={()=> dispatch(postQna(1))}>postQna</button>*/}
            <SectionTitle title={'Frequently Asked Questions'}
            subTitle={'Gathered some questions you might want to ask '}
            />
            <div id="questions"></div>
            { qnaColumns.length>0 && (<DashboardTable data={qnaList} columns={qnaColumns}/>) }

        </QuestionsStyles>
    );
}

export default Questions;
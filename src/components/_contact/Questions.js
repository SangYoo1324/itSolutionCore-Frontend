import React from 'react';
import styled from "styled-components";
import SectionTitle from "../common/SectionTitle";
import DashboardTable from "./DashboardTable";

//dataSet
import GuidePostsColumns from "../../data/guidePosts_columns.json"
import GuidePosts from "../../data/guidePosts.json"

const QuestionsStyles = styled.div`
`

function Questions(props) {
    return (
        <QuestionsStyles>

            <SectionTitle title={'Frequently Asked Questions'}
            subTitle={'Gathered some questions you might want to ask '}
            />
            <div id="questions"></div>
            <DashboardTable data={GuidePosts} columns={GuidePostsColumns}/>

        </QuestionsStyles>
    );
}

export default Questions;
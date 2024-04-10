import React from 'react';
import styled from "styled-components";
import BasicTable from "../common/BasicTable";
import SectionTitle from "../common/SectionTitle";

const ComparisonTableStyles = styled.div`
  margin-bottom: 5rem;
    
`

function ComparisonTable(props) {

    return (
        <ComparisonTableStyles className="container">
            <SectionTitle title={'Plan Comparison'} subTitle={'Compare the services you can get for each plans'}/>
            <BasicTable/>


        </ComparisonTableStyles>
    );
}

export default ComparisonTable;
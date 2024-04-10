import React, {useMemo} from 'react';
import styled from "styled-components";
import {useTable} from "react-table";
import planComparison from '../../data/planComparison.json'
import plan_columns from '../../data/plan_columns.json'
import {FaCheck, FaTimes} from "react-icons/fa";
const BasicTableStyles = styled.div`

  table{
    width:100%;
    table-layout: fixed;
  }
  .tbl-header{
    background-color: rgba(255,255,255,0.3);
  }
  .tbl-content{
    height:300px;
    overflow-x:auto;
    margin-top: 0px;
    border: 1px solid rgba(255,255,255,0.3);
  }
  th{
    padding: 20px 15px;
    text-align: left;
    font-weight: 500;
    font-size: 1rem;
    color: #fff;
    text-transform: uppercase;
    
  }
  td{
    padding: 15px;
    text-align: left;
    vertical-align:middle;
    font-weight: 600;
    font-size: 1rem;
    color: #fff;
    border-bottom: solid 1px rgba(255,255,255,0.1);
  }


  /* demo styles */

  @import url(https://fonts.googleapis.com/css?family=Roboto:400,500,300,700);
  body{
    background: -webkit-linear-gradient(left, #25c481, #25b7c4);
    background: linear-gradient(to right, #25c481, #25b7c4);
    font-family: 'Roboto', sans-serif;
  }
  section{
    margin: 50px;
  }


  /* follow me template */
  .made-with-love {
    margin-top: 40px;
    padding: 10px;
    clear: left;
    text-align: center;
    font-size: 10px;
    font-family: arial;
    color: #fff;
  }
  .made-with-love i {
    font-style: normal;
    color: #F50057;
    font-size: 14px;
    position: relative;
    top: 2px;
  }
  .made-with-love a {
    color: #fff;
    text-decoration: none;
  }
    
`;
const GreenCheckIcon = styled(FaCheck)`
  color: green;
  font-size: 1.5rem;
`
const RedTimesIcon = styled(FaTimes)`
  color: red;
  font-size: 1.5rem;
`


function BasicTable(props) {
   //Actual Data (only filter booleans)
   //  const data = useMemo(()=>planComparison.filter(row=> typeof row.basic === "boolean").map(row=>({
   //      ...row,
   //      basic: row.basic ? <GreenCheckIcon /> : <RedTimesIcon />,
   //      advanced: row.advanced ? <GreenCheckIcon /> : <RedTimesIcon />,
   //      premium: row.premium ? <GreenCheckIcon /> : <RedTimesIcon />,
   //  })), []);


    for(let i = 0 ; i<planComparison.length; i++){
        if(typeof planComparison[i].basic === "boolean"){
            planComparison[i]= {
                ...planComparison[i],
                basic: planComparison[i].basic ? <GreenCheckIcon /> : <RedTimesIcon />,
                advanced: planComparison[i].advanced ? <GreenCheckIcon /> : <RedTimesIcon />,
                premium: planComparison[i].premium ? <GreenCheckIcon /> : <RedTimesIcon />,
            }
        }
    }
    const data = useMemo(()=>planComparison, []);

    // 각 열마다 thead (columns - horizontal)   options | basic | advanced | premium
    const columns = useMemo(()=>plan_columns,[]);

    const tableInstance = useTable({
        columns: columns,
        data: data
        });

    //destructuring
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = tableInstance;


    return (
        <BasicTableStyles>
            <table {...getTableProps()}>
                <thead>
                {
                    headerGroups.map(headerGroup=>(
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column=>(
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))
                            }
                        </tr>
                    ))
                }
                <tr>
                    <th>

                    </th>
                </tr>
                </thead>
                <tbody {...getTableBodyProps()}>

                    {
                        rows.map(row=>{
                            prepareRow(row)
                            return (

                                <tr {...row.getRowProps()}>

                                    {
                                        row.cells.map(cell=>{
                                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        })
                                    }
                                </tr>
                            )
                        })
                    }


                </tbody>
            </table>

        </BasicTableStyles>
    );
}

export default BasicTable;
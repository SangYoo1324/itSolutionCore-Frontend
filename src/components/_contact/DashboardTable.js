import React, {useEffect, useMemo, useRef} from 'react';
import styled from "styled-components";
import {useTable, useSortBy} from "react-table";
import {Link, useLocation} from "react-router-dom";
import {FaCaretDown, FaCaretUp} from "react-icons/fa";


const DashboardTableStyles = styled.div`
  strong {
    font-weight: bold;
  }

  em {
    font-style: italic;
  }

  table {
    background: #f5f5f5;
    border-collapse: separate;
    box-shadow: inset 0 1px 0 #fff;
    font-size: 12px;
    line-height: 24px;
    margin: 30px auto;
    text-align: left;
    width: 100%;
  }

  th {
    background: url(https://jackrugile.com/images/misc/noise-diagonal.png), linear-gradient(#777, #444);
    border-left: 1px solid #555;
    border-right: 1px solid #777;
    border-top: 1px solid #555;
    border-bottom: 1px solid #333;
    box-shadow: inset 0 1px 0 #999;
    color: #fff;
    font-weight: bold;
    padding: 10px 15px;
    position: relative;
    text-shadow: 0 1px 0 #000;
  }

  th:after {
    background: linear-gradient(rgba(255,255,255,0), rgba(255,255,255,.08));
    content: '';
    display: block;
    height: 25%;
    left: 0;
    margin: 1px 0 0 0;
    position: absolute;
    top: 25%;
    width: 100%;
  }

  th:first-child {
    border-left: 1px solid #777;
    box-shadow: inset 1px 1px 0 #999;
  }

  th:last-child {
    box-shadow: inset -1px 1px 0 #999;
  }

  td {
    border-right: 1px solid #fff;
    border-left: 1px solid #e8e8e8;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #e8e8e8;
    padding: 10px 15px;
    position: relative;
    transition: all 300ms;
  }

  td:first-child {
    box-shadow: inset 1px 0 0 #fff;
  }

  td:last-child {
    border-right: 1px solid #e8e8e8;
    box-shadow: inset -1px 0 0 #fff;
  }

  tr {
    background: url(https://jackrugile.com/images/misc/noise-diagonal.png);
  }

  tr:nth-child(odd) td {
    background: #f1f1f1 url(https://jackrugile.com/images/misc/noise-diagonal.png);
  }

  tr:last-of-type td {
    box-shadow: inset 0 -1px 0 #fff;
  }

  tr:last-of-type td:first-child {
    box-shadow: inset 1px -1px 0 #fff;
  }

  tr:last-of-type td:last-child {
    box-shadow: inset -1px -1px 0 #fff;
  }
  
`
const LinkStyle = styled(Link)`
    &:hover{
      color: #0a53be;
      text-decoration: underline;
    }
`


function DashboardTable({data, columns}) {

    const groupColumns = [
        {
            Header: "identity",
            accessor: "identity",
            columns: [
                {Header: "id",
                "accessor": "id"},
                {Header: "title",
                    "accessor": "title"}            ]
        },
        {
            Header: "issued",
            accessor: "issued",
            columns: [
                {
                    Header: "updated",
                    accessor: "updated"
                }
            ]
        }
    ]

    // if path contains #
    // const location = useLocation();
     const questionsRef = useRef(null);


    const MemoColumns = useMemo(()=>groupColumns, []);
    const MemoData = useMemo(() => data.map(e => ({ ...e, title: (<LinkStyle className="text-gray-600" to={`/question/${e.id}`}>{e.title}</LinkStyle>) })), [data]);
        const tableInstance = useTable({
        columns: MemoColumns,
        data: MemoData
    }, useSortBy);

        const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            // footerGroups,
            rows,
            prepareRow
        } = tableInstance;

    return (
        <DashboardTableStyles className="container" ref={questionsRef}>
            <table {...getTableProps()}>
                <thead>
                {
                    headerGroups.map(headerGroup=>( // tr
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column=>( // th
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                                    <span>{column.isSorted ? (column.isSortedDesc ? <FaCaretDown className="inline"/> : <FaCaretUp className="inline"/>) : ''}</span></th>
                                ))
                            }
                        </tr>
                    )
                    )
                }
                </thead>
                <tbody {...getTableBodyProps()}>
                {
                    rows.map(
                        row=> {
                            prepareRow(row)
                            return (  //tr
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map(cell=>{
                                            return (  //td
                                                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        }
                    )
                }
                </tbody>
                {/*<tfoot>*/}

                {/*</tfoot>*/}
            </table>

        </DashboardTableStyles>
    );
}

export default DashboardTable;
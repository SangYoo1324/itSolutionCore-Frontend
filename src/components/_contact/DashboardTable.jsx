import React, {useEffect, useMemo, useRef} from 'react';
import styled from "styled-components";
import {useTable, useSortBy, useGlobalFilter, usePagination} from "react-table";
import {Link, useLocation} from "react-router-dom";
import {FaCaretDown, FaCaretUp} from "react-icons/fa";
import {format} from "date-fns";
import GlobalFilter from "./GlobalFilter";


const DashboardTableStyles = styled.div`
  
  a{
    color: black;
  }
  
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
const PaginationStyles = styled.div`
    &{
      width: 90%;
      margin: 1.5rem auto;
      display: flex;
      justify-content: space-between;
    }
  
    .page-control-wrap>*{
      margin-right: 0.3rem;
    }
    .pagination-btn{
      color: white;
      border: 1px solid white;
      padding: 0.2rem 0.5rem;
      border-radius: 5px;
      
    }

    .pagination-btn[disabled]{
      color: gray;
      border: 1px solid grey;
    }

  .page-number{
    color: white;
    margin-right: 1rem;
  }

  /* <option> 요소의 스타일 */
  option {
    /* 일반적인 스타일 지정 */
    padding: 5px;
    font-size: 14px;
    color: white;
    background-color: black;
  }
  option:hover{
    color: white;
    background-color: black;
  }
  // go to page input
  .go-to{
    width: 3rem;
    padding: .2rem;
    border-radius: 0.3rem;
    border: 1px solid white;
    background: transparent;
    color: white;
  }
  .go-to-page{
    color: white;
    margin-left: 1rem;
  }
  
  //select page size
  .page-size-select{
    background: transparent;
    padding: 0.2rem 0.5rem;
    color: white;
    border: 1px solid white;
    border-radius: 0.3rem;
  }
  
  
  
  @media screen and (max-width: 720px){
    &{
      display: flex;
      align-items: center;
      flex-direction: column;
      flex-wrap: wrap;
    }
  }

`;

function DashboardTable({data, columns}) {

    const groupColumns = [
        {
                    Header: "id",
                accessor: "id"
        }
        ,
        {
            Header: "title",
            accessor: "title",
            Cell: ({row}) => {
                return (
                    <Link to={`/question/${row.original.id}`}
                          className="text-blue-500 underline"> {row.original.title} </Link>
                )
            }
        },
        {
                    Header: "updated",
                    accessor: "date",
                    Cell: ({value}) =>{
                     
                        return format(value, 'dd/MM/yyyyy')
                    }
        }

    ]



    const MemoColumns = useMemo(()=>groupColumns, []);
    const MemoData = useMemo(() => data.map((d)=>{ return {...d, id: d.id.toString()}}), []);
        const tableInstance = useTable({
        columns: MemoColumns,
        data: MemoData,
        // initialState: {pageIndex: 1}
    },useGlobalFilter, useSortBy, usePagination);

        const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            // footerGroups,
            //for pagination, replace row to page
            // rows,
            page,
            // pagination btns
            nextPage,
            previousPage,
            canPreviousPage,
            canNextPage,
            // pagination go to
            gotoPage,
            // pagination page index
            pageCount,

            //pagination details
            state,
            pageOptions,
            setPageSize,

            prepareRow,
            setGlobalFilter
        } = tableInstance;

        const {globalFilter, pageIndex, pageSize}  = state;
    return (
        <DashboardTableStyles className="container">
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>

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
                    // for pagination, replace rows with page
                    page.map(
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

            <PaginationStyles>
                <div className="page-control-wrap flex mb-[1rem]">

                    <button className="pagination-btn" onClick={()=>gotoPage(0)} disabled={!canPreviousPage}> {'<<'} </button>
                    <button className="pagination-btn" onClick={()=>previousPage()} disabled={!canPreviousPage}>Prev</button>

                    <span className="page-number">
                    &nbsp; &nbsp; Page {' '} <strong>{pageIndex+1} of {pageOptions.length}</strong>
                </span>

                    <button className="pagination-btn" onClick={()=>nextPage()} disabled={!canNextPage}>Next</button>
                    <button className="pagination-btn" onClick={()=>gotoPage(pageCount-1)} disabled={!canNextPage}> {'>>'} </button>
                </div>


                <div className="go-to-page-wrap">

                      <span className="page-size">
                          <span className="text-white">Page Size: &nbsp;</span>
                    <select className="page-size-select" value={pageSize} onChange={e=>setPageSize(Number(e.target.value))}>
                        {
                            [5,10,20].map(size =>(
                                <option key={size} value={size}>{size}</option>
                            ))
                        }
                    </select>
                </span>

                <span className="go-to-page">
                    Go to Page: {' '} &nbsp;
                    </span>
                    <input className="go-to" type="number" defaultValue={pageIndex+1}
                           onChange={
                               e=>{
                                   const pageNumber = e.target.value ? Number(e.target.value)-1: 0;
                                   gotoPage(pageNumber);
                               }
                           }
                    />
                </div>

            </PaginationStyles>

        </DashboardTableStyles>
    );
}

export default DashboardTable;
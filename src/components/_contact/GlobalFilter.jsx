import React from 'react';
import styled from "styled-components";

const GlobalFilterStyles = styled.div`
    color: white;
  
    input{
      color: white;
      background: transparent;
      border-bottom: 1px solid white;   
    }
    input:focus{
      border-bottom: 1px solid yellow;
      outline: none;
    }
   
`

function GlobalFilter({filter, setFilter}) {



    return (
        <GlobalFilterStyles>
            <span className="pr-2">Search:</span>
            <input value={filter || ''}
            onChange={e=> setFilter(e.target.value)
            }
            />
        </GlobalFilterStyles>
    );
}

export default GlobalFilter;
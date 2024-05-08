import React from 'react';
import styled from "styled-components";

export const ACLStyledComponent = styled.div`

  img{
  max-width: 30%;
  }
}
  
  @media screen and (max-width: 720px){
   img {
    max-width: 70%; 
   }
`;

function NoAuth(props) {
    return (
        <ACLStyledComponent className="h-[80vh] flex-col justify-center items-center flex-wrap pt-[5rem]" >
            <div className="img flex justify-center">    <img className="h-auto" src="https://cdn-icons-png.flaticon.com/512/9954/9954450.png" alt=""/></div>

            <div className="flex-grow">
                <h1 className="text-center">You're already Logged In!</h1>
                <p className="text-center">Navigating to the main page</p>
                <p className="text-center">Thanks!  - Sam's IT Solution Team -</p>
            </div>

        </ACLStyledComponent>
    );
}

export default NoAuth;
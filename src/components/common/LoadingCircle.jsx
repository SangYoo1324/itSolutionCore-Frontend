import React, {useEffect, useState} from 'react';
import styled from "styled-components";

const LoadingCircleStyles = styled.div`
  
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
 .loader{
   border: 16px solid #f3f3f3; /* Light grey */
   border-top: 16px solid #3498db; /* Blue */
   border-radius: 50%;
   width: 120px;
   height: 120px;
   animation: spin 2s linear infinite;   
 }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`
function LoadingCircle(props) {

    const [dots, setDots] = useState('..');



    useEffect(()=>{
       const intervalRef =  setInterval(()=>{
           console.log("호출");
            const newDots = dots === '.....'? '..' : dots+'.';
            setDots(newDots);
        }, 500);

        return ()=>clearInterval(intervalRef);
    },[dots]);
    return (
        <LoadingCircleStyles >
            <div className="wrap">
                <div className="loader"></div>
                <p>Now Loading <span>{dots}</span></p>
        </div>
        </LoadingCircleStyles>
    );
}

export default LoadingCircle;
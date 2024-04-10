import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {useInView} from "framer-motion";

const SectionTitleStyles = styled.div`

  &.container{
    margin-top: 5rem;
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }
  
  
    h1{
      text-align: center;
      font-size: 2rem;
      font-weight: bold;
    }
    p{
      text-align: center;
    }
  
    &.container.visible{
      opacity: 1;
    }
    
    .bar{
      width: 0%;
      height: 2px;
      margin: 1rem auto;
      background-color: lightgray;
      transition: 1s ease-in-out;
      
  }
    .bar.visible{
    width: 10%;
  }
  
  .end-bar{
    width: 0;
    height: 2px;
    margin: 3rem auto;
    background-color: lightgray;
    transition: 1s ease-in-out;
  }
  .end-bar.visible {
    width: 100%;
  }
  
`;
function SectionTitle(props) {

    // const barRef = useRef(null);
    // const endBarRef = useRef(null);

    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const callbackFunction = (entries)=>{
        const [entry] = entries
        setIsVisible(entry.isIntersecting);
    }
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0
    }

    useEffect(()=>{
        const observer = new IntersectionObserver(callbackFunction, options);
        observer.observe(containerRef.current);

    }, [containerRef,options]);


    return (
        <SectionTitleStyles ref={containerRef} className={ isVisible ? `container visible` : 'container'}>

            <h1>{props.title}</h1>
            {/*<div ref={barRef} className="bar"></div>*/}
            <p>{props.subTitle}</p>
            <div  className={ isVisible ? `end-bar visible` : 'end-bar'}></div>
        </SectionTitleStyles>
    );
}

export default SectionTitle;
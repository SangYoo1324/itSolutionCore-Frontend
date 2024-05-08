import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";

const DonutProgressBarStyles = styled.div`
  .skill {
    width: 250px;
    height: 250px;
    position: relative;
    margin: 2rem auto;
  }
  
  .outer{
    height: 250px;
    width: 250px;
    border-radius: 50%;
    padding: 50px;
    box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15),
                -6px -6px 10px -1px rgba(255,255,255,0.7);
  }
  .inner{
    height: 150px;
    width: 150px;
    border-radius: 50%;
    box-shadow: inset 4px 4px 6px -1px rgba(0,0,0,.2),
    inset -4px -4px 6px -1px rgba(255,255,255,.7),
    -.5px -.5px 0px rgba(255,255,255,1),
    .5px .5px 0px rgba(0,0,0,.15),
    0px 12px 10px -10px rgba(0,0,0,.05);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  #number{
    font-weight: 600;
    color: white;
    font-size: 2rem;    
  }
  
  svg{
    position: absolute;
    top: 0;
    left: 0;
  }
  
  circle{
    fill: none;
    stroke: url(#GradientColor);
    stroke-width: 49;
    stroke-dasharray: 628;
    stroke-dashoffset:  0;
    transition: stroke-dashoffset 2s ease-in-out;
    //animation: anim 1.5s linear forwards;
    
  }
  
  circle.active{
    stroke-dashoffset: ${props =>
            (628-628*props.offset/100)};;
  }

  .detail-box{
    padding: 1rem 2rem;
    border: 1.5px solid lightgray;
    border-radius: 2rem;
    box-shadow: 0 10px 20px white;
    margin: 3rem 1rem;
    margin-bottom: 5rem;
  }
`

function DonutProgressBar({title, percentage, description}) {

   const [counter, setCounter] = useState(0);
    const [mount, setMount] = useState(false);
    const donutRef = useRef(null);

    const barAnimation  = ()=>{
        const progress = (percentage / 100) * 628; // 628은 원의 둘레
        setMount(true);
        const intervalId=  setInterval(()=>{
            setCounter(prevState => {
                if(prevState<percentage){
                    return prevState+1;
                } else{
                    clearInterval(intervalId);
                    return prevState;
                }
            })
        }, 20);
    }

   useEffect(()=>{
       const observer = new IntersectionObserver((entries)=>{
           const [entry] = entries;
           setMount(entry.isIntersecting);
       })
       observer.observe(donutRef.current);
   },[donutRef]);

    useEffect(()=>{
        if(mount){
            barAnimation();
        }else{
            setCounter(0);
        }
    }, [mount])


    return (
        <DonutProgressBarStyles offset={percentage} ref={donutRef}>
                <h1 className="text-center text-[2rem] my-[2rem]">{title}</h1>

            {/*circle progressive bar related*/}
            <div className="skill">
                <div className="outer">
                    <div className="inner">
                        <div id="number">
                            {counter}%
                        </div>
                    </div>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="250px" height="250px">
                    <defs>
                        <linearGradient id="GradientColor">
                            <stop offset="0%" stopColor="#e91e63" />
                            <stop offset="100%" stopColor="#673ab7" />
                        </linearGradient>
                    </defs>
                    <g transform="rotate(-90 125 125)">
                        <circle className={mount ? 'active' : ''} cx="125" cy="125" r="100" strokeLinecap="butt" />
                    </g>
                </svg>
            </div>

            <div className="detail-box">
                <p>"{description}"</p>

            </div>


        </DonutProgressBarStyles >
    );
}

export default DonutProgressBar;
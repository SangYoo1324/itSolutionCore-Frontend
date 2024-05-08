import React, {useState} from 'react';
import styled from "styled-components";

const SkillCardStyles = styled.div`
  &{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .wrap{
    position: relative;
    width: 300px;
    height: 300px;
  }
  
    .card{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      background-color: rgba(0,0,0,0.7);
      border: 2px solid black;
      box-shadow: 0 10px 20px white;
      cursor: pointer;
      
      //flipper related
      position:  absolute;;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      transition: all 0.5s ease;
      
    }
  
    .card:hover{
      animation: shake 0.5s;
    }

  @keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-5px) rotate(-5deg); }
    50% { transform: translateX(5px) rotate(5deg); }
    75% { transform: translateX(-5px) rotate(-5deg); }
    100% { transform: translateX(0); }
  }
  
  
  .card.active{
    transform: rotateY(180deg);
  }
  
  .card>*{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .front{
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }
  .front:hover{
    background: rgba(255,255,0,0.3);
  }

  .back{
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transform: rotateY(180deg);
  }
  
    img{
      max-width: 200px;
      max-height: 200px;
    }
  
  
  .box{
    flex-grow: 1;
    width: 100%;
  }
  
  h1, p{
    color: lightgray;
  }
`;

function SkillCard({object}) {

    const [isFlipped, setIsFlipped]= useState(false);

    const  flip = ()=>{
        console.log("flpp")
        setIsFlipped(!isFlipped);
    }

    return (
        <SkillCardStyles>
            <div className="wrap">


                <div className={`card ${ isFlipped? 'active': ''}`} onClick={flip}>

                    <div className="front">
                        <img src={object.icon} alt=""/>
                    </div>

                    <div className="back">
                        <div className="box m-[1rem]">
                            <h1>{object.title}</h1>
                            <p>{object.detail}</p>

                        </div>
                    </div>

                </div>

            </div>



        </SkillCardStyles>
    );
}

export default SkillCard;
import React, {useEffect} from 'react';
import styled from "styled-components";




const GeneralModalStyles = styled.div`
  &.modal-background {
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    overflow: hidden;
  }

  .modal-container {
    width: ${props=>props.width};
    height: ${props=>props.height};
    border-radius: 12px;
    background-color: ${props=> props.backgroundcolor};
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    padding: 25px;
    overflow-y: scroll;
  }

  .modal-container .title {
    display: flex;
    text-align: center;
    margin-top: 10px;
    justify-content: space-between;
  }

  .title-close-btn {
    cursor: pointer;
    color: white;
    vertical-align: middle;
    font-size: 1.6rem;
  }
  .title-close-btn:hover{
    font-weight: bold;
  }

  .bar{
    width: 100%;
    height: 2px;
    background-color: lightgray;
    margin: 0.5rem 0;
  }


  .modal-container .body {
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    text-align: center;
  }
  
  @media screen and (max-width: 720px){
    .modal-container {
      height: 100vh;
    }
  }
  
`;

const CombinedStyledComponent = styled(GeneralModalStyles)`
${props=> props.additionalStyled}
`

function GeneralModal({closeModal, width = '500px', height= '500px', backgroundColor= '#1a1919',
                    content='', title=''}) {
    useEffect(()=>{
        // Lock Scroll
        const scrollY = window.scrollY;
        return ()=>{
            window.scrollTo(0, scrollY);
        }
    }, [])

    return (
        <CombinedStyledComponent width={width} height={height}
                                 backgroundcolor={backgroundColor}
                                 className="modal-background"
                                >
            <div className="modal-container">
                <div className="title">
                    <h1>{title}</h1>
                    <button className="title-close-btn" onClick={()=>closeModal(false)}> X </button>
                </div>

                <div className="bar"></div>

                <div className="body">
                    {content}
                </div>
            </div>
        </CombinedStyledComponent>
    );
}

export default GeneralModal;
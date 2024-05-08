import React, {useEffect, useState} from 'react';
import {motion} from "framer-motion"
import styled from "styled-components";
import left_img from "../assets/login/login_page_left.jpg"

import LoginBox from '../components/_login/LoginBox';
import SignupBox from "../components/_login/SignupBox";
import {useDispatch} from "react-redux";



const LoginPageStyles = styled.div` 
  &{
    padding-top: 60px;
    max-width: 95%;
    display: grid;
    margin: auto;
    grid-template-columns: 50% 50%;
      }
  
  
  .bg{
    background-image: url(${left_img});
    background-position: center;
    background-size: cover;
    object-fit: cover;
    width: 100%;
    min-height: 80vh;
  }


  @media screen and (max-width: 1024px){
   &{
     grid-template-columns: 1fr;
   }
    .bg{
      min-height: 50vh;
    }
    
  }
`

function Login(props) {

    const [isSignupTriggered,  setIsSignupTriggered] = useState(false);
    const dispatch = useDispatch();
    return (
        <motion.div>
            <LoginPageStyles>
                    <div className="bg"></div>
                {/*<SignupBox />*/}
                {isSignupTriggered?
                     <SignupBox setIsSignupTriggered={setIsSignupTriggered}/>:
                    <LoginBox  setIsSignupTriggered={setIsSignupTriggered}/>
                }
            </LoginPageStyles>
           </motion.div>
    );
}

export default Login;
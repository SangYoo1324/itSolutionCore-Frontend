import React from 'react';
import {DevTool} from "@hookform/devtools";
import styled from 'styled-components';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {asyncAuthLogin, asyncUserInfoFetch} from "../../redux/member/MemberSlice";
import {Facebook, Google} from "@mui/icons-material";
import {Link, useNavigate} from "react-router-dom";
import {asyncUserAuthVerify} from "../../redux/member/AuthVerificationSlice";
const LoginPageStyles = styled.div` 
  
  
    width: 100%;
    min-height: 80vh;
    background-color: white;
    color: #1a1d20;
    padding: 3rem 3rem;


  label {
    font-size: 16px;
    margin-right: 10px;
  }

  input[type="checkbox"] {
    vertical-align: middle;
    margin-right: 1rem;
    width: 20px;
    height: 20px;
  }
  .oauth2-options{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .login-btn{
    color: white;
  }
  .login-btn:hover{
    color: mediumpurple;
  }
  
  .oauth2-icon{
    transform: scale(1.2);
    vertical-align: center;
  }

  @media screen and (max-width: 768px){
    padding: 3rem 0;
  }
`


function LoginBox({setIsSignupTriggered}) {

    const form = useForm();
    const {register,control, handleSubmit} = form;
    // const {name, ref, onChange,onBlur}= register("username");
    const navigate = useNavigate();
    const dispatch = useDispatch();



    const  handleLogin =  async (data) => {
        // await to process asyncUserInfoFetch after the action finished
        await dispatch(asyncAuthLogin(data)).then((action)=>{
            console.log("action::", action);
            if(action.error){
                alert("error occurred.. login fail");
            }else
                alert("login Success");
            navigate("/");
        });
        dispatch(asyncUserInfoFetch());
        dispatch(asyncUserAuthVerify());
    }
    const handleGoogleLogin = ()=>{
        window.location.href = "http://localhost:8080/api/public/google/login/itSolution"
    }
    const handleFacebookLogin = ()=>{
        alert("Sorry, Facebook Login is not available at this moment. Please try using Google login or general login!  \n -Thanks.");
    }

    const changeToSignUp = ()=>{
        setIsSignupTriggered(true);
    }

    return (
        <LoginPageStyles>
                    <h1 className="font-bold text-black text-[2.5rem]">Login</h1>
                    <p className="text-gray-700 mb-[2rem]">Login your account in a seconds</p>



                    <form onSubmit={handleSubmit(handleLogin)}>
                        <label className="block mb-2 text-gray-700">username</label>
                        <input type="text" placeholder="enter your username"
                               className="block w-[100%] px-4 py-3 mb-4 text-gray-800 border rounded-lg focus:outline-none focus:border-purple-500"
                               {...register("username")}/>
                        <label className="block mb-2 text-gray-700">password</label>
                        <input type="password" placeholder="enter your password"
                               className="block w-[100%] px-4 py-3 mb-4 text-gray-800 border rounded-lg focus:outline-none focus:border-purple-500"
                               {...register("password")}/>

                        <div className="extra-options flex justify-between mt-[1rem]">
                            <div className="checkbox-wrap">
                                <input type="checkbox" id="keep-me-signed-in"/>
                                <label htmlFor="keep-signed-in">Keep me signed in</label>
                            </div>
                            <a  className="text-purple-500" href="#">Forget password?</a>
                        </div>


                        <button className="login-btn block py-[1rem] bg-purple-500 hover:bg-white transition-background duration-500 w-[80%] mx-auto my-[1.5rem]
                         rounded-[10px] font-bold text-[1.3rem] border-[2px] border-solid border-purple-200]">Log In</button>
                        <p className="text-gray-700">Don't have an account? &nbsp; &nbsp;<span className="text-purple-400 hover:cursor-pointer" onClick={changeToSignUp}>Sign up!</span></p>
                    </form>
                <div className="bar bg-gray-300 h-[1px] w[95%] mx-auto my-[1.5rem]"></div>
                    <div className="oauth2-options">
                        <button className=" mb-[0.5rem] text-[1.1rem] block w-[80%] mx-auto py-[0.5rem] border-[1px] border-solid border-gray-600" onClick={handleGoogleLogin}><Google className="oauth2-icon"/> &nbsp; Sign In with Google </button>
                        <button className=" mb-[0.5rem] text-[1.1rem] block w-[80%] mx-auto py-[0.5rem] border-[1px] border-solid border-gray-700"  onClick={handleFacebookLogin}><Facebook className="oauth2-icon"/>&nbsp;Sign In with Facebook </button>
                    </div>

                <DevTool control={control}/>
        </LoginPageStyles>
    );
}

export default LoginBox;
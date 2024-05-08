import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useForm, FieldErrors} from "react-hook-form";
import {DevTool} from "@hookform/devtools";
import axios from "axios";
import {env} from "../../_config/Env";
import {useLoading} from "../../redux/context/LoadingContext";

const SignupBoxStyles = styled.div`
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

  @media screen and (max-width: 768px){
    padding: 3rem 0;
  }
`

function SignupBox({setIsSignupTriggered}) {
    const form = useForm();
    const {register,control, handleSubmit, formState, watch,} = form;
    const {errors, touchedFields, dirtyFields} = formState;
    const [errorData, setErrorData] = useState({});
    const { isLoading, setIsLoading } = useLoading();
    const passwordValue = watch("password");
    const confirmPasswordValue = watch("confirmPassword");
    const [isPwMatch, setIsPwMatch] = useState(false);
    useEffect(() => {
        console.log(passwordValue);
        console.log(confirmPasswordValue);
        console.log(touchedFields)
        if(touchedFields.password &&dirtyFields.password && dirtyFields.confirmPassword){
            if(passwordValue ===confirmPasswordValue) {
                setIsPwMatch(true);
            }else{
                setIsPwMatch(false);
            }
        }

    }, [passwordValue, confirmPasswordValue]);
    const handleSignup = (data)=>{
        console.log("Form submitted", data);
        // adding business info  itSolution id =1
        data.business_id = 1;
        delete data.confirmPassword;
        setIsLoading(true);
        //Signup request
        axios.post(`${env.api_path}/api/signup`, data).then(() => {
                alert("Signup Complete! please check your mailbox to complete your signup process!");
            setIsSignupTriggered(false);
            setIsLoading(false);
            }).catch((err) => {
               alert("Signup fail.. Something wrong from the server");
            setIsLoading(false);
            });
    }
    const onError = (data)=>{
        console.log("Form errors", data);
        setErrorData(data);
    }

    const changeToSignin = ()=>{
        setIsSignupTriggered(false);
    }

    return (
        <SignupBoxStyles>
            <h1 className="font-bold text-black text-[2.5rem]">Signup</h1>
            <p className="text-gray-700 mb-[2rem]">Simple Signup form for a membership!</p>
            <form onSubmit={handleSubmit(handleSignup, onError)}>
                <label className="block mb-2 text-gray-700">username</label>
                <input type="text" placeholder="enter your username"
                       className="block w-[100%] px-4 py-3 mb-4 text-gray-800 border rounded-lg focus:outline-none focus:border-purple-500"
                       {...register("username", {
                           required: {
                               value: true,
                               message: "*username is required"
                           }
                       })}/>
                {touchedFields.username && !dirtyFields.username && <small className="text-red-500">*username is required field</small>}
                <label className="block mb-2 text-gray-700">email</label>
                <input type="email" placeholder="enter your email address"
                       className="block w-[100%] px-4 py-3 mb-4 text-gray-800 border rounded-lg focus:outline-none focus:border-purple-500"
                       {...register("email", {
                           required:{value: true, message: "*email is required field"},
                           pattern: {
                               value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-z0-9-]+)*$/,
                               message: "*invalid email address"
                           }
                       })}/>

                {touchedFields.email && !dirtyFields.email && <small className="text-red-500">*emailAddress is required field</small>}
                <label className="block mb-2 text-gray-700">password</label>
                <input type="password" placeholder="enter your password"
                       className="block w-[100%] px-4 py-3 mb-4 text-gray-800 border rounded-lg focus:outline-none focus:border-purple-500"
                       {...register("password")}/>
                <label className="block mb-2 text-gray-700">confirm password</label>
                <input type="password" placeholder="confirm your password"
                       className="block w-[100%] px-4 py-3 mb-4 text-gray-800 border rounded-lg focus:outline-none focus:border-purple-500"
                       {...register("confirmPassword", {
                           validate: (fieldValue)=>{
                               console.log("fieldValue: "+ fieldValue);
                               console.log("passwordValue: "+ passwordValue);
                               return fieldValue === passwordValue || "*password not matching"
                           }
                       }
                       )}/>
                {!isPwMatch && dirtyFields.confirmPassword && (<small className="text-red-400">* password not matching</small>)}
                <button className="login-btn block py-[1rem] bg-purple-500 hover:bg-white transition-background duration-500 w-[80%] mx-auto my-[1.5rem]
                         rounded-[10px] font-bold text-[1.3rem] border-[2px] border-solid border-purple-200]">Sign Up!</button>

                <div className="error-box">
                    {Object.keys(errorData).map(key=> (<small key={key} className="text-red-400 block">{errorData[key].message}</small>))}
                </div>
                <p className="text-gray-700">Already have an account? &nbsp; &nbsp;<span className="text-purple-400 hover:cursor-pointer" onClick={changeToSignin}>Go to Sign In!</span></p>
            </form>
            <DevTool control={control}/>
        </SignupBoxStyles>
    );
}

export default SignupBox;
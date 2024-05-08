import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {asyncUserAuthVerify} from "../../redux/member/AuthVerificationSlice";
import Auth401 from "../../components/common/aclPage/Auth401";
import NoAuth from "../../components/common/aclPage/NoAuth";
import Auth403 from "../../components/common/aclPage/Auth403";


function RequiredAuth_USER({children}) {

    const dispatch = useDispatch();


    const userAuth_State = useSelector(state=>state.authVerification.user);
    const adminAuth_State = useSelector(state=>state.authVerification.admin);
    const isLoading = useSelector(state=>state.authVerification.loading);
    console.log("userAuth_State:", userAuth_State);
    const navigate = useNavigate();


    // confirm router initialization


    //dispatch should only happen once...
    useEffect(()=>{
        dispatch(asyncUserAuthVerify());
    }, []);

    useEffect(()=>{
        console.log("Check");
        if(!isLoading){// when redux init finished && authState true
            console.log("Check state");
            if(userAuth_State || adminAuth_State){

                navigate("/");
                alert("You're already logged in!");
            }

        }
    },[userAuth_State, isLoading]);
    return (
         !isLoading && !userAuth_State? children: <NoAuth/>

    );
}

export default RequiredAuth_USER;
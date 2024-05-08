import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {asyncUserAuthVerify} from "../../redux/member/AuthVerificationSlice";


import Auth401 from "../../components/common/aclPage/Auth401";


function RequiredAuth_USER({children}) {

    const dispatch = useDispatch();


    const userAuth_State = useSelector(state=>state.authVerification.user);
    const adminAuth_State = useSelector(state=>state.authVerification.admin);
    const isLoading = useSelector(state=>state.authVerification.loading);
    console.log("userAuth_State:", userAuth_State);
    const navigate = useNavigate();
    // const [initialized, isInitialized] = useState(false);
    //dispatch should only happen once...
    useEffect(()=>{

        dispatch(asyncUserAuthVerify());
    }, []);

    useEffect(()=>{

        if( !userAuth_State && !isLoading){// when redux init finished && authState true

            alert("Only Logged-in user can access this page. Navigate to Login Page...");
            navigate("/login");
        }
    },[userAuth_State,adminAuth_State, isLoading]);
    return (
        !isLoading && (userAuth_State || adminAuth_State)? children: <Auth401/>
    );
}

export default RequiredAuth_USER;
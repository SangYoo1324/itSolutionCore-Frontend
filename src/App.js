import './App.css';

import Navbar from "./components/common/navBar/Navbar";

import Footer from "./components/common/Footer";
import AnimatedRoutes from "./AnimatedRoutes";
import { useDispatch, useSelector} from "react-redux";


import {useEffect} from "react";
import {asyncUserInfoFetch} from "./redux/member/MemberSlice";
import LoadingCircle from "./components/common/LoadingCircle";
import {asyncUserAuthVerify} from "./redux/member/AuthVerificationSlice";
import {useLoading} from "./redux/context/LoadingContext";

function App() {
/*
*           User
* */

    const {isLoading, setIsLoading} = useLoading();
    const dispatch = useDispatch();
    const userInfo = useSelector(state=> state.member);
    const authVerification = useSelector(state=> state.authVerification)
    // getting 'Authorization', 'Role' cookie after OAuth2 login redirection
    useEffect(()=>{
        // fetch userInfo from backend with 2 cases
        // 1. first mount(to update AuthState on Oauth2 login redirection, refresh )
        // 2. After regular login(only changes authstate to true, so detect userInfo.authState)

        // if authState is true or userInfo has not been fetched yet
        // to prevent collision with other component
        if((!authVerification.admin && !authVerification.user) || userInfo.data){
            console.log("We're missing userInfo & Current AuthState. dispatch required")
            dispatch(asyncUserInfoFetch());
        }

    },[]);


    if(isLoading){
        return <>
            <Navbar/>
            <LoadingCircle/>
            <Footer/>
        </>
    }

  return (
      <>
          <Navbar/>
          {/*loading only when userInfo not loading*/}
         <AnimatedRoutes/>
          <Footer/>
      </>


  );
}

export default App;

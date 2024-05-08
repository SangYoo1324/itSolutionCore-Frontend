import React, {useEffect} from 'react';
import styled from "styled-components";

import {useDispatch, useSelector} from "react-redux";
import { memberActions} from "../redux/member/MemberSlice";
import {useNavigate} from "react-router-dom";
import BasicInfo from "../components/profile/BasicInfo";
import HeroImg2 from "../components/common/HeroImg2";
import Posts from "../components/profile/Posts";

const ProfilePageStyles = styled.div`
    min-height: 80vh;
    color: white;
  
  .dummy{
    height: 40vh;
  }
`;

function Profile(props) {

    const navigate = useNavigate();

    //Slice will be added
    const businessInfo = {};
    const posts = null;


    const memberInfo = useSelector(state=>state.member.data);

    const dispatch = useDispatch();
    const handleLogout = ()=>{
        dispatch(memberActions.logout()).then((resp)=>{
            console.log("resp::::",resp);
        });
        navigate("/");
    }

    return (
        <ProfilePageStyles>
            <HeroImg2 heading="Profile" text="Adjust your profile settings"/>
            <BasicInfo memberInfo={memberInfo}
                       businessInfo={businessInfo}
                       className="" />

            <Posts posts={posts}/>



            <div className="bar w-[100%] h-[1.5px] bg-black mx-auto mt-[4rem] mb-[1rem]"></div>
            <button className="w-[10%] block ml-auto hover:text-yellow-100" onClick={handleLogout}>Logout</button>
        </ProfilePageStyles>
    );
}

export default Profile;
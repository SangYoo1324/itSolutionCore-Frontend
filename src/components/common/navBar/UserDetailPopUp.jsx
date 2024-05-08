import React from 'react';
import styled from "styled-components";
import {AccountCircleRounded} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";

const UserDetailPopUpStyles = styled.div`
    position: absolute;
    right: 0;
    top: 50px;
    width: 200px;
    height: 100px;
    background-color: white;
    border-radius: 10px;
  
  &::before{
    content: '';
    position: absolute;
    top: -10px; /* 삼각형이 위치할 Y 좌표 */
    left: 80%; /* 삼각형이 위치할 X 좌표 */
    transform: translateX(-50%); /* X 좌표 조정 */
    border-width: 0 10px 10px 10px; /* 삼각형의 높이와 너비 조정 */
    border-style: solid;
    border-color: transparent transparent white transparent; /* 삼각형 색상 */    
  }
  
  .btn-wrap>button{
   
    width: 100% !important;
    height: 30px !important;
  }
  
  .wrap{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 4fr 6fr;
    grid-gap: 0px;
  }
  
  .icon{
    
    transform:  scale(2);
  }
  
  .logout-btn{
    background-color: #58151c;
  }

  .profile-btn{
    background-color: #1a1d20;
  }

  @media screen and (max-width: 1024px){
    right: -15%;

    .btn-wrap>button{
      font-size: 1rem;
    }
  }
`

function UserDetailPopUp(props) {

    const navigate = useNavigate();

    const handleProfileBtnClick  = ()=>{
        setTimeout(()=> props.setClick(false), 500);

        navigate("/profile")
    }


    return (
        <UserDetailPopUpStyles>

                <div className="wrap">
                    <div className="flex justify-center items-center">
                            <AccountCircleRounded className="icon" fontSize="large" color="white"/>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="btn-wrap flex flex-col justify-center items-center">
                            <button
                                className="profile-btn w-[100%] flex-grow" onClick={handleProfileBtnClick}>View Profile</button>
                                <button className="logout-btn w-[100%] flex-grow" onClick={props.handleLogout}>Logout</button>
                        </div>
                    </div>
                </div>

        </UserDetailPopUpStyles>
    );
}

export default UserDetailPopUp;
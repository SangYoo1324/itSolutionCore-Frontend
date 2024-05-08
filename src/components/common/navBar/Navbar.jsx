import React, {useEffect, useState} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import  {memberActions} from "../../../redux/member/MemberSlice";

import UserDetailPopUp from "./UserDetailPopUp";

const Header = styled.div`
      &.header {
        position: fixed;
        width: 100%;
        z-index: 10;
        display: flex;
        justify-content: space-between;
        align-items: center;
        overflow: visible;
      }
      
    &.header-bg{
      background-color: rgba(0,0,0,.8);
      transition: 0.5s ease-in-out;
    }
  
      .nav-menu {
        display: flex;
        padding: 0;
      }
      
      .nav-menu li {
        padding: 0 1rem;
        display: flex;
        align-items: center;
      }

      .hamburger {
        margin-right: 0.5rem;
        display: none;
      }
  
    .active{
    border-bottom: 2px solid white;
      transition: border 0.5s ease-in-out;
    }
        
      @media screen and (max-width: 1040px) {
        .nav-menu {
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100vh;
          background-color: rgba(0,0,0,0.9);
          position: absolute;
          transition: left 0.5s ease-in-out;
          top: 0;
          left: -100%;
          z-index: -3;
        }
        
        .nav-menu.active{
          left: 0;
        }
        
        .nav-menu li {
          padding: 1rem 0;
        }
        .nav-menu li a {
          font-size: 2rem;
        }
        
        .hamburger {
          display: initial;
        }
      }
    `;

const StyledLink = styled(Link)`
      font-size: 1.2rem;
      font-weight: 500;
      padding-bottom: 0.3rem;
      margin-top: 5px;
 
  
    `;

const UserInfoStyles= styled.div`
  font-size: 1rem;
  font-weight: 500;
  padding-bottom: 0.3rem;

  a{
    cursor: pointer;
  }
  
  .btn-wrap{
    position: relative;
    height: 50px;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  button{
    display: block;
    cursor: pointer;
    border: 1px solid white;
    border-radius: 6px;
    font-weight: 600;
    margin: 2px;
    color: white;
    width: 70px;
    padding: 2px 0;
    box-shadow: 0 0 20px rgba(104, 85, 224, 0.2);
    transition: 0.4s;
  }

  button:hover {
    color: white;

    box-shadow: 0 0 20px rgba(104, 85, 224, 0.6);
    background-color: rgba(104, 85, 224, 1);
  }
  

  .login-btn{
    border: white 1px solid;
    border-radius: 5px;
    padding: 0.3rem 0.8rem;
    transition: color 0.5s ease-in-out, background 0.5s ease-in-out;
  }
  
  .login-btn:hover{
    color: black;
    background: white;
    border: black 1px solid;
  }


  @media screen and (max-width: 1040px) {
    button{
      font-size: 1.5rem;
      width: 150px;
    }
  }
`


function Navbar(props) {
    const [click, setClick] = useState(false);
    const [color, setColor] = useState(false);
    const location = useLocation();

    const userInfo = useSelector(state => state.member);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () =>{
        setClick(!click);
    }
    const changeColor = () =>{
        if(window.scrollY >=10){
            setColor(true);
        }else{
            setColor(false);
        }
    }

    const handleClickOutside = (event) => {
        if (!event.target.closest('.pop-up')) {
           setOpen(false);
            console.log('Clicked outside the component');
        }
    };

    useEffect(()=>{
        window.addEventListener("scroll", changeColor);
        window.addEventListener('click', handleClickOutside);
        return ()=>{
            window.removeEventListener('click', handleClickOutside);
            window.removeEventListener("scroll", changeColor);
        }
    },[]);

    // Dialog Related
    const [open, setOpen] = useState(false);
    const handleUserDetailClick = (event)=>{
        event.stopPropagation();
        setOpen(!open);
    }

    const handleLogOut = ()=>{
        dispatch(memberActions.logout());
        setOpen(false);
        alert("Successfully LoggedOut. \n Good Bye~!")
        navigate('/');
    }


    return (
        <Header className={color ? "header header-bg" : "header"}>

            <Link to="/"><h1>Sam's IT Solution</h1></Link>
            <ul className={click? 'nav-menu active': 'nav-menu'}>
                <li onClick={()=>setTimeout(()=>setClick(false), 500)}><StyledLink className={location.pathname ==='/' ? 'active': ''} to="/">Home</StyledLink></li>
                <li onClick={()=>setTimeout(()=>setClick(false), 500)}><StyledLink className={location.pathname ==='/project' ? 'active': ''} to="/project">Project</StyledLink></li>
                <li onClick={()=>setTimeout(()=>setClick(false), 500)}><StyledLink className={location.pathname ==='/about' ? 'active': ''} to="/about">About</StyledLink></li>
                <li onClick={()=>setTimeout(()=>setClick(false), 500)}><StyledLink className={location.pathname ==='/contact' ? 'active': ''} to="/contact">Contact</StyledLink></li>
                <li>    <UserInfoStyles><div className="btn-wrap">
                    { (!userInfo.authState) && <Link onClick={()=>setTimeout(()=>setClick(false), 500)} className="login-btn" to="/login">LogIn</Link>}

                        { (userInfo.authState) && <Link onClick={(event)=>{
                            handleUserDetailClick(event)
                          }} className="profile-btn"
                                                       ><span className="hover:text-yellow-200">
                            Hi,  {userInfo.data ? userInfo.data.name: ''} !</span></Link>
                        }
                    { open && <UserDetailPopUp
                        setClick = {setClick}
                        handleLogout = {handleLogOut}
                        className="pop-up"/>}
                </div>
                </UserInfoStyles></li>
            </ul>

            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{ color: "#fff" }} />) : (<FaBars size={20} style={{ color: "#fff" }} />)}
            </div>
        </Header>
    );
}

export default Navbar;
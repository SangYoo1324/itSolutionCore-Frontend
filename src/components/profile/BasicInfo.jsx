import React from 'react';
import styled from "styled-components";

const BasicInfoStyles = styled.div`
    label{
      display: flex;
    align-items: center;
      font-weight: bold;
    }
  
    .item{
      display: flex;
      margin: 0.5rem 0.5rem;
      justify-content: space-between;
    }
  
  .left{
    border-right: 1px solid lightgray;  }
  
  .wrap{
    display: flex;
  }
  
  li>p{
  text-align: center;    
    min-width: 10%;
  }
    
`

function BasicInfo({memberInfo, businessInfo}) {



    return (
        <BasicInfoStyles>
            {
                memberInfo &&(
                    <div className="container">


                            <h1>Basic Info</h1>
                            <div className="bar w-[100%] h-[1.5px] bg-gray-400 mx-auto my-[1rem]"></div>

                            <div className="row">
                                <div className="col-lg-6 left p-[1rem]">
                                    <div className="item">
                                        <div className="wrap">
                                            <label>Username: </label>
                                            <p>{memberInfo.username}</p>
                                        </div>

                                    </div>
                                    <div className="item">
                                        <div className="wrap">
                                            <label>Password: </label>
                                            <p>********</p>
                                        </div>

                                        <div className="req-pw-change flex items-center underline  hover:cursor-pointer">Request PW change</div>
                                    </div>
                                    <div className="item">
                                        <div className="wrap">
                                            <label>Email Addr: </label>
                                            <p>{memberInfo.email}</p>
                                        </div>
                                        <div className="req-email-change flex items-center underline hover:cursor-pointer">Request email change</div>
                                    </div>
                                    <div className="item">
                                        <label>Access Level: </label>
                                        <p>{memberInfo.authority}</p>
                                    </div>

                                    <div className="item">
                                        <label>Business ID: </label>
                                        <p>1</p>
                                    </div>
                                    <div className="item">
                                        <label>Authentication vendor: </label>
                                        {memberInfo.provider ?   <p>{memberInfo.provider}</p>: <p>Manual Signup</p> }
                                    </div>

                                </div>
                                <div className="col-lg-6 p-[1rem]">

                                    <h1 className="mb-[2rem]">Related IT Services</h1>
                                    {
                                        businessInfo? (      <ul>
                                            <li className="flex justify-between"><p>Business ID</p> <p>Business Name</p> <p>Plan Type</p></li>
                                            <li className="flex justify-between"><p>1</p> <p>ItSolution</p> <p>BASIC</p> </li>
                                            <li className="flex justify-between"><p>2</p> <p>SunriseChristCC</p> <p>PREMIUM</p> </li>
                                        </ul>) : ( <h1>No IT service provided</h1>)
                                    }

                                </div>
                            </div>


                    </div>

                )
            }

        </BasicInfoStyles>
    );
}

export default BasicInfo;
import React from 'react';
import styled from "styled-components";
import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaWhatsapp} from "react-icons/fa";

const FooterStyles = styled.div`
  .footer{
    width: 100%;
    padding: 6rem 0;
    background-color: rgba(19,19,19, 0.8);
  }
  
  .footer-container{
    max-width: 1140px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 40px;
  }
  //left
  .left{
    height: 100%;
    max-width: 100%;
    display: flex;
    padding: 1rem;
    flex-direction: column;
  }
  
  .left>* {
    margin-bottom: 1rem;
    line-height: 30px;
  }

  
  //right
  .right{
    height: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
  
  .social{
    display: flex;
    margin-top: 1rem;
  }
  
  
  @media screen and (max-width: 640px){
    .footer-container {
      grid-template-columns: 1fr;
    }
  }
`;

function Footer(props) {
    return (
        <FooterStyles className="footer">

            <div className="footer-container">
                <div className="left">
                    <div className="location flex items-center">
                        <FaHome size={20} style={{color: "white", marginRight: "2rem"}}/>
                        <div className="">
                            <p> &nbsp;&nbsp; USA, Seattle, City of Technology</p>
                        </div>

                    </div>
                    <div className="phone flex items-center">
                        <h4><FaPhone size={20} style={{color: "white", marginRight: "2rem"}}/></h4>
                        <p>1-253-732-5533</p>
                    </div>
                    <div className="email flex items-center">
                        <h4><FaMailBulk size={20} style={{color: "white", marginRight: "2rem"}}/></h4>
                        <div className="wrap">
                            <p>Personal: samuel13241@gmail.com</p>
                            <p>Business: admin@sangbeomec2.net</p>
                        </div>

                    </div>
                </div>
                <div className="right">
                    <h4><b>About the Business</b></h4>
                    <p>Hi, I'm Sangbeom Yoo. I'm happy to get inquries about IT solutions for business requirements. Feel free to reach me out to discuss
                    more on Projects & Dev, SysAdmin Positions.</p>
                    <div className="social">
                        <FaFacebook size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                        <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                        <FaWhatsapp size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                    </div>

                </div>
            </div>

        </FooterStyles>
    );
}

export default Footer;
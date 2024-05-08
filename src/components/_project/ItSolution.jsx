import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";

import businessArchitecture from '../../assets/project/architect-2024.jpg';
import enterpriseArchitecture from '../../assets/project/bsa-final.jpg';
import SectionTitle from "../common/SectionTitle";

const ItSolutionStyles = styled.div`
  .box{
    max-width: 1280px;
    margin: auto;
    display: grid;
    grid-template-columns: 70% 30%;
    grid-gap: 40px;
    padding-bottom: 10rem;
}
  
  .reverse{
    grid-template-columns: 30% 70%;
  }
  .left, .right{
    
  }
  img{
    width: 90%;
    margin: auto;
    background-position: center;
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }
  .visible{
    opacity: 1;
  }
  
  h1{
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  h3{
    font-weight: bold;
    margin-bottom: 1rem;
  }
  

  @media screen and (max-width: 740px){
    .box{
      max-width: 90%;
      margin: auto;
      grid-template-columns: 1fr;
    }
    img{
      width: 100%;
    }
  }
`

function ItSolution(props) {
    const img1Ref = useRef(null);
    const img2Ref = useRef(null);
    const [isImg1Visible, setisImg1Visible] = useState(false);
    const [isImg2Visible, setisImg2Visible] = useState(false);
    const observer1= new IntersectionObserver((entries)=>{
        const [entry] = entries
        setisImg1Visible(entry.isIntersecting);
    });

    const observer2= new IntersectionObserver((entries)=>{
        const [entry] = entries
        setisImg2Visible(entry.isIntersecting);
    });

    useEffect(()=>{

        observer1.observe(img1Ref.current);
        observer2.observe(img2Ref.current);
    }, []);

    return (
        <ItSolutionStyles className="container">
            <SectionTitle title={'IT Architectures'} subTitle={'Take a look at Sam\'s IT Solution\'s AWS based cloud Architecture Diagram!'}/>

            <div className="box">
                <div className="left">
                    <img className={isImg1Visible ? 'visible' : ' '} ref={img1Ref} src={businessArchitecture} alt=""/>
                </div>
                <div className="right">
                    <div className="content">
                        <h1>Business Architecture</h1>
                        <h3>For the businesses requires application for their business</h3>
                        <p>
                            The web application is running with two instances of WAS Blue and Green on ports 8080 and 8081, respectively, to achieve continuous deployment, ensuring that the business application server remains operational without interruption for maintenance. Nginx server operates as a proxy server for external traffic and is connected via private IP address to the internal WAS instances on ports 8080 and 8081. Deployment based on AWS Amplify enables server-side rendering, thereby enhancing the SEO of the web application.
                        </p>
                    </div>
                </div>
            </div>

            <div className="box reverse">
                <div className="left">
                    <div className="content">
                        <h1>Enterprise Architecture</h1>
                        <h3>For the businesses requires not only the application for their business,
                            but also wants private zone for the internal server</h3>

                        <p>
                            The Private Zone encompasses internal business operations. The LDAP server contains SQL and file storage areas with employee credentials. Data will be securely stored with ACL options to control resource access. A client VPN will establish an intranet to enhance the security of the internal server.
                        </p>
                    </div>
                </div>
                <div className="right">
                    <img ref={img2Ref} className={isImg2Visible ? 'visible' : ' '} src={enterpriseArchitecture} alt=""/>

                </div>
            </div>

        </ItSolutionStyles>


    );
}

export default ItSolution;
import React, {useState} from 'react';
import styled from "styled-components";
import {Modal} from "react-bootstrap";
import GeneralModal from "../common/GeneralModal";
import SwiperSlider from "../common/SwiperSlider";

// style for modal container
const ContentStyled = styled.div`
  &.content-container{

  }
  
  .stack-list{
    font-size: 0.8rem;
    color: white;
    margin: 1rem 0.5rem;
    //width: 10%;
  }
  
  @media screen and (max-width: 720px){
    .stack-list{
      width: 20%;
      font-size: 0.8rem;
    }
  }
`;

const WorkCardStyles = styled.div`
  
  img{
    height: 250px;
  }
  
    .project-heading{
      font-size: 1.8rem;
      text-align: center;
      padding: 4rem 0 2rem 0;
      font-weight: bold;
    }
  
    .project-container{
      max-width: 1140px;
      margin: auto;
      display: grid;
      grid-template-columns: repeat(3,1fr);
      grid-gap: 40px;
      padding-bottom: 5rem;
  }
  
  .project-card{
    background: #1a1919;
    padding: 1.2rem 1rem
  }
  
  .project-title{
    color: #fff;
    padding: 1rem 0;
  }
  
  .pro-details p{
    padding-bottom: 1rem;
    font-size: 1.1rem;
    text-align: justify;
  }
  .pro-buttons{
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
  }
  
  
  .card .btn {
    padding: 0.5rem 1rem;
  }
  
    @media screen and (max-width: 740px){
      .project-container{
        max-width: 90%;
        margin: auto;
        grid-template-columns: 1fr;
      }
    }
`;



function WorkCard(props) {
    const [openModal, setOpenModal] = useState(false);


    const projects = [
        {
            title: 'Terra Treasures',
            img_url: 'https://sammyoopublicbucket.s3.us-west-2.amazonaws.com/react-portfolio/TerraTreasures.png',
            brief: '2024 University of Washington Senior Capstone project E-commerce solution',
            details:[
                'Membership system scured by Spring Security provided from backend server',
                'Fully configured backend server infrastructure including cloud instance, DB server, Email server, Load Balancer',
                'Private Email server with fully secured(DKIM, DMARC, MAIL FROM)',
                'Admin Control panel to enable client continuously update their inventory',
                'PDF generator for receipt so customer can obtain E-receipt upon their purchase'
            ],
            stacks: ['AWS EC2', 'Springboot','Angular', 'MySQL', 'Redis', 'AWS SES', 'Load Balancing', 'Nginx revers proxy' ],
            url: 'https://terratreasure.sangbeomec2.net',
            screenshots: [
                'https://sammyoopublicbucket.s3.us-west-2.amazonaws.com/react-portfolio/terra/terra_2fa.png',
                'https://sammyoopublicbucket.s3.us-west-2.amazonaws.com/react-portfolio/terra/terra_checkout.png',
                'https://sammyoopublicbucket.s3.us-west-2.amazonaws.com/react-portfolio/terra/terra_invoice.png',
                'https://sammyoopublicbucket.s3.us-west-2.amazonaws.com/react-portfolio/terra/terra_item_details.png',
                'https://sammyoopublicbucket.s3.us-west-2.amazonaws.com/react-portfolio/terra/terra_main.png',
                'https://sammyoopublicbucket.s3.us-west-2.amazonaws.com/react-portfolio/terra/terra_profile.png'
            ]
        },
        {
            title: 'Sunrise Global Methodist Church',
            img_url: 'https://sammyoopublicbucket.s3.us-west-2.amazonaws.com/react-portfolio/SunriseCC.png',
            brief: 'Project as an IT specialist - Sunrise Global Methodist Church ',
            details:[
              'Integrated Backend server',
                'Original Frontend client',
                'Professional UI/UX with Angular framework',
                'DNS management with Cloudflare'
            ],
            stacks: ['Heroku', 'Springboot','Angular', 'MySQL', 'NameCheap', 'Cloudflare', 'Nginx', 'Reverse Proxy' ],
            url: 'https://sunrisechristcc.org/',
            screenshots: [
                'https://sammyoopublicbucket.s3.us-west-2.amazonaws.com/react-portfolio/sunrise_gmc/sunrise_admin.png',
                'https://sammyoopublicbucket.s3.us-west-2.amazonaws.com/react-portfolio/sunrise_gmc/sunrise_event_calendar.png',
                'https://sammyoopublicbucket.s3.us-west-2.amazonaws.com/react-portfolio/sunrise_gmc/sunrise_main.png',
                'https://sammyoopublicbucket.s3.us-west-2.amazonaws.com/react-portfolio/sunrise_gmc/sunrise_news.png'
            ]
        },
        {
            title: 'Puget Sound Customs',
            img_url: 'https://sammyoopublicbucket.s3.us-west-2.amazonaws.com/react-portfolio/PSC.png',
            brief: '2023 internship project with E-commerce solution. Enabling Admin panel for dynamic inventory control',
            details:[
                'Membership system scured by Spring Security provided from backend server',
                'Fully configured backend server infrastructure including cloud instance, DB server, Email server, Load Balancer',
                'Private Email server with fully secured(DKIM, DMARC, MAIL FROM)',
                'Admin Control panel to enable client continuously update their inventory',
                'PDF generator for receipt so customer can obtain E-receipt upon their purchase'
            ],
            stacks: ['AWS EC2', 'Springboot','Angular', 'PostgreSQL', 'Redis', 'Revers proxy', 'Thymeleaf', 'Nginx' ],
            url: 'https://pugetsoundcustoms.com/',
            screenshots: [
                'https://sammyoopublicbucket.s3.us-west-2.amazonaws.com/react-portfolio/psc/psc_checkout.png',
                'https://sammyoopublicbucket.s3.us-west-2.amazonaws.com/react-portfolio/psc/psc_inventory.png',
                'https://sammyoopublicbucket.s3.us-west-2.amazonaws.com/react-portfolio/psc/psc_login.png',
                'https://sammyoopublicbucket.s3.us-west-2.amazonaws.com/react-portfolio/psc/psc_main.png'
            ]
        },

    ]

  const [content, setContent] = useState((<div></div>));
    const [modalTitle, setModalTitle] = useState('');

    //Trigger modal generates the inner content of the modal and hand over
  const triggerModal= (idx)=>{
        setOpenModal(true);
        setModalTitle(projects[idx].title);
        //Internal Modal Contents
        setContent(
            (<ContentStyled className="content-container">
                <SwiperSlider screenshots={projects[idx].screenshots}/>

                <h3 className="text-center text-[1.5rem]">Brief Project Explanation: </h3>
                <p className="text-center mb-[1rem]">{projects[idx].brief}</p>
                <ul className="p-[1rem]" style={{backgroundColor: 'rgba(240, 240, 240, 0.5)'}}>
                    {projects[idx].details.map((detail, idx)=>(<li className="leading-loose list-outside" key={idx}>~ &nbsp;{detail}</li>))
                    }
                </ul>



                <h3 className="text-[1.5rem]">Technology Stacks Used</h3>
                <ul className="flex flex-wrap justify-center w-[100%]">
                    {projects[idx].stacks.map((stack, idx)=>
                        (<li className="stack-list">#{stack}&nbsp;</li>))}
                </ul>
            </ContentStyled>)

        );
  }



    return (
        <WorkCardStyles className="work-container">
    <h1 className="project-heading">Projects</h1>
            <div className="project-container">
                {projects.map( (pro, idx)=>(
                    <div className="project-card" key={idx}>
                        <img src={pro.img_url} alt="img"/>
                        <h2 className="project-title">{pro.title}</h2>
                        <div className="pro-details">
                            <p>{pro.brief}</p>
                            <div className="pro-buttons">
                                <a  className="btn" href={pro.url}>VIEW</a>
                                <a onClick={()=>triggerModal(idx)} className="btn">DETAILS</a>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            {openModal &&<GeneralModal
                closeModal={setOpenModal}
                width={'100%'}
                height={'70vh'}
                content={content}
                title={modalTitle}
            />}

        </WorkCardStyles>
    );
}

export default WorkCard;
import React from 'react';
import styled from "styled-components";
import SkillCard from "./SkillCard";
import SectionTitle from "../../common/SectionTitle";

const SkillsetStyles = styled.div`
  
  &.skillset{
    margin: 3rem auto;
  }
  
  .skillset-container{
    max-width: 1280px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
    padding: 1rem 0rem;
    align-items: center;
   
  }
  
  @media screen and (max-width: 740px){
    .skillset-container{
      max-width: 90%;
      margin: auto;
      grid-template-columns: 1fr;
    }
  }
  
  //.bar{
  //  background-color: lightgray;
  //  width: 98%;
  //  margin: 3rem auto;
  //  height: 1px;
  //}

`;

function SkillSets(props) {

    const frontend_stack = [
        {
            title: 'Angular',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
            detail: 'Since 2023, I have started to develop website with Angular as my first SPA. Combining with Strong fondation of Html, CSS, Javascript, conducted several projects which demonstrates my Angular Skillset',
        },
        {
            title: 'RxJs',
            icon: 'https://rxjs.dev/generated/images/marketing/home/Rx_Logo-512-512.png',
            detail: 'State management library for Angular projects. Skillful API control with RxJS to utilize Backend server API for the client Application. (Asynchronous Data handling)'
        },
        {
            title: 'React',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
            detail: '2nd SPA development platform since 2024. With strong foundation built with Angular since 2023, Learning curve for React was significantly lower than expected as I am already familiar with SPA framework.'
        },
        {
            title: 'Redux',
            icon: 'https://www.bairesdev.com/wp-content/uploads/2020/07/redux.svg',
            detail: 'State management library for React Application. Utilizing Redux toolkit to manage the backend server Database & asynchronously control the various state for better UX.'
        },
        {
            title: 'Tailwind',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1280px-Tailwind_CSS_Logo.svg.png',
            detail: 'Pairing with Bootstrap, accelerate the UI development process & minimize the CSS making the source code messy. Pairing with Styled component, there\'s no need for separate CSS file for each component.'
        },
        {
            title: 'TypeScript',
            icon: 'https://www.datocms-assets.com/48401/1628645197-learn-typescript.png',
            detail: 'Strong foundation of OOP from backend JAVA development, adopting TS from JS wasn\'n a big burden for me. Also, from the several professional project experience with Angular, I\'m now super familiar with TS based Development environment.'
        }
    ]

    const backend_stack = [
        {
            title: 'Springboot',
            icon: 'https://miro.medium.com/v2/resize:fit:700/0*R60lnmJl4hanOBaJ.png',
            detail: 'Main backend framework. Strong foundation on OOP language & programming training gained from school work & project experience, I can build scalable & reliable backend application can provide quality API & authorization/authentication token to the client application '
        },
        {
            title: 'Redis',
            icon:'https://cdn4.iconfinder.com/data/icons/redis-2/1451/Untitled-2-512.png',
            detail:'Cache server for backend application. Utilize Redis to optimize the API processing speed & server network transaction cost. Also familiar with handling synchronization for Cache & server data.'
        },
        {
            title: 'MySQL',
            icon:'https://pngimg.com/d/mysql_PNG22.png',
            detail: 'Strong foundation of SQL query skillset. Also utilize JPA as ORM to orchestrate the backend application\'s busuiness logic & data handling.'
        },
        {
            title: 'PostMan',
            icon:'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png',
            detail:'Backend server API testing tool. After the Unit test, I also run the sample case of API use cases to ensure the API is working on the way business requirement intended. This can also be utilized as a documentation for APIs.'
        },
        {
            title: 'JAVA',
            icon:'https://sammyoopublicbucket.s3.us-west-2.amazonaws.com/react-portfolio/java.png',
            detail: 'Grown OOP capabilities since 2021, deepening understanding of Java. Backend development process with Springboot also deepened my understanding on JAVA.'
        }

    ]

    const devOps_stack = [
        {
            title: 'Linux',
            icon:'https://logos-world.net/wp-content/uploads/2020/09/Linux-Logo.png',
            detail:'Proficient Shell Scripter gained hands-on experience from running the server for e-commerce application. Confident on linux based server maintenance & architecturing for business value.'
        },
        {
            title: 'AWS EC2',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png',
            detail:'Strong foundation on AWS ecosystem for the IT infrastructure solution. Currently running 1 intergrated backend server for multi businesses. You can also ask for the Original server instance if you upgrade your plan to premium.'
        },
        {
            title: 'AWS SES',
            icon:'https://static-00.iconduck.com/assets.00/aws-ses-simple-email-service-icon-439x512-g8w8m5be.png',
            detail:'Pairing with DNS management skillset, I can provide custom email solution for your businesses. Your business email won\'t be considered as SPAM because I can configure DKIM, DMARC, MAIL FROM for your mail server.'
        },
        {
            title: 'DNS management',
            icon:'https://miro.medium.com/v2/resize:fit:960/1*QEU1TZtuUUtnN3L0qTy6bA.png',
            detail:'DNS management with AWS Route 53. Expertise on managing DNS record for your business. SSL certification, LDAP server for intranet, DNS for Frontend server, Load Balancing.'
        },
        {
            title: 'Docker',
            icon: 'https://logos-world.net/wp-content/uploads/2021/02/Docker-Symbol.png',
            detail:'Paring with linux shell scripting skillset, using Docker to orchestrate multiple server instance easily with dockerizing the application image as a container. Outscaling the server instance in the future with high traffic volume will be easier with Docker.'
        },
        {
            title: 'CD/CI with Github Action',
            icon: 'https://res.cloudinary.com/practicaldev/image/fetch/s--MGFgk-2t--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://i.imgur.com/NZZgERx.png',
            detail: 'Building CD/CI pipeline with Docker & Github-Actions. Automated script from getting image from deployed backend source code with Docker file to pulling docker container to the server instance for deployment.'
        }

    ]

    return (
        <SkillsetStyles className="skillset">
            <SectionTitle title={"Front-End"} subTitle={"Modern SPA framework skillset with strong foundation of web fundamentals"}/>
            <div className="skillset-container frontend">
                {frontend_stack.map((stack,idx)=>
                    (<SkillCard object={stack} key={idx}/>)
                )}

            </div>

            {/*<div className="bar"></div>*/}
            <SectionTitle title={"Back-End"} subTitle={"Optimized Business Logic for better UX & reducing server expenses"}/>
            <div className="skillset-container backend">
                {backend_stack.map((stack,idx)=>
                    (<SkillCard object={stack} key={idx}/>)
                )}
            </div>

            {/*<div className="bar"></div>*/}
            <SectionTitle title={"Dev-Ops"} subTitle={"Business Solution for App deployment to server & maintenance covering DNS, Email Server"}/>
            <div className="skillset-container devops">
                {devOps_stack.map((stack,idx)=>
                    (<SkillCard object={stack} key={idx}/>)
                )}
            </div>
        </SkillsetStyles>
    );
}

export default SkillSets;
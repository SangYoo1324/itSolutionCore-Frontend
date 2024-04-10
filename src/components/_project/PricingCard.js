import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import SectionTitle from "../common/SectionTitle";

const PricingCardStyles = styled.div`
  .card{
    background: black;
  }
  
  .pricing{
    width: 100%;
    padding: 6rem 3rem;
    background: black;
  }
  
  .card-container{
    max-width: 1140px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
    padding: 1rem 0;
  }
  
  
  .bar{
    border-bottom: 1px solid #eee;
    width: 40%;
    margin: 1.5rem auto;
    display: block;
  }
  
  .btc{
    font-size: 3rem;
    font-weight: bold;
    padding: 1rem 0;
  }
  
  .btn{
    display: block;
    width: 80%;
    margin: 2rem auto;
  }
  
  .card{
    border: 1px solid #eee;
    text-align: center;
    padding: 1rem;
  }
  .card:hover{
    background-color: #141414;
  }
  
  .card h3{
    font-size: 1.4rem;
    padding: 1rem;
  }
  
  .card p{
    padding: 4px 0;
  }
  
  
  @media screen and (max-width: 740px){
    .card-container{
      max-width: 90%;
      margin: auto;
      grid-template-columns: 1fr;
    }
  }
`


function PricingCard(props) {

    const website_solution = [
        {
            title: "Basic",
            price: 59,
            duration: 30,
            target: 'Good for Small Businesses & Organization',
            features: [
                'Obtaining Own Domain',
                'Maximum 3 pages',
                'Basic API provision',
                '3 month maintenance service',
                'Responsive Design'
            ]
        },
        {
            title: "Advanced",
            price: 199,
            duration: 60,
            target: 'Good for eCommerce, mid-level businesses & Organization',
            features: [
                'Obtaining Own Domain',
                'Maximum 7 pages',
                'Advanced API provision',
                'Basic Membership functionality',
                '1 Year maintenance service',
                'Responsive Design'
            ]
        },
        {
            title: "Premium",
            price: 359,
            duration: 120,
            target: 'Full Enterprise level package',
            features: [
                'Obtaining Own Domain',
                'Fully secured original Backend server infrastructure',
                'Upgraded Membership functionality with authorization level',
                'Advanced API provision with specific authorization level',
                'Load balancing for scalability',
                'Maximum 12 pages',
                '2 Year maintenance service & continuable with monthly subscription',
                'Fully secured Non-Spam filtered Business Email Addresses',
                'Access Control based on the authorization level',
                'Secure private file storage space',
                'Secure private SQL server',
                'Responsive Design',
                'Secure private Cloud File Storage'
            ],
            recurring_cost: [
                {annual: [{title:'domain registration', cost: '10~20$'},
                        {title:'Server Cost', cost:'Varies depending on your business scale. Startups usually get under 10$/m'}]},
                {title:'Custom Email', cost:'4$ per user(1 month free)'},
                {title:'SQL server', cost:'1 year Free-tier, 30GB storage'},
                {title: 'Cloud File Storage', cost: '20GB Free-Tier'}
            ]
        }
    ];

    const it_solution = [

    ]

    return (
        <PricingCardStyles className="pricing">

            <SectionTitle title={"Select Your Best-Fit Plan"} subTitle={"Plans are gradually upgradable and also includes 1 time cost & recurring costs"}/>

            <div className="card-container">
            {website_solution.map((solution, idx) =>(

                    <div className="card" key={idx}>
                        <h3> - {solution.title} - </h3>
                        <div className="bar"></div>
                        <p className="btc"> $ {solution.price}</p>
                        {solution.features.map((feature, idx)=>(
                            <p key={idx}> -  &nbsp;{feature} &nbsp;-</p>
                        ))}

                        <Link to="/contact" className="btn"> ASK NOW</Link>
                    </div>

            ))}
            </div>
        </PricingCardStyles>
    );
}

export default PricingCard;
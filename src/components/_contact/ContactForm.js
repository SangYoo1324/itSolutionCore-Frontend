import React from 'react';
import styled from "styled-components";

const ContactFormStyles = styled.div`
    label{
      color: #fff;
      margin-bottom: 0.5rem;
    }
  
    form{
      display: flex;
      flex-direction: column;
      padding: 4rem 1rem;
      margin: auto;
      max-width: 600px;
    }
  form input, form textarea{
    color: white;
    margin-bottom: 1rem;
    padding: 10px 18px;
    font-size: 1.2rem;
    background-color: rgba(255,255,255,0.1);
    border-color: rgba(255,255,255,0.1);
  }
`

function ContactForm(props) {
    return (
        <ContactFormStyles className="form">
            <form action="">
                <label >Your Name</label>
                <input type="text"/>
                <label >Email</label>
                <input type="text"/>
                <label >Subject</label>
                <input type="text"/>
                <label >Message</label>
                <textarea name="" id="" cols="30" rows="6" placeholder="Type your message here"></textarea>
                <button className="btn">SUBMIT</button>

            </form>
        </ContactFormStyles>
    );
}

export default ContactForm;
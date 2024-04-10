import React from 'react';
import {motion} from 'framer-motion';

import HeroImg2 from "../components/common/HeroImg2";
import ContactForm from "../components/_contact/ContactForm";
import Questions from "../components/_contact/Questions";
function Contact(props) {
    return (
       <motion.div
           initial = {{width: 0}}
           animate ={{width: "100%"}}
           exit={{x: window.innerWidth}}
           transition={{ duration: .5 }}
       >
           <HeroImg2 heading="CONTACT" text="Always welcome to reach out for inquiries"/>
           <ContactForm/>
           <Questions/>


       </motion.div>
    );
}

export default Contact;
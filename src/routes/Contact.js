import React from 'react';
import {motion} from 'framer-motion';

import HeroImg2 from "../components/common/HeroImg2";
import ContactForm from "../components/_contact/ContactForm";
import Questions from "../components/_contact/Questions";
import TestDummy from '../components/_contact/TestDummy';
import {useContext} from "react";
import { GlobalContext } from '../redux/context/GlobalContext';
function Contact(props) {
    const {isRouterAnimiationComplete, setIsRouterAnimiationComplete} = useContext(GlobalContext);
    return (
       <motion.div
           initial = {{width: "100%"}}
           animate ={{width: "100%"}}
           exit={{x: window.innerWidth}}
           transition={{ duration: .5 }}
           onAnimationComplete={() =>{
            setIsRouterAnimiationComplete(true)
            console.log(isRouterAnimiationComplete);
        }}
       >
           <HeroImg2 heading="CONTACT" text="Always welcome to reach out for inquiries"/>
        
           <Questions/>
           <ContactForm/>
       </motion.div>
    );
}

export default Contact;
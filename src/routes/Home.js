import React from 'react';
import HeroImg from "../components/_home/HeroImg";
import {motion} from "framer-motion"
import {Link} from "react-router-dom"
import SkillSets from "../components/_home/skillsets/SkillSets";
import Intro from "../components/_home/Intro";

import Stats from "../components/_home/Stats/Stats";
import {useContext} from "react";
import { GlobalContext } from '../redux/context/GlobalContext';


function Home(props) {



    const {isRouterAnimiationComplete, setIsRouterAnimiationComplete} = useContext(GlobalContext);



    return (
        
        <motion.div
            initial = {{width: 0}}
            animate ={{width: "100%"}}
            exit={{x: window.innerWidth}}
            transition={{ duration: .5 }}
            onAnimationComplete={() =>{
                setIsRouterAnimiationComplete(true)
                console.log(isRouterAnimiationComplete);
            }}
        >


            <HeroImg/>
            
            <Intro/>
            <SkillSets/>
            <Stats/>
            

            </motion.div>

    );
}

export default Home;
import React from 'react';
import HeroImg from "../components/_home/HeroImg";
import {motion} from "framer-motion"

import SkillSets from "../components/_home/skillsets/SkillSets";
import Intro from "../components/_home/Intro";

import Stats from "../components/_home/Stats/Stats";



function Home(props) {






    return (
        
        <motion.div
            initial = {{width: 0}}
            animate ={{width: "100%"}}
            exit={{x: window.innerWidth}}
            transition={{ duration: .5 }}
        >


            <HeroImg/>
            <Intro/>
            <SkillSets/>
            <Stats/>


            </motion.div>

    );
}

export default Home;
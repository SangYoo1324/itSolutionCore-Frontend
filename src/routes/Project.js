import React from 'react';
import styled from "styled-components";
import {motion} from 'framer-motion';
import HeroImg2 from "../components/common/HeroImg2";
import PricingCard from "../components/_project/PricingCard";
import WorkCard from "../components/_project/WorkCard";
import Plan from "../components/_project/Plan";
import ComparisonTable from "../components/_project/ComparisonTable";
import ItSolution from "../components/_project/ItSolution";
import {useContext} from "react";
import { GlobalContext } from '../redux/context/GlobalContext';


function Project(props) {
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

            <HeroImg2 heading="PROJECTS" text="Most Recent Projects for demonstration"/>
            <ItSolution/>
            <WorkCard/>
            <Plan/>
            <PricingCard/>
            <ComparisonTable/>
        </motion.div>

    );
}

export default Project;
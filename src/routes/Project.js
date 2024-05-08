import React from 'react';
import styled from "styled-components";
import {motion} from 'framer-motion';
import HeroImg2 from "../components/common/HeroImg2";
import PricingCard from "../components/_project/PricingCard";
import WorkCard from "../components/_project/WorkCard";
import Plan from "../components/_project/Plan";
import ComparisonTable from "../components/_project/ComparisonTable";
import ItSolution from "../components/_project/ItSolution";



function Project(props) {
    return (
        <motion.div
            initial = {{width: 0}}
            animate ={{width: "100%"}}
            exit={{x: 0}}
            transition={{ duration: .5 }}
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
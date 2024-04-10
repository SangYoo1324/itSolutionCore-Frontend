import React from 'react';
import {motion} from 'framer-motion';
import HeroImg2 from "../components/common/HeroImg2";
import AboutContent from "../components/_about/AboutContent";
import Timeline from "../components/_about/Timeline";
import SectionTitle from "../components/common/SectionTitle";

function About(props) {
    return (
        <motion.div
            initial = {{width: 0}}
            animate ={{width: "100%"}}
            exit={{x: window.innerWidth}}
            transition={{ duration: .5 }}
        >
            <HeroImg2 heading="ABOUT" text="About myself accumulated skillset for IT solutions & Development"/>
            <AboutContent/>
            <SectionTitle title={'TimeLine'} subTitle={'My career path so far until today!'}/>
            <Timeline/>
        </motion.div>
    );
}

export default About;
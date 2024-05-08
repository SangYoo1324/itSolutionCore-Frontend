import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./routes/Home";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import About from "./routes/About";
import {AnimatePresence} from "framer-motion";
import QuestionsDetail from "./routes/QuestionsDetail";
import Login from "./routes/Login";
import Profile from "./routes/Profile";
import RequiredAuth_USER from "./routes/routeGuard/RequiredAuth_USER";
import RequiredAuth_NoAuth from "./routes/routeGuard/RequiredAuth_NoAuth";


function AnimatedRoutes(props) {

    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home/>}/>
                <Route path="/project" element={<Project/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/question/:id" element={<QuestionsDetail/>}/>
                <Route path="/login" element={<RequiredAuth_NoAuth><Login/></RequiredAuth_NoAuth>}/>
                <Route path="/profile" element={<RequiredAuth_USER><Profile/></RequiredAuth_USER>}/>
            </Routes>
        </AnimatePresence>

    );
}

export default AnimatedRoutes;
import './App.css';
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./routes/Home";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Navbar from "./components/common/Navbar";
import HeroImg from "./components/_home/HeroImg";
import Footer from "./components/common/Footer";
import AnimatedRoutes from "./AnimatedRoutes";


function App() {

  return (
    <div >
        <Navbar/>
        <AnimatedRoutes/>
        <Footer/>

    </div>
  );
}

export default App;

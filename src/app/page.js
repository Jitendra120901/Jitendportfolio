import "./style.css";
import HeroSection from "./Components/HeroSection";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import { Card } from "./Components/Card";
import {TracingBeam} from "./UI/TracingBeam"
import { BackgroundBeams } from "./UI/BackgroundBeams";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <div className="lg:p-16 p-4">
      {/* <BackgroundBeams/> */}
      <TracingBeam>
      <HeroSection />
      <Projects />
      {/* <Card/> */}
      <Skills />
      <Contact/>
      </TracingBeam>
      <ToastContainer/>
    </div>
  );
}

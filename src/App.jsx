import { Toaster } from "react-hot-toast";
import NavBar from "./component/NavBar";
import Page2 from "./component/Page2";
import { useEffect, useRef } from "react";
import Contents from "./component/Contents";
import AOS from "aos"; 
import 'aos/dist/aos.css'; 

export default function App() {
  const contactSectionRef = useRef(null);
  const certificateSectionRef = useRef(null);
  const projectSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const experienceSectionRef = useRef(null);
  
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.addEventListener('load', AOS.refresh);
  }, []);

  return (
    <h1 className="bg-bg-color -z-10">
      <div className="grid">
        <NavBar contactRef={contactSectionRef} certificateRef={certificateSectionRef} projectRef={projectSectionRef} aboutRef={aboutSectionRef} experienceRef={experienceSectionRef} />
        <Contents />
        <Page2 contactRef={contactSectionRef} certificateRef={certificateSectionRef} projectRef={projectSectionRef} aboutRef={aboutSectionRef} experienceRef={experienceSectionRef}/>
        <Toaster/>
      </div>
    </h1>
  );
}

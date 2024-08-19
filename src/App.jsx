import { Toaster } from "react-hot-toast";
import Page1 from "./component/Contents";
import NavBar from "./component/NavBar";
import Page2 from "./component/Page2";
import { useRef } from "react";

export default function App() {
  const contactSectionRef = useRef(null);
  const certificateSectionRef = useRef(null);
  const projectSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const experienceSectionRef = useRef(null);
  return (
    <h1 className=" bg-bg-color -z-10">
      <div className="grid ">
        <NavBar contactRef={contactSectionRef} certificateRef={certificateSectionRef} projectRef={projectSectionRef} aboutRef={aboutSectionRef} experienceRef={experienceSectionRef} />
        <Page1 />
        <Page2 contactRef={contactSectionRef} certificateRef={certificateSectionRef} projectRef={projectSectionRef} aboutRef={aboutSectionRef} experienceRef={experienceSectionRef}/>
        <Toaster/>
      </div>
    </h1>
  )
}
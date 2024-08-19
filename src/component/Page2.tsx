import React, { useRef } from 'react';
import SkillCard from './SkillCard';
import Java from '../assets/java.png'
import JavaScript from '../assets/javascript.png'
import SpringBoot from '../assets/Spring-boot.png'
import Node from '../assets/node-js.png'
import Express from '../assets/ExpressJs.png'
import ReactLogo from '../assets/React.png'
import NextJs from '../assets/NextJs.png'
import Angular from '../assets/Angular.png'
import MongoDB from '../assets/MongoDB.png'
import Sql from '../assets/Sql.png'
import Html from '../assets/html.png'
import Css from '../assets/Css.png'
import Tailwind from '../assets/Tailwind.png'
import TypeScript from '../assets/Typescript.png'
import Projects from './Projects';
import Certificates from './Certificates';
import Expierience from './Expierience';
import ContactSection from './ContactSection';
import Footer from './Footer';

const Page2 = ({contactRef , certificateRef,projectRef , aboutRef,experienceRef}) => {
   

    return (
        <div>
            <div  className='bg-bg-color-2 shadow-[inset_0_30px_35px_0px_rgba(0,0,0,0.2)]  p-10 tablet-or-mobile:p-2'>
                <div className='mt-10 ml-20 tablet-or-mobile:ml-2 tablet-or-mobile:mt-4'>
                    <div ref={aboutRef} className='mb-10 tablet-or-mobile:mb-2'>
                        <label className='flex text-white text-[50px]  font-semibold  tablet-or-mobile:text-[25px]' htmlFor="">About</label>
                    </div>
                    <div className='text-white text-xl tablet-or-mobile:text-xs leading-relaxed'>
                        <p>Meet <strong className='text-font-color'>Dinuk Tharindu Dissanayake</strong>, a go-getter from the charming town of Kandy, Sri Lanka. Armed with:</p>
                        <ul className='list-disc list-inside ml-5 tablet-or-mobile:ml-1  font-bold tablet-or-mobile:font-medium  text-font-color'><br />
                            <li>🎓 BSc in Quantity Surveying at University of Wolverhampton</li>
                            <li>🎓 Diploma in Software Engineering - Pursuing</li>
                            <li>🎓 MEP Quantity Surveying at ACTA</li>
                            <li>🎓 Studied At Kandy Model School & Dharmaraja College</li>
                        </ul><br />
                        <p>🌱 Currently pursuing: Software Engineering at ICET Institute, Panadura.</p>
                        <p>🔭 I’m currently working on: Exploring various projects in Software Engineering.</p>
                        <p>👯 I’m looking to collaborate on: Open-source projects related to web development or software engineering.</p>
                        <p>🤝 I’m looking for help with: Improving my coding skills and understanding complex algorithms.</p>
                        <p>🌱 I’m currently learning: Software Engineering with a focus on JAVA, JavaScript (JS), TypeScript (TS), React, Angular, NodeJs, ExpressJs, and Spring Boot.</p>
                        <p>💬 Ask me about: Anything related to programming languages, web development, or software engineering concepts.</p>
                        <p>⚡ Fun fact: I'm always eager to learn and currently expanding my knowledge in JAVA, JS, TS, React, Angular, and Spring Boot!</p>
                        <br />
                        <p>🎓 Schools attended:</p>
                        <ul className='list-disc list-inside ml-5'>
                            <li>Kandy Model School: 🏫</li>
                            <li>Dharmaraja College: 📚</li>
                        </ul>
                    </div>

                    <div className='mt-10 tablet-or-mobile:mt-6 mb-10'>
                        <div className=' tablet-or-mobile:mb-4'>
                            <label className='flex justify-center text-white text-[50px] font-serif font-semibold tablet-or-mobile:text-[25px]' htmlFor="">My Skills</label>
                        </div>
                        <div className='grid grid-cols-5 gap-y-9 tablet-or-mobile:grid-cols-3 mt-5'>
                            <SkillCard image={Java} name="Java" />
                            <SkillCard image={JavaScript} name="Java Script" />
                            <SkillCard image={TypeScript} name="Type Script" />
                            <SkillCard image={SpringBoot} name="Spring-Boot" />
                            <SkillCard image={Node} name="NodeJs" />
                            <SkillCard image={Express} name="ExpressJs" />
                            <SkillCard image={ReactLogo} name="React" />
                            <SkillCard image={NextJs} name="Next Js" />
                            <SkillCard image={Angular} name="Angular" />
                            <SkillCard image={MongoDB} name="Mongo DB" />
                            <SkillCard image={Sql} name="Sql" />
                            <SkillCard image={Html} name="Html" />
                            <SkillCard image={Css} name="CSS" />
                            <SkillCard image={Tailwind} name="Tailwind CSS" />

                        </div>
                    </div>
                </div>
            </div>
            <div ref={projectRef} className='bg-bg-color shadow-[inset_0_30px_35px_0px_rgba(0,0,0,0.2)]  p-10 tablet-or-mobile:p-2'>
                <Projects />
            </div>
            <div ref={certificateRef} className='bg-bg-color-2 shadow-[inset_0_30px_35px_0px_rgba(0,0,0,0.2)]  p-10 tablet-or-mobile:p-2'>
                <Certificates />
            </div>
            <div ref={experienceRef} className='bg-bg-color shadow-[inset_0_30px_35px_0px_rgba(0,0,0,0.2)]  p-10 tablet-or-mobile:p-2'>
                <Expierience />
            </div>
            <div ref={contactRef} className='bg-bg-color-2 shadow-[inset_0_30px_35px_0px_rgba(0,0,0,0.2)]  p-10 tablet-or-mobile:p-2'>
                <ContactSection />
            </div>
            <div className='bg-bg-color shadow-[inset_0_30px_35px_0px_rgba(0,0,0,0.2)]  p-10 tablet-or-mobile:p-2'>
                <Footer />
            </div>
        </div>
    );
}

export default Page2;

import React from 'react';
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
 
const Page2 = () => {
    return (
        <div className='bg-bg-color-2 shadow-[inset_0_30px_35px_0px_rgba(0,0,0,0.2)]  p-10'>
            <div className='mt-20 ml-20 '>
                <div className='mb-10'>
                    <label className='flex text-white text-[50px] font-serif font-semibold  ' htmlFor="">About</label>
                </div>
                <div className='text-white text-xl leading-relaxed'>
                    <p>Meet <strong className='text-font-color'>Dinuk Tharindu Dissanayake</strong>, a go-getter from the charming town of Kandy, Sri Lanka. Armed with:</p>
                    <ul className='list-disc list-inside ml-5 font-serif font-bold text-font-color'><br />
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

                <div className='mt-10'>
                    <div className='mb-10 '>
                        <label className='flex justify-center text-white text-[50px] font-serif font-semibold  ' htmlFor="">My Skills</label>
                    </div>
                    <div className='grid grid-cols-5 gap-y-9'>
                        <SkillCard image={Java} name="Java"/>
                        <SkillCard image={JavaScript} name="Java Script"/>
                        <SkillCard image={TypeScript} name="Type Script"/>
                        <SkillCard image={SpringBoot} name="Spring-Boot"/>
                        <SkillCard image={Node} name="NodeJs"/>
                        <SkillCard image={Express} name="ExpressJs"/>
                        <SkillCard image={ReactLogo} name="React"/>
                        <SkillCard image={NextJs} name="Next Js"/>
                        <SkillCard image={Angular} name="Angular"/>
                        <SkillCard image={MongoDB} name="Mongo DB"/>
                        <SkillCard image={Sql} name="Sql"/>
                        <SkillCard image={Html} name="Html"/>
                        <SkillCard image={Css} name="CSS"/>
                        <SkillCard image={Tailwind} name="Tailwind CSS"/>
                        
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Page2;

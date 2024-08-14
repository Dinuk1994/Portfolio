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
import ProjectCard from './ProjectCard';
import Facebook from '../assets/Facebook.png'
import PrideProducts from '../assets/Pride-Products.png'
import FindMyWay from '../assets/FindMyTrip.png'
import ChatzApp from '../assets/ChatzApp.mp4'
import EEshop from '../assets/EEshop.png'
import Library from '../assets/Library.png'

const Page2 = () => {
    return (
        <div className='bg-bg-color-2 shadow-[inset_0_30px_35px_0px_rgba(0,0,0,0.2)]  p-10 tablet-or-mobile:p-2'>
            <div className='mt-20 ml-20 tablet-or-mobile:ml-2 tablet-or-mobile:mt-4'>
                <div className='mb-10 tablet-or-mobile:mb-2'>
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

                <div className='mt-10 tablet-or-mobile:mt-6'>
                    <div className='mb-10 tablet-or-mobile:mb-4'>
                        <label className='flex justify-center text-white text-[50px] font-serif font-semibold tablet-or-mobile:text-[25px]' htmlFor="">My Skills</label>
                    </div>
                    <div className='grid grid-cols-5 gap-y-9 tablet-or-mobile:grid-cols-3'>
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
                <div className='mt-20 tablet-or-mobile:mt-6'>
                    <div className='mb-10 tablet-or-mobile:mb-4'>
                        <label className='flex justify-center text-white text-[50px] font-serif tablet-or-mobile:mr-0 font-semibold tablet-or-mobile:text-[25px] mr-16' htmlFor="">Projects</label>
                    </div>

                    <div className='grid w-full grid-cols-2 gap-y-12 tablet-or-mobile:gap-y-3 tablet-or-mobile:grid-cols-2'>
                        <ProjectCard media={Facebook} link="https://github.com/Dinuk1994/Facebook-login" description="Created a Facebook login page clone using React framework." />
                        <ProjectCard media={PrideProducts} link="https://github.com/Dinuk1994/Pride-Products-FE" description="Leading the development of a robust and feature-rich e-commerce website for a product-selling shop using modern technologies. Leveraging React.js for the front-end MERN stack for the back-end to create a scalable and responsive platform for online retail."/>          
                        <ProjectCard media={EEshop} link="https://github.com/Dinuk1994/Electrical-and-Electronic-Shop/tree/main/EEShop" description="Built JavaFX app with MySQL backend using Hibernate. Managed CRUD operations, transaction handling, and calculated total item prices." />
                        <ProjectCard media={Library} link="https://github.com/Dinuk1994/Book-inventory-and-borrower-inventory/tree/main/2024-1-18%20Book%20Inventory" description="Created a library management application seamlessly integrates a userfriendly front-end built with React and a robust back-end powered by Spring Boot. This comprehensive system efficiently manages book borrowers and maintains inventory of available books. With intuitive interfaces, users can effortlessly perform CRUD (Create, Read, Update, Delete) operations, enabling smooth management of library resources. From adding new books to updating borrower information." />
                        <ProjectCard media={ChatzApp} link="https://github.com/Dinuk1994/MERN-Chat-App" description="Developed a chat application using the MERN stack (MongoDB, Express.js, React, Node.js) with Socket.io for real-time communication, JWT tokens for secure authentication, and Tailwind CSS for responsive design. The app supports personal and group chats, providing a seamless user experience across devices." />
                    </div>

                </div>
                <div className='mt-20 tablet-or-mobile:mt-7'>
                    <div className='mb-10 tablet-or-mobile:mb-4'>
                        <label className='flex justify-center tablet-or-mobile:mr-0 text-white text-[50px] font-serif font-semibold tablet-or-mobile:text-[25px] mr-16' htmlFor="">Certificates</label>
                    </div>

                    <div className='grid w-full grid-cols-2 gap-y-12 tablet-or-mobile:grid-cols-1'>
                    
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Page2;

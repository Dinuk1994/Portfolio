import ProjectCard from './ProjectCard';
import Facebook from '../assets/Facebook.png';
import PrideProducts from '../assets/Pride-Products.png'
import ChatzApp from '../assets/ChatzApp.mp4'
import EEshop from '../assets/EEshop.png'
import Library from '../assets/Library.png'

const Projects = () => {
    return (
        <div>
            <div className='mt-8 mb-10 tablet-or-mobile:mt-6'>
                <div className=' tablet-or-mobile:mb-4'>
                    <label className='flex justify-center text-white text-[50px] font-serif tablet-or-mobile:mr-0 font-semibold tablet-or-mobile:text-[25px] ' htmlFor="">Projects</label>
                </div>

                <div className='flex justify-center mt-8'>
                    <div className='flex justify-center '>
                        <div className='grid w-full grid-cols-2 gap-x-10  tablet-or-mobile:gap-x-3   gap-y-12 tablet-or-mobile:gap-y-3 tablet-or-mobile:grid-cols-2'>
                            <ProjectCard media={Facebook} link="https://github.com/Dinuk1994/Facebook-login" description="Created a Facebook login page clone using React framework." />
                            <ProjectCard media={PrideProducts} link="https://github.com/Dinuk1994/Pride-Products-FE" description="Leading the development of a robust and feature-rich e-commerce website for a product-selling shop using modern technologies. Leveraging React.js for the front-end MERN stack for the back-end to create a scalable and responsive platform for online retail." />
                            <ProjectCard media={EEshop} link="https://github.com/Dinuk1994/Electrical-and-Electronic-Shop/tree/main/EEShop" description="Built JavaFX app with MySQL backend using Hibernate. Managed CRUD operations, transaction handling, and calculated total item prices." />
                            <ProjectCard media={Library} link="https://github.com/Dinuk1994/Book-inventory-and-borrower-inventory/tree/main/2024-1-18%20Book%20Inventory" description="Created a library management application seamlessly integrates a userfriendly front-end built with React and a robust back-end powered by Spring Boot. This comprehensive system efficiently manages book borrowers and maintains inventory of available books. With intuitive interfaces, users can effortlessly perform CRUD (Create, Read, Update, Delete) operations, enabling smooth management of library resources. From adding new books to updating borrower information." />
                            <ProjectCard media={ChatzApp} link="https://github.com/Dinuk1994/MERN-Chat-App" description="Developed a chat application using the MERN stack (MongoDB, Express.js, React, Node.js) with Socket.io for real-time communication, JWT tokens for secure authentication, and Tailwind CSS for responsive design. The app supports personal and group chats, providing a seamless user experience across devices." />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects
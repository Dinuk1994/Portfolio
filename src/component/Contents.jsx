import Photo from '../assets/Photo.png'
import { CgFacebook } from 'react-icons/cg'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import { TbBrandWhatsapp } from "react-icons/tb";
const Contents = () => {
    return (
        <div className="grid grid-cols-2 tablet-or-mobile:grid-cols-1 bg-bg-color mt-10 pb-20">
            <div className="col-span-1 ml-4 pt-40 tablet-or-mobile:pt-5  items-center">
                <label htmlFor="" className='font-semibold flex justify-center text-4xl text-white tablet-or-mobile:text-3xl'>Hello !</label><br />
                <label className="flex justify-center tablet-or-mobile:text-[20px] text-white text-[40px] items-center">
                    {"I'm"} <span className="ml-5 text-[70px] text-font-color tablet-or-mobile:text-[35px] font-semibold">Dinuk Tharindu</span>
                </label><br />
                <div className="relative flex justify-center mt-6 text-white text-4xl tablet-or-mobile:text-2xl  items-center ">
                    <span className="absolute t whitespace-nowrap  pb-7 overflow-hidden animate-typing-sequence">
                        UI/UX Designer
                    </span>
                    <span className="absolute whitespace-nowrap pb-7 overflow-hidden animate-typing-sequence-delay">
                        Full Stack Developer
                    </span>
                </div>
                <div className='flex justify-center mt-20 tablet-or-mobile:mt-10'>
                    <a
                        href='/Dinuk_Dissanayake.pdf'  
                        download="Dinuk_Dissanayake_CV.pdf"  
                        className='w-60 h-16 tablet-or-mobile:w-44 tablet-or-mobile:h-12 hover:bg-gray-800 group bg-bg-color-2 shadow-lg shadow-black rounded-2xl flex justify-center'
                    >
                        <label className='text-font-color group-hover:text-white flex items-center font-semibold tablet-or-mobile:text-lg text-2xl'>
                            Download CV
                        </label>
                    </a>
                </div>


            </div>
            <div className="col-span-1  flex justify-center mt-5 items-center">
                <div className='grid grid-cols-12'>
                    <div className='col-span-10 mt-8 tablet-or-mobile:mt-3'>
                        <img
                            className='size-[450px] tablet-or-mobile:size-[250px] tablet-or-mobile:border-[5px] tablet-or-mobile:ml-12 tablet-or-mobile:flex tablet-or-mobile:justify-center tablet-or-mobile:mr-0 mr-8 border-[10px] rounded-full animate-border-color-cycle'
                            src={Photo}
                            alt="Description of image"
                        />
                    </div>
                    <div className='col-span-2   '>
                        <div className='flex tablet-or-mobile:hidden'>
                            <div className='bg-font-color h-[100px]  rounded-full w-1 ml-[20px] mt-[5px]'></div>
                            <div className='bg-font-color h-[100px] rounded-full w-1 ml-2  mr-8 mt-[5px]'></div>
                        </div>
                        <div className='grid mr-5 tablet-or-mobile:mt-5'>
                            <a href='https://web.facebook.com/profile.php?id=100006024227651' target="_blank" rel="noopener noreferrer">
                                <CgFacebook className='bg-white tablet-or-mobile:size-5 rounded-full size-8 mt-5 hover:animate-bounce hover:text-blue-600 ml-3' />
                            </a>
                            <a href="https://x.com/DinukD" target='_blank' rel='noopener noreferrer'>
                                <FaTwitter className=' text-white  tablet-or-mobile:size-5  size-8 mt-5 hover:animate-bounce hover:text-blue-500 ml-3 ' />
                            </a>
                            <a href="https://www.linkedin.com/in/dinuk-dissanayake-3a0ba7270/" target='_blank' rel='noopener noreferrer'>
                                <FaLinkedinIn className=' text-white   tablet-or-mobile:size-5  rounded-md hover:bg-blue-500  size-8 mt-5 hover:animate-bounce  ml-3 ' />
                            </a>
                            <a href="https://github.com/Dinuk1994" target='_blank' rel='noopener noreferrer'>
                                <TbBrandGithubFilled className=' text-white  tablet-or-mobile:size-5  hover:text-black rounded-full hover:bg-white  size-8 mt-5 hover:animate-bounce  ml-3 ' />
                            </a>
                            <a href="https://wa.me/94765429917" target='_blank' rel='noopener noreferrer'>
                                <TbBrandWhatsapp className=' text-white  tablet-or-mobile:size-5  hover:text-green-600 rounded-full hover:bg-white  size-8 mt-5 hover:animate-bounce  ml-3 ' />
                            </a>

                        </div>
                        <div className='flex tablet-or-mobile:hidden'>
                            <div className='bg-font-color h-[100px] rounded-full w-1 ml-[20px] mt-[10px]'></div>
                            <div className='bg-font-color h-[100px] rounded-full w-1 ml-2  mr-8 mt-[10px]'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contents


import { CgFacebook } from 'react-icons/cg'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import { TbBrandWhatsapp } from "react-icons/tb";

const Footer = () => {
    return (
        <div className="grid pt-8">
            <div className="grid grid-cols-3 tablet-or-mobile:grid-cols-1">
                <div className="col-span-1 mt-6 justify-items-center mr-8 tablet-or-mobile:mr-0 0">
                    <div className="bg-white rounded-lg w-full h-1"></div>
                    <div className="bg-white rounded-lg  w-full mt-1 h-1"></div>
                </div>
                <div className="col-span-1 tablet-or-mobile:flex tablet-or-mobile:justify-center tablet-or-mobile:mt-6">
                    <label className="text-font-color tablet-or-mobile:text-2xl text-5xl font-semibold" htmlFor="">Appreciate Your Time!</label>
                </div>
                <div className="col-span-1 mt-6 justify-items-center ml-8 tablet-or-mobile:ml-0  0">
                    <div className="bg-white rounded-lg  w-full h-1"></div>
                    <div className="bg-white rounded-lg  w-full mt-1 h-1"></div>
                </div>

            </div>
            <div className="flex justify-center gap-5">
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
            <p className='text-center mt-14 text-white text-sm font-serif font-semibold mb-4'>Copyright © 2024. All rights reserved.</p>
        </div>
    )
}

export default Footer
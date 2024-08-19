/* eslint-disable react/prop-types */
import Logo from '../assets/Logo.png'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

const NavBar = ({ contactRef, certificateRef, projectRef, aboutRef ,experienceRef}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const scrollToContacts = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  const scrollToCertificates = () => {
    certificateRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  const scrollToProjects = () => {
    projectRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  const scrollToAbouts = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  const scrollToExperience = () => {
    experienceRef.current.scrollIntoView({ behavior: 'smooth' });
  }



  return (
    <div className="grid grid-cols-2 mt-3 bg-bg-color ">
      <div className='col-span-1'>
        <div className='grid grid-cols-12 ml'>
          <div className='col-span-2 flex justify-end items-center'>
            <img src={Logo} className='w-8 h-8 tablet-or-mobile:w-6 tablet-or-mobile:h-6' alt="Logo" />
          </div>
          <div className='col-span-6 flex justify-start items-center'>
            <label className='text-font-color text-2xl ml-3 font-bold tablet-or-mobile:text-lg tablet-or-mobile:text-nowrap'>Dinuk Dissanayake</label>
          </div>
        </div>
      </div>

      <div className='desktop-or-laptop:hidden flex justify-end items-center pr-3'>
        <GiHamburgerMenu onClick={toggleMenu} className='text-font-color text-2xl' />
      </div>

      <div className='col-span-1 tablet-or-mobile:hidden flex justify-end mr-9 items-center'>
        <div className='grid grid-cols-5 gap-3'>
          <button onClick={scrollToAbouts} className='text-white hover:text-font-color text-xl '>About</button>
          <button onClick={scrollToProjects} className='text-white hover:text-font-color text-xl '>Projects</button>
          <button onClick={scrollToCertificates} className='text-white hover:text-font-color text-xl'>Certificates</button>
          <button onClick={scrollToExperience} className='text-white hover:text-font-color text-xl'>Experience</button>
          <button onClick={scrollToContacts} className='text-white hover:text-font-color text-xl'>Contact</button>
        </div>
      </div>

      {isOpen && (
        <div className='absolute top-0 desktop-or-laptop:hidden right-0 mt-12 mr-3 bg-bg-color  shadow-lg rounded-lg p-4'>
          <button onClick={scrollToAbouts} className='block text-white hover:text-font-color text-md  mb-2'>About</button>
          <button onClick={scrollToProjects} className='block text-white hover:text-font-color text-md  mb-2'>Projects</button>
          <button onClick={scrollToCertificates} className='block text-white hover:text-font-color text-md mb-2'>Certificated</button>
          <button onClick={scrollToExperience} className='block text-white hover:text-font-color text-md mb-2'>Experience</button>
          <button onClick={scrollToContacts} className='block text-white hover:text-font-color text-md  mb-2'>Contact</button>
        </div>
      )}
    </div>
  )
}

export default NavBar

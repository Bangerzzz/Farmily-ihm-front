import React from 'react'
import logo from '../images/logo.png'
import {AiOutlineArrowLeft} from 'react-icons/ai'



const NavbarLogin = () => {
  return (
    <div className="shadow-lg flex justify-between items-center h-12 mx-auto px-4 text-black">
      <div className="w-1/4">
        <button className="text-2xl text-green-500">
          <AiOutlineArrowLeft></AiOutlineArrowLeft>
        </button>
      </div>
      <div className="w-1/2 text-center">
        <a href="/">
          <img src={logo} alt="Logo" className="w-50 h-12 inline-block" />
        </a>
      </div>
      <div className="w-1/4"></div>
    </div>
  )
}

export default NavbarLogin
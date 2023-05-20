import React from 'react'
import logo from '../images/logo.png'
import {AiOutlineHome,AiOutlineHeart, AiOutlineSearch} from 'react-icons/ai'
import {BiMessageAlt, BiUser} from 'react-icons/bi'



const Navbar = () => {
  return (
    <div className='shadow-lg flex justify-between items-center h-12 mx-auto px-4 text-black'>
    <div className="flex items-center ml-20">
      <a href="/">
        <img src={logo} alt="Logo" className="w-50 h-12 mr-4"/>
      </a>
        <div className="flex items-center">
            <button className="px-3 py-1 rounded bg-[#4dc263] text-white mr-4">Deposer une annonce</button>

            <div className="relative rounded-full">
            <input type="text" placeholder="Rechercher" className="border border-gray-300 px-3 py-1 pr-10 rounded-full shadow" />
            <button type="submit" className="absolute inset-y-0 right-0 flex items-center px-2 ">
                <AiOutlineSearch />
            </button>
            </div>
        </div>
    </div>
      <ul className='flex space-x-4'>
        <li>
        <a href='/'>
            <AiOutlineHome className="text-xl"></AiOutlineHome>
        </a>
        </li>

        <li>
        <a href='/'>
            <AiOutlineHeart className="text-xl"></AiOutlineHeart>
        </a>
        </li>

        <li>
        <a href='/'>
            <BiMessageAlt className="text-xl"></BiMessageAlt>
        </a>
        </li>

        <li>
        <a href='/'>
            <BiUser className="text-xl"></BiUser>
        </a>
        </li>

      </ul>
    </div>
  )
}

export default Navbar

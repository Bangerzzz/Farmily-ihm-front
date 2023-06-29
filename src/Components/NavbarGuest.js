import React from 'react';
import logo from '../images/logo.png';
import {AiOutlineSearch} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const NavbarGuest = () => {
  return (
    <div className='shadow-lg flex justify-between items-center h-12 mx-auto px-4 text-black'>
      <div className="flex items-center ml-20">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-50 h-12 mr-4"/>
        </Link>
        <Link to="/login">
          <button className="px-3 py-1 rounded bg-[#4dc263] text-white mr-4">Deposer une annonce</button>
        </Link>
        <div className="relative rounded-full">
          <input type="text" placeholder="Rechercher" className="border border-gray-300 px-3 py-1 pr-10 rounded-full shadow" />
          <button type="submit" className="absolute inset-y-0 right-0 flex items-center px-2 ">
            <AiOutlineSearch />
          </button>
        </div>
      </div>
      <div className="flex items-center mr-20">
        <Link to="/signup">
          <button className="px-3 py-1 rounded bg-[#4dc263] text-white mr-4">Signup</button>
        </Link>
        <Link to="/login">
          <button className="px-3 py-1 rounded bg-[#4dc263] text-white">Login</button>
        </Link>
      </div>
    </div>
  )
}

export default NavbarGuest;

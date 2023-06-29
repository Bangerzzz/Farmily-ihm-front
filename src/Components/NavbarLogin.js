import React from 'react';
import logo from '../images/logo.png';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const NavbarLogin = () => {
  return (
    <div className="shadow-lg flex justify-between items-center h-12 mx-auto px-4 text-black">
      <div className="w-1/4">
        <Link to="/">
          <AiOutlineArrowLeft className="text-2xl text-green-500" />
        </Link>
      </div>
      <div className="w-1/2 text-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-50 h-12 inline-block" />
        </Link>
      </div>
      <div className="w-1/4"></div>
    </div>
  );
};

export default NavbarLogin;

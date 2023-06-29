import React , { useState, useEffect} from 'react';
import logo from '../images/logo.png';
import { AiOutlineHome, AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai';
import { BiMessageAlt, BiUser} from 'react-icons/bi';
import { Link,useNavigate } from 'react-router-dom';
import getUserInfo from '../Helpers/getUserInfo';
import { accountService } from '../Services/accountServices';


const Navbar = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const userInfo = await getUserInfo();
      setUserInfo(userInfo);
    };
    
    fetchData();
  }, []);
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const handleLogout = () => {
    accountService.logout();
    setUserInfo(null); 
    navigate("/login"); 
  };

  return (
    <div className='shadow-lg flex justify-between items-center h-12 mx-auto px-4 text-black'>
      <div className="flex items-center ml-20">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-50 h-12 mr-4" />
        </Link>
        <div className="flex items-center">
          <Link to="/annonce-creation">
            <button className="px-3 py-1 rounded bg-[#4dc263] text-white mr-4">Deposer une annonce</button>
          </Link>
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
            <AiOutlineHeart className="text-xl"></AiOutlineHeart>
          </a>
        </li>
        <li>
          <a href='/'>
            <BiMessageAlt className="text-xl"></BiMessageAlt>
          </a>
        </li>
        <li>
          {userInfo ? (
            <div className="relative">
              <button onClick={toggleDropdown}>
                <img src={userInfo.avatar} alt="User avatar" className="rounded-full w-6 h-6" />
                
              </button>
              {isDropdownVisible && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg py-2 z-20">
                  <div className="flex items-center px-3 py-2">
                    <img src={userInfo.avatar} alt="User avatar" className="rounded-full w-10 h-10 mr-2" />
                    <div>
                      <p>{userInfo.lastName} {userInfo.firstName}</p>
                    </div>
                  </div>
                  <Link to="/profil" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white">Profil</Link>
                  <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white">Déconnexion</button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">
              <BiUser className="text-xl" />
            </Link>
          )}
        </li>
      </ul>
    </div>
  )
}

export default Navbar;

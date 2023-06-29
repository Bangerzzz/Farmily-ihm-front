import React, { useEffect, useRef, useState } from 'react';
import { FaCamera, FaTimes } from 'react-icons/fa';
import defaultProfileImg from '../images/defaultProfileImg.png';
import getUserInfo from '../Helpers/getUserInfo';
import axios from 'axios';
import formatDate from '../Helpers/formatDate';

const ProfileBanner = () => {
  const fileInput = useRef();
  const [profileImage, setProfileImage] = useState(null);
  const [birthday, setBirthday] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [profession, setProfession] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const userInfo = await getUserInfo();
      if (userInfo) {
        setProfileImage(userInfo.avatar || defaultProfileImg);
        setBirthday(userInfo.birthday || '');
        setAddress(userInfo.address || '');
        setPhone(userInfo.phoneNumber || '');
        setProfession(userInfo.job || '');
      }
    };
    fetchData();
  }, []);

  const handleImageUpload = () => {
    fileInput.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleUpdateProfile = async () => {
    const token = localStorage.getItem('token');
    const headers = {
      'Authorization': `Bearer ${token}`
    };

    const formData = new FormData();
    
    formData.append('birthday', formatDate(birthday));
    formData.append('phoneNumber', phone);
    formData.append('address', address);
    formData.append('job', profession);
    if (fileInput.current?.files[0]) {
      formData.append('avatar', fileInput.current.files[0]);
    }
    
    try {
      const response = await axios.put('http://localhost:3001/api/v1/users/update/profile', formData, {
        headers: {
          ...headers,
          'Content-Type': 'multipart/form-data'
        },
      });
      
      if (response.status === 200) {
        alert('Les informations du profil ont été mises à jour avec succès');
      } else {
        alert('Erreur lors de la mise à jour des informations du profil');
      }
    } catch (error) {
      console.error(error);
      alert('Erreur lors de la mise à jour des informations du profil');
    }
  };

  

  const handleImageDelete = async () => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer votre avatar ?')) {
      const token = localStorage.getItem('token');
      const headers = {
        'Authorization': `Bearer ${token}`
      };

      try {
        const response = await axios.get('http://localhost:3001/api/v1/users/avatar/delete', { headers });
        if (response.status === 200) {
          setProfileImage(defaultProfileImg);
        } else {
          alert('Erreur lors de la suppression de l\'avatar');
        }
      } catch (error) {
        console.error(error);
        alert('Erreur lors de la suppression de l\'avatar');
      }
    }
  };
  return (
    <div className="rounded-2xl w-1/3 max-w-md h-auto p-8 bg-white shadow-lg text-center">
      <h1 className="text-3xl font-bold mb-4 text-green-500">Modifiez votre profil</h1>

      <div className="mb-6">
        <div className="flex justify-center mb-4">
          <img src={profileImage || defaultProfileImg} className="w-32 h-32 rounded-full" alt="Profil" />
        </div>
        <div className="flex justify-center items-center">
          <FaCamera onClick={handleImageUpload} className="text-green-500 cursor-pointer mr-8" />
          <FaTimes onClick={handleImageDelete} className="text-red-500 cursor-pointer" />
          <input
            type="file"
            ref={fileInput}
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
      </div>

      <input
        type="date"
        value={birthday}
        onChange={(e) => setBirthday(e.target.value)}
        placeholder="Date de naissance"
        className="w-full p-2 rounded-none bg-transparent border-b-2 border-gray-300 focus:border-green-500 outline-none"
      />

      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Adresse"
        className="w-full p-2 rounded-none bg-transparent border-b-2 border-gray-300 focus:border-green-500 outline-none"
      />

      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Téléphone"
        className="w-full p-2 rounded-none bg-transparent border-b-2 border-gray-300 focus:border-green-500 outline-none"
      />

      <input
        type="text"
        value={profession}
        onChange={(e) => setProfession(e.target.value)}
        placeholder="Profession"
        className="w-full p-2 mb-4 rounded-none bg-transparent border-b-2 border-gray-300 focus:border-green-500 outline-none"
      />
      
      <button onClick={handleUpdateProfile} className="w-full p-2 rounded bg-gradient-to-r from-green-500 to-green-700 text-white">
        Modifier
      </button>

    </div>
  );
};

export default ProfileBanner;

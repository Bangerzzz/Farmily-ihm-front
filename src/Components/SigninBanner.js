import React, { useState } from 'react';
import iconeinscription from '../images/iconeinscription.png';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import formatDate from '../Helpers/formatDate';


const SigninBanner = () => {
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [job, setJob] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!termsAccepted) {
      setError('Veuillez cocher cette case pour pouvoir compléter votre inscription');
      return;
    }

    try {
      const formattedBirthday = formatDate(birthday);
      const formData = new FormData();
      formData.append('firstName', firstName);
      formData.append('lastName', lastName);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('birthday', formattedBirthday);
      formData.append('phoneNumber', phoneNumber);
      formData.append('address', address);
      formData.append('avatar', avatar);
      formData.append('job', job);

    const response = await axios.post('http://localhost:3001/api/v1/users/signup', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    setAvatar(file);
  };

  const handleTermsChange = (event) => {
    setTermsAccepted(event.target.checked);
    setError('');
  };

  return (
    <div className="rounded-2xl w-1/3 max-w-md h-auto p-8 bg-white shadow-lg text-center">
      <div className="flex justify-center items-center mb-4">
        <h1 className="text-3xl font-bold mb-4 text-green-500">Rejoignez-nous!</h1>
        <img src={iconeinscription} alt="welcome" className="ml-4 w-12 h-12 mt-[-20px]" />
      </div>
      <div className="flex items-center mb-2">
        <input
          className="w-full p-2 rounded-none bg-transparent border-b-2 border-gray-300 focus:border-green-500 outline-none"
          type="text"
          placeholder="Nom"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="flex items-center mb-2">
        <input
          className="w-full p-2 rounded-none bg-transparent border-b-2 border-gray-300 focus:border-green-500 outline-none"
          type="text"
          placeholder="Prenom"
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="flex items-center mb-2">
        <input
          className="w-full p-2 rounded-none bg-transparent border-b-2 border-gray-300 focus:border-green-500 outline-none"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex items-center mb-2">
        <input
          className="w-full p-2 rounded-none bg-transparent border-b-2 border-gray-300 focus:border-green-500 outline-none"
          type="password"
          placeholder="Mot de passe (8 caractères minimum)"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex items-center mb-2">
        <p className="text-gray-400">Birthday:</p>
        <input
          className="w-full p-2 rounded-none bg-transparent border-b-2 border-gray-300 focus:border-green-500 outline-none"
          type="date"
          placeholder="Date de naissance"
          onChange={(e) => setBirthday(e.target.value)}
        />
      </div>
      <div className="flex items-center mb-2">
        <input
          className="w-full p-2 rounded-none bg-transparent border-b-2 border-gray-300 focus:border-green-500 outline-none"
          type="text"
          placeholder="Numéro de téléphone"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className="flex items-center mb-2">
        <input
          className="w-full p-2 rounded-none bg-transparent border-b-2 border-gray-300 focus:border-green-500 outline-none"
          type="text"
          placeholder="Adresse"
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="flex items-center mb-2">
        <p className="text-gray-400">Avatar:</p>
        <input
          className="w-full p-2 rounded-none bg-transparent border-b-2 border-gray-300 focus:border-green-500 outline-none"
          type="file"
          accept="image/*"
          onChange={handleAvatarChange}
        />
      </div>
      <div className="flex items-center mb-2">
        <input
          className="w-full p-2 rounded-none bg-transparent border-b-2 border-gray-300 focus:border-green-500 outline-none"
          type="text"
          placeholder="Profession"
          onChange={(e) => setJob(e.target.value)}
        />
      </div>
      <button className="w-full p-2 mb-2 rounded bg-gradient-to-r from-green-500 to-green-700 text-white" onClick={handleSignup}>
        Inscription
      </button>
      <div className="flex items-center text-xs mb-6">
        <input type="checkbox" className="mr-2" onChange={handleTermsChange} />
        <p>
          En vous enregistrant, vous acceptez les modalités d'utilisation. Veuillez lire notre politique de confidentialité.
        </p>
      </div>
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      <p className="text-right text-xs font-bold">
        Vous avez un compte ?{' '}
        <Link to="/login" className="underline text-green-500">
          Connexion
        </Link>
      </p>
    </div>
  );
};

export default SigninBanner;


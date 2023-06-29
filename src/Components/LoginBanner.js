import React, { useState } from 'react';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { accountService } from '../Services/accountServices';


const LoginBanner = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null); // Add this state
  const navigate = useNavigate();

  const handleLogin = () => {
    axios.post('http://localhost:3001/api/v1/auth/signin', { email, password })
      .then(response => {
        console.log(response.data);
        accountService.saveToken(response.data.accessToken);
        navigate("/");
      })
      .catch(error => {
        console.error(error);
        setErrorMessage("Identifiants incorrects."); // Set error message on failure
      });
  };
  
  return (
    <div className="rounded-2xl w-1/3 max-w-md h-auto p-8 bg-white shadow-lg text-center">
      <h1 className="text-xl font-bold mb-4">Bonjour !</h1>
      <p className="mb-4">Connectez-vous pour découvrir toutes nos fonctionnalités</p>
      <div className="flex items-center mb-2">
        <AiOutlineMail className="mr-2 text-green-500" />
        <input
          className="w-full p-2 rounded-none bg-transparent border-b-2 border-gray-300 focus:border-green-500 outline-none"
          type="email"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="flex items-center mb-6">
        <AiOutlineLock className="mr-2 text-green-500" />
        <input
          className="w-full p-2 rounded-none bg-transparent border-b-2 border-gray-300 focus:border-green-500 outline-none"
          type="password"
          placeholder="Mot de passe"
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <a href="#" className="text-sm text-green-500 mb-6 inline-block">
        Mot de passe oublié ?
      </a>
      <button className="w-full p-2 mb-6 rounded bg-gradient-to-r from-green-500 to-green-700 text-white" onClick={handleLogin}>
        Connexion
      </button>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <p>
        Envie de nous rejoindre ?{' '}
        <Link to="/signin" className="text-green-500">
          Créer un compte
        </Link>
      </p>
    </div>
  );
};

export default LoginBanner;



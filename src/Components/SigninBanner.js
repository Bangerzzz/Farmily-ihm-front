import React from 'react';
import iconeinscription from '../images/iconeinscription.png';

const SigninBanner = () => {
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
        />
      </div>
      <div className="flex items-center mb-2">
        <input
          className="w-full p-2 rounded-none bg-transparent border-b-2 border-gray-300 focus:border-green-500 outline-none"
          type="text"
          placeholder="Prenom"
        />
      </div>
      <div className="flex items-center mb-2">
        <input
          className="w-full p-2 rounded-none bg-transparent border-b-2 border-gray-300 focus:border-green-500 outline-none"
          type="email"
          placeholder="Email"
        />
      </div>
      <div className="flex items-center mb-2">
        <input
          className="w-full p-2 rounded-none bg-transparent border-b-2 border-gray-300 focus:border-green-500 outline-none"
          type="password"
          placeholder="Mot de passe"
        />
      </div>
      <button className="w-full p-2 mb-2 rounded bg-gradient-to-r from-green-500 to-green-700 text-white">
        Inscription
      </button>
      <div className="flex items-center text-xs mb-6">
        <input
          type="checkbox"
          className="mr-2"
        />
        <p>
          En vous enregistrant, vous acceptez les modalités d'utilisation. Veuillez lire notre politique de confidentialité.
        </p>
      </div>
      <p className="text-right text-xs font-bold">
        Vous-avez un compte ?{" "}
        <a href="#" className="underline text-green-500">
          Connexion
        </a>
      </p>
    </div>
  );
};

export default SigninBanner;

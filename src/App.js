import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignInPage from "./pages/SignInPage";
import AnnonceCreationPage from "./pages/AnnonceCreationPage";
import ProfilPage from "./pages/ProfilPage";
import AuthGuard from "./Helpers/AuthGuard";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignInPage />} />
        <Route path="/annonce-creation" element={<AnnonceCreationPage />} />
        <Route path="/profil" element={<ProfilPage />}/>
      </Routes>
    </Router>
  );
}

export default App;

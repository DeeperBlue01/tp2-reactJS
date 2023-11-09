import React, { useState } from 'react';
import BowserImage from '../public/images/bowser.webp'; 


const LoginPage = ({ onLogin }) => {
  return (
    <div className="bg-black h-screen  w-screen flex flex-col justify-center items-center">
    
        <img
          src={BowserImage}
          alt="Bowser"
          className="mb-4 max-w-full max-h-32"
        />
        <h1 className="text-white text-4xl font-bold mb-8">Hey pas si vite ! Vous n'êtes pas connecté !</h1>
        <button
          className="bg-slate-300 text-black py-2 px-4 rounded"
          onClick={() => onLogin()}
        >
          Se connecter
        </button>
    </div>
  );
};

export default LoginPage;


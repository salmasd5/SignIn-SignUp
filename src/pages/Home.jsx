import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500 text-white">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to Our ID Scanning App</h1>
        <p className="text-lg mb-8">
          Our application simplifies the process of extracting information from scanned IDs. 
          Whether you re verifying user identities or automating data collection, 
          our tool is fast, reliable, and secure.
        </p>
        <p className="text-lg mb-8">
          Easily scan IDs to extract names, dates of birth, addresses, and other key details 
          with just a few clicks. Start now and experience the efficiency!
        </p>
        <div className="space-x-4">
          <Link
            to="/register"
            className="bg-white text-green-500 px-6 py-2 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

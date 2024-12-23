import React from 'react';
import {Link} from 'react-router-dom'
const PageNotFound = () => {
  return (
    <div className="relative flex items-center mt-0 rounded-3xl justify-center h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute w-[500px] h-[500px] bg-blue-300 rounded-full opacity-20 animate-pulse blur-xl -top-10 -left-20"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-300 rounded-full opacity-20 animate-pulse blur-xl top-20 left-40"></div>
      <div className="absolute w-[600px] h-[600px] bg-pink-300 rounded-full opacity-20 animate-pulse blur-xl bottom-10 right-10"></div>

      {/* 404 Content */}
      <div className="text-center text-white">
        <h1 className="text-8xl font-bold tracking-widest drop-shadow-lg">404</h1>
        <p className="mt-4 text-2xl font-medium">
          Oops! The page you're looking for doesn't exist.
        </p>
       <Link to='/'> <button
          className="mt-8 px-6 py-3 bg-[#232323] text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl hover:bg-white hover:text-black transition-all duration-300"
         
        >
          Go Back to Home
        </button></Link>
      </div>
    </div>
  );
};

export default PageNotFound;

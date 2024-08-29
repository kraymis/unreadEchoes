import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import imgUnread from '../assets/theunreadechoes.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex flex-col  md:flex-row justify-between items-center py-4 px-4 md:px-16 mb-8 bg-white ">
      {/* Logo and Title */}
      <h1 className="text-xl font-bold md:w-[20%] md:text-left w-full ">
       <Link to="/">
        <div className="w-16 h-16 md:w-24 md:h-24  overflow-hidden flex justify-center items-center">
            <img src={imgUnread} alt="The Unread Echoes" className="w-[95%] h-[95%] object-cover" />
        </div>
        </Link>
      </h1>

      {/* Hamburger Menu Icon */}
      <div className="md:hidden absolute right-4 top-4">
        <button onClick={() => setIsOpen(!isOpen)} className="text-3xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navigation Links */}
      <div className={`md:flex md:w-[60%] md:items-center md:justify-center md:space-x-6 ${isOpen ? 'block z-50' : 'hidden'} absolute top-full left-0 w-full bg-white md:relative md:bg-transparent `}>
        <div className="flex flex-col text-gray-800 md:flex-row md:space-x-6 justify-center items-center py-4 md:py-0 w-full shadow-md rounded-xl md:shadow-none md:w-auto">
          <Link to="/" className="block md:inline-block text-lg py-2 px-4">
            Archive
          </Link>
          <Link to="/about" className="block md:inline-block text-lg py-2 px-4">
            About
          </Link>
          <Link to="/terms" className="block md:inline-block text-lg py-2 px-4">
            Terms
          </Link>
          <Link to="/submit">
          <button className="block py-2 px-4 font-bold text-white bg-black md:hidden">
            Leave an Echo
          </button>
        </Link>
        </div>
      </div>

      {/* "Leave an Echo" Button */}
      <div className="w-full md:w-[20%] hidden md:flex md:justify-center  mt-4 md:mt-0">
        <Link to="/submit">
          <button className="py-4 px-8 font-bold text-white bg-black">
            Leave an Echo
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

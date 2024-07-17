import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="bg-gradient-to-b from-green-50 to-green-100">
      <header className="">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <Link to="#" title="" className="flex">
                <img className="w-auto h-32" src="logo2.png" alt="Logo" />
              </Link>
            </div>

            <button
              type="button"
              className="inline-flex p-1 text-black transition-all duration-200 border border-black lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            >
              <svg
                className="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>

              <svg
                className="hidden w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
              <Link
                to="/"
                className={`text-base ${isActive('/') ? 'text-blue-500 font-bold' : 'text-black'} transition-all duration-200 hover:text-blue-500`}
                title=""
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-base ${isActive('/about') ? 'text-blue-500 font-bold' : 'text-black'} transition-all duration-200 hover:text-blue-500`}
                title=""
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`text-base ${isActive('/contact') ? 'text-blue-500 font-bold' : 'text-black'} transition-all duration-200 hover:text-blue-500`}
                title=""
              >
                Contact
              </Link>

              <div className="w-px h-5 bg-black/20"></div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;

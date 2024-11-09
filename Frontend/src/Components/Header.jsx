import React, { useState } from 'react';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-lg h-[77px]">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center relative">
        {/* Logo with Larger Size and Negative Margin to Overlap */}
        <div className="flex items-center absolute top-10 left-0 transform -translate-y-16">
          <img
            src="https://storage.googleapis.com/a1aa/image/IT9jNovNeERGc6RucM4aIkFLW18RaR7JfKJtrNpNaJ0yrhuTA.jpg"
            alt="Proviz Logo"
            className="h-40 object-contain"
          />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-4xl font-bold text-white"
          onClick={handleMenuToggle}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        {/* Navbar Links */}
        <nav className={`flex-1 md:flex items-center justify-center space-x-8 ${isMenuOpen ? 'backdrop-blur-md bg-opacity-60 bg-black' : ''}`}>
          <ul className="flex space-x-8 text-sm md:text-lg font-semibold">
            <li>
              <a href="/" className="hover:text-blue-600 transition duration-300 font-bold">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-600 transition duration-300 font-bold">
                About
              </a>
            </li>
            <li>
              <a href="/courses" className="hover:text-blue-600 transition duration-300 font-bold">
                Courses
              </a>
            </li>
            <li>
              <a href="/signup" className="hover:text-blue-600 transition duration-300 font-bold">
                Sign Up
              </a>
            </li>
            <li>
              <a href="/testimonials" className="hover:text-blue-600 transition duration-300 font-bold">
                Testimonials
              </a>
            </li>
            <li>
              <a href="/adminpanel" className="hover:text-blue-600 transition duration-300 font-bold">
                Admin Panel
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Backdrop Blur for Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md z-40">
          <div className="flex justify-end p-6">
            <button onClick={handleMenuToggle} className="text-white text-4xl font-bold">
              ✕
            </button>
          </div>
          <div className="flex justify-center items-center">
            <ul className="text-center text-white space-y-6 text-3xl font-semibold">
              <li>
                <a href="/" className="hover:text-blue-500 transition duration-300 font-bold">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-500 transition duration-300 font-bold">
                  About
                </a>
              </li>
              <li>
                <a href="/courses" className="hover:text-blue-500 transition duration-300 font-bold">
                  Courses
                </a>
              </li>
              <li>
                <a href="/signup" className="hover:text-blue-500 transition duration-300 font-bold">
                  Sign Up
                </a>
              </li>
              <li>
                <a href="/testimonials" className="hover:text-blue-500 transition duration-300 font-bold">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

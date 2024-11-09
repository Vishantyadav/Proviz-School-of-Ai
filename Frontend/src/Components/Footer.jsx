import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
        {/* Footer Links */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-blue-500 transition duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-500 transition duration-300">
                About
              </a>
            </li>
            <li>
              <a href="/courses" className="hover:text-blue-500 transition duration-300">
                Courses
              </a>
            </li>
            <li>
              <a href="/signup" className="hover:text-blue-500 transition duration-300">
                Sign Up
              </a>
            </li>
            <li>
              <a href="/testimonals" className="hover:text-blue-500 transition duration-300">
                Testimonials
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-white">Follow Us</h4>
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 transition duration-300 text-3xl"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600 transition duration-300 text-3xl"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition duration-300 text-3xl"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        {/* Email Query Form */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-white">Have a Query?</h4>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded bg-gray-800 border border-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your query"
              className="p-2 rounded bg-gray-800 border border-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Copyright and Credits */}
      <div className="text-center mt-8 text-sm text-gray-400">
        &copy; 2024 Proviz School of AI. All rights reserved.
        <div className="mt-2">
          <span className="text-gray-500">Designed and Developed by Vishant Yadav</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

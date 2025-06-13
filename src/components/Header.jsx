import React, { useState } from "react";
import logo from "../assets/image 1 (3).png";

const navItems = [
  "Как это работает",
  "Инструкции",
  "Продукты",
  "База знаний",
  "О нас",
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm py-4 px-6 flex items-center justify-between">
      {/* Logo and Brand */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="1C-Товары" className="w-6 h-6" />
        <span className="font-semibold text-lg text-gray-800">1С-Товары</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 text-sm text-gray-700">
        {navItems.map((item, idx) => (
          <a
            key={idx}
            href="#"
            className="relative hover:text-green-600 transition duration-200"
          >
            {item}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-500 transition-all duration-300 hover:w-full"></span>
          </a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex items-center px-2 py-1 border rounded text-gray-700 border-gray-300"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Открыть меню"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Login Button */}
      <a
        href="#"
        className="ml-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm transition duration-200 hidden md:inline-block"
      >
        Вход
      </a>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden z-50">
          <nav className="flex flex-col space-y-2 p-4 text-gray-700">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="hover:text-green-600 transition duration-200 py-2"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm transition duration-200 mt-2"
              onClick={() => setMenuOpen(false)}
            >
              Вход
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

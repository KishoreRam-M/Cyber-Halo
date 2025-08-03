import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav
      className="w-full px-6 md:px-20 py-4 flex items-center justify-between shadow-md"
      style={{ backgroundColor: '#2C2C2E' }} // Gunmetal Gray
    >
      {/* Logo */}
      <div className="text-2xl font-bold text-[#FFD700]">Cyber Halo</div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-8 text-[#F4F4F4] font-medium">
        <li>
          <button
            onClick={() => navigate('/login')}
            className="hover:text-[#D4AF37] transition duration-200 bg-transparent"
          >
            Login
          </button>
        </li>
        <li>
          <button
            onClick={() => navigate('/signup')}
            className="hover:text-[#D4AF37] transition duration-200 bg-transparent"
          >
            SignUp
          </button>
        </li>
        <li>
          <button
            onClick={() => navigate('/')}
            className="hover:text-[#D4AF37] transition duration-200 bg-transparent"
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => navigate('/upload')}
            className="hover:text-[#D4AF37] transition duration-200 bg-transparent"
          >
            Analysis
          </button>
        </li>
      </ul>

      {/* CTA Button */}
      <div className="hidden md:block">
        <button
          className="px-5 py-2 rounded-full font-semibold text-[#0F0F0F] shadow-md transition duration-300"
          style={{ backgroundColor: '#FFD700' }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#D4AF37')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#FFD700')}
          onClick={() => navigate('/signup')}
        >
          Get Started
        </button>
      </div>

      {/* Hamburger */}
      <div className="md:hidden text-[#FFD700]" onClick={() => setIsOpen(!isOpen)}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#2C2C2E] px-6 py-4 text-[#F4F4F4] flex flex-col gap-4 md:hidden z-50">
          <button
            onClick={() => navigate('/login')}
            className="text-left hover:text-[#D4AF37]"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="text-left hover:text-[#D4AF37]"
          >
            SignUp
          </button>
          <button
            onClick={() => navigate('/about')}
            className="text-left hover:text-[#D4AF37]"
          >
            About
          </button>
          <button
            onClick={() => navigate('/upload')}
            className="text-left hover:text-[#D4AF37]"
          >
            analysis
          </button>
          <button
            className="w-full mt-2 px-5 py-2 rounded-full font-semibold text-[#0F0F0F]"
            style={{ backgroundColor: '#FFD700' }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#D4AF37')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#FFD700')}
            onClick={() => navigate('/signup')}
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

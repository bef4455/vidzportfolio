import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '/B4LAB.jpg';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo uniquement, sans texte "B4_LAB" */}
          <a href="#" className="flex items-center">
            <img src={logo} alt="B4_LAB logo" className="h-12 w-auto" /> {/* Adjust height/width as needed */}
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => (window.location.href = "#projects")}
              className="box text-gray-300 font-semibold"
            >
              Work
            </button>
            <button
              onClick={() => (window.location.href = "#contact")}
              className="box text-gray-300 font-semibold"
            >
              Contact
            </button>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => (window.location.href = "#projects")}
                className="box text-gray-300 font-semibold"
              >
                Projects
              </button>
              <button
                onClick={() => (window.location.href = "#contact")}
                className="box text-gray-300 font-semibold"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
      <style jsx="true">{`
        .box {
          width: 140px;
          height: auto;
          float: left;
          transition: 0.5s linear;
          position: relative;
          display: block;
          overflow: hidden;
          padding: 15px;
          text-align: center;
          margin: 0 5px;
          background: transparent;
          text-transform: uppercase;
          font-weight: 900;
        }

        .box:before {
          position: absolute;
          content: '';
          left: 0;
          bottom: 0;
          height: 4px;
          width: 100%;
          border-bottom: 4px solid transparent;
          border-left: 4px solid transparent;
          box-sizing: border-box;
          transform: translateX(100%);
        }

        .box:after {
          position: absolute;
          content: '';
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          border-top: 4px solid transparent;
          border-right: 4px solid transparent;
          box-sizing: border-box;
          transform: translateX(-100%);
        }

        .box:hover {
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
        }

        .box:hover:before {
          border-color: #ffffff;
          height: 100%;
          transform: translateX(0);
          transition: 0.3s transform linear, 0.3s height linear 0.3s;
        }

        .box:hover:after {
          border-color: #ffffff;
          height: 100%;
          transform: translateX(0);
          transition: 0.3s transform linear, 0.3s height linear 0.5s;
        }
      `}</style>
    </header>
  );
}

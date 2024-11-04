import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar({ isMenuOpen, setIsMenuOpen }) {
  const navigate = useNavigate();
  const [navigateTo, setNavigateTo] = useState<string | null>(null);

  const handleProjectsClick = () => {
    setNavigateTo('projects');
    setIsMenuOpen(false);
    navigate('/');
  };

  const handleContactClick = () => {
    setNavigateTo('contact');
    setIsMenuOpen(false);
    navigate('/');
  };

  // Effectue le défilement une fois la navigation terminée
  if (navigateTo) {
    window.setTimeout(() => {
      window.location.hash = `#${navigateTo}`;
      setNavigateTo(null);
    }, 100);
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-[200] bg-gradient-to-r from-black via-gray-800 to-black backdrop-blur-sm shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-xl md:text-2xl font-bold flex items-center space-x-2">
            <img src="/logo.svg" alt="B4_LAB logo" className="h-8 md:h-10 w-auto" />
            <span className="hover:text-blue-500 transition-colors">B4_LAB</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-[300]" // S'assurer que le bouton est bien visible
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={handleProjectsClick}
              className="relative text-gray-300 font-semibold transition-transform duration-300 transform hover:-translate-y-1 hover:bg-blue-600 rounded-lg px-4 py-2"
            >
              My Projects
            </button>
            <button
              onClick={handleContactClick}
              className="relative text-gray-300 font-semibold transition-transform duration-300 transform hover:-translate-y-1 hover:bg-blue-600 rounded-lg px-4 py-2"
            >
              CONTACT
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 w-full h-full z-[250] bg-black opacity-95 backdrop-blur-lg px-4 pt-20 pb-4 space-y-6 transition-opacity duration-300"
            style={{ backdropFilter: 'blur(10px)' }} // Pour renforcer l'effet de flou
          >
            <button
              onClick={handleProjectsClick}
              className="block w-full text-left text-lg text-gray-300 font-semibold transition-transform duration-300 transform hover:text-white hover:bg-blue-600 p-4 rounded-lg"
            >
              My Projects
            </button>
            <button
              onClick={handleContactClick}
              className="block w-full text-left text-lg text-gray-300 font-semibold transition-transform duration-300 transform hover:text-white hover:bg-blue-600 p-4 rounded-lg"
            >
              CONTACT
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

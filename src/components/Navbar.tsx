import { Menu, X } from 'lucide-react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  setScrollTarget: (target: string) => void;
}

function Navbar({ isMenuOpen, setIsMenuOpen, setScrollTarget }: NavbarProps) {

  interface HandleNavigationClick {
    (target: string): void;
  }

  const handleNavigationClick: HandleNavigationClick = (target) => {
    setIsMenuOpen(false);
    console.log(`Setting scrollTarget to: ${target}`);
    setScrollTarget(target);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[200] bg-gradient-to-r from-black via-gray-800 to-black backdrop-blur-sm shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <div
            onClick={() => handleNavigationClick('home')}
            className="text-xl md:text-2xl font-bold flex items-center space-x-2 cursor-pointer"
          >
            <img src="/logo.svg" alt="B4_LAB logo" className="h-8 md:h-10 w-auto" />
            <span className="hover:text-blue-500 transition-colors">B4_LAB</span>
          </div>

          <button
            className="md:hidden z-[210]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavigationClick('projects')}
              className="relative text-gray-300 font-semibold transition-transform duration-300 transform hover:-translate-y-1 hover:bg-blue-600 rounded-lg px-4 py-2"
            >
              WORK
            </button>
            <button
              onClick={() => handleNavigationClick('contact')}
              className="relative text-gray-300 font-semibold transition-transform duration-300 transform hover:-translate-y-1 hover:bg-blue-600 rounded-lg px-4 py-2"
            >
              CONTACT
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden fixed top-0 left-0 w-full h-full z-[210] bg-black/80 backdrop-blur-md px-4 pt-20 pb-4 space-y-6">
            <button
              onClick={() => handleNavigationClick('projects')}
              className="block w-full text-left text-lg text-gray-300 font-semibold transition-transform duration-300 transform hover:text-white hover:bg-blue-600 p-4 rounded-lg"
            >
              WORK
            </button>
            <button
              onClick={() => handleNavigationClick('contact')}
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

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-sm py-5">
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-white text-shadow">
            <Leaf size={32} />
            <span className="text-xl font-semibold">Farmers India Market</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {['/', '/about', '/blog', '/contact'].map((path, idx) => (
                <li key={path}>
                  <Link
                    to={path}
                    className={`font-medium text-shadow transition-colors ${
                      location.pathname === path ? 'text-[#a1f7b9]' : 'text-white hover:text-[#a1f7b9]'
                    }`}
                  >
                    {['Home', 'About', 'Blog', 'Contact'][idx]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-[#a1f7b9] transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-y-0 right-0 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <button 
            className="absolute top-5 right-5 text-gray-700 hover:text-[#2a6a38]"
            onClick={toggleMenu}
          >
            <X size={24} />
          </button>

          <nav className="mt-12">
            <ul className="space-y-6">
              {['/', '/about', '/blog', '/contact'].map((path, idx) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="block font-medium text-lg text-gray-700 hover:text-[#2a6a38] transition-colors"
                  >
                    {['Home', 'About', 'Blog', 'Contact'][idx]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-8">
            <Link to="/contact" className="btn-primary w-full block text-center">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

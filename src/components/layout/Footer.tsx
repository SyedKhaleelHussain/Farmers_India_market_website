import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, Linkedin, Github, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a291c] text-white">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Leaf size={28} />
              <span className="text-xl font-semibold">Farmers India Market</span>
            </Link>
            <p className="text-gray-300 mb-6">
              Connecting plant lovers with quality products, expert advice, and a vibrant community.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/syed-khaleel-hussain"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#f8c05a] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/SyedKhaleelHussain"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#f8c05a] transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href="tel:+12482529591"
                className="text-white hover:text-[#f8c05a] transition-colors"
                aria-label="Phone Number"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={20} className="mt-1 flex-shrink-0" />
                <a
                  href="mailto:khaleelhussainprof@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  khaleelhussainprof@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="flex-shrink-0" />
                <a
                  href="tel:+12482529591"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +1 (248) 252-9591
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin size={20} className="flex-shrink-0" />
                <a
                  href="https://www.linkedin.com/in/syed-khaleel-hussain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  LinkedIn Profile
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Github size={20} className="flex-shrink-0" />
                <a
                  href="https://github.com/SyedKhaleelHussain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  GitHub Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Subscribe to Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Stay updated with our latest news and offers.
            </p>
            <form
              className="flex"
              onSubmit={(e) => {
                e.preventDefault();
                // TODO: Handle form submission logic here
              }}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none text-gray-800"
              />
              <button
                type="submit"
                className="bg-[#f8c05a] text-[#1a291c] px-4 py-2 rounded-r-lg hover:bg-[#f9ca75] transition-colors"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Farmers India Market. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

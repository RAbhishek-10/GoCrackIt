import { Link } from 'react-router-dom';
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-bold">GoCrackIt</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your ultimate platform for government exam preparation. Ace your tests with our comprehensive mock series.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/test-series" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Test Series
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Exams */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Exam Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/test-series/ssc" className="text-gray-400 hover:text-primary-400 transition-colors">
                  SSC Exams
                </Link>
              </li>
              <li>
                <Link to="/test-series/banking" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Banking Exams
                </Link>
              </li>
              <li>
                <Link to="/test-series/railways" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Railway Exams
                </Link>
              </li>
              <li>
                <Link to="/test-series/state-psc" className="text-gray-400 hover:text-primary-400 transition-colors">
                  State PSC Exams
                </Link>
              </li>
              <li>
                <Link to="/test-series/teaching" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Teaching Exams
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">123 Education Street, Knowledge City, India - 110001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary-400 flex-shrink-0" />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary-400 flex-shrink-0" />
                <span className="text-gray-400">support@gocrackit.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {currentYear} GoCrackIt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
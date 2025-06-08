import { Link } from 'react-router-dom';
import { Shield, Check } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-[#FF7847] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="font-poppins font-semibold text-xl text-gray-900">Conexa</span>
            </Link>
            <p className="text-gray-600 font-inter mb-6 max-w-md">
              Transform everyday life in apartment buildings and their surrounding neighbourhoods. Local life, simplified.
            </p>
            
            {/* GDPR Compliance Badge */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center bg-green-50 border border-green-200 rounded-lg px-3 py-2">
                <Shield className="w-4 h-4 text-green-600 mr-2" />
                <span className="text-sm font-inter text-green-700">GDPR Compliant</span>
                <Check className="w-4 h-4 text-green-600 ml-1" />
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-[#FF7847] transition-colors"
                aria-label="Follow us on Twitter"
              >
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-[#FF7847] transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-poppins font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link to="/modules" className="text-gray-600 hover:text-[#FF7847] transition-colors font-inter">Features</Link></li>
              <li><Link to="/how-it-works" className="text-gray-600 hover:text-[#FF7847] transition-colors font-inter">How It Works</Link></li>
              <li><Link to="/benefits" className="text-gray-600 hover:text-[#FF7847] transition-colors font-inter">Benefits</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-[#FF7847] transition-colors font-inter">Pricing</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-poppins font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-600 hover:text-[#FF7847] transition-colors font-inter">About</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-[#FF7847] transition-colors font-inter">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-[#FF7847] transition-colors font-inter">Contact</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-[#FF7847] transition-colors font-inter">FAQ</Link></li>
              <li><Link to="/languages" className="text-gray-600 hover:text-[#FF7847] transition-colors font-inter">Languages</Link></li>
            </ul>
          </div>
        </div>

        {/* Legal Links and Copyright */}
        <div className="border-t border-gray-100 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start space-x-6">
              <Link 
                to="/privacy-policy" 
                className="text-gray-600 hover:text-[#FF7847] transition-colors font-inter text-sm"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-of-service" 
                className="text-gray-600 hover:text-[#FF7847] transition-colors font-inter text-sm"
              >
                Terms of Service
              </Link>
              <Link 
                to="/gdpr-compliance" 
                className="text-gray-600 hover:text-[#FF7847] transition-colors font-inter text-sm"
              >
                GDPR Compliance
              </Link>
              <Link 
                to="/cookie-policy" 
                className="text-gray-600 hover:text-[#FF7847] transition-colors font-inter text-sm"
              >
                Cookie Policy
              </Link>
            </div>
            
            <p className="text-gray-600 font-inter text-sm text-center md:text-right">
              © 2024 Conexa. All rights reserved. | Local life, simplified.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
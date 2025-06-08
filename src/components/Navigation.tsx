declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Features', href: '/modules' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Benefits', href: '/benefits' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
    { label: 'Languages', href: '/languages' },
  ];

  const isActive = (href: string) => location.pathname === href;

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.defer = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'en,hr,de,fr,tr,no,pt,fi,el,es,it,ru',
          autoDisplay: false,
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
        });

        // Hide default Google elements
        const css = `
          .goog-logo-link, .goog-te-gadget span, .goog-te-banner-frame { display:none!important }
          body { top:0!important }
          .goog-te-combo { position: absolute; left: -9999px; opacity: 0; }
        `;
        const styleElement = document.createElement('style');
        styleElement.innerHTML = css;
        document.head.appendChild(styleElement);

        // Auto-switch based on browser or location on first visit
        const languages = ['en','hr','de','fr','tr','no','pt','fi','el','es','it','ru'];
        let userLang = (navigator.language || '').substring(0, 2);
        const first = !localStorage.getItem('conexaLangSet');

        const detectByLocation = async () => {
          try {
            const res = await fetch('https://ipapi.co/json/');
            const data = await res.json();
            const map: Record<string, string> = {
              HR: 'hr',
              DE: 'de',
              FR: 'fr',
              TR: 'tr',
              NO: 'no',
              PT: 'pt',
              FI: 'fi',
              GR: 'el',
              ES: 'es',
              IT: 'it',
              RU: 'ru'
            };
            if (data?.country_code && map[data.country_code]) {
              userLang = map[data.country_code];
            }
          } catch (err) {
            console.error('Geo detection failed', err);
          }

          if (first && languages.includes(userLang)) {
            translateTo(userLang);
            localStorage.setItem('conexaLangSet', '1');
          }
        };

        detectByLocation();
      };
    };

    const translateTo = (lang: string) => {
      const sel = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (sel && sel.value !== lang) {
        sel.value = lang;
        sel.dispatchEvent(new Event('change'));
      }
    };

    // React to manual change
    const handleLanguageChange = (e: Event) => {
      const target = e.target as HTMLSelectElement;
      if (target.id === 'lang-select' || target.id === 'lang-select-mobile') {
        translateTo(target.value);
      }
    };

    document.addEventListener('change', handleLanguageChange);

    if (!window.google?.translate?.TranslateElement) {
      addGoogleTranslateScript();
    }

    return () => {
      document.removeEventListener('change', handleLanguageChange);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm translate-y-0' 
        : location.pathname === '/' 
          ? 'bg-transparent translate-y-0' 
          : 'bg-white/95 backdrop-blur-sm border-b border-gray-100 translate-y-0'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#FF7847] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="font-poppins font-semibold text-xl text-gray-900">Conexa</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`font-inter text-sm transition-colors ${
                  isActive(item.href)
                    ? 'text-[#FF7847] font-medium'
                    : 'text-gray-600 hover:text-[#FF7847]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button and Language Selector */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Language Selector */}
            <select 
              id="lang-select" 
              aria-label="Select site language"
              className="h-9 px-3 text-sm font-inter text-gray-700 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-[#FF7847] focus:border-transparent transition-all"
            >
              <option value="en">English</option>
              <option value="hr">Croatian</option>
              <option value="de">German</option>
              <option value="fr">French</option>
              <option value="tr">Turkish</option>
              <option value="no">Norwegian</option>
              <option value="pt">Portuguese</option>
              <option value="fi">Finnish</option>
              <option value="el">Greek</option>
              <option value="es">Spanish</option>
              <option value="it">Italian</option>
              <option value="ru">Russian</option>
            </select>

            <Button 
              className="bg-[#FF7847] hover:bg-orange-600 font-inter text-sm transition-all hover:scale-105 shadow-sm"
              asChild
              aria-label="Start using Conexa for free today"
            >
              <a 
                href="https://play.google.com/store/apps/details?id=dreamteamstudio.online.conexa&hl=en-US&ah=gz9G-WCHhz5UVkJh502cYJIcG4E"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Free Today
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 bg-white/95 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`font-inter text-sm transition-colors py-2 ${
                    isActive(item.href)
                      ? 'text-[#FF7847] font-medium'
                      : 'text-gray-600'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100">
                {/* Language Selector for Mobile */}
                <select 
                  id="lang-select-mobile" 
                  aria-label="Select site language"
                  className="h-12 px-3 text-sm font-inter text-gray-700 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-[#FF7847] focus:border-transparent transition-all"
                >
                  <option value="en">English</option>
                  <option value="hr">Croatian</option>
                  <option value="de">German</option>
                  <option value="fr">French</option>
                  <option value="tr">Turkish</option>
                  <option value="no">Norwegian</option>
                  <option value="pt">Portuguese</option>
                  <option value="fi">Finnish</option>
                  <option value="el">Greek</option>
                  <option value="es">Spanish</option>
                  <option value="it">Italian</option>
                  <option value="ru">Russian</option>
                </select>

                <Button 
                  className="bg-[#FF7847] hover:bg-orange-600 font-inter text-sm h-12 w-full"
                  asChild
                  aria-label="Start using Conexa for free today"
                >
                  <a 
                    href="https://play.google.com/store/apps/details?id=dreamteamstudio.online.conexa&hl=en-US&ah=gz9G-WCHhz5UVkJh502cYJIcG4E"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Start Free Today
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
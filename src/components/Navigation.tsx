import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

interface NavigationProps {
  offset?: number;
}

const Navigation = ({ offset = 0 }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const { t } = useTranslation();

  const navItems = [
    { label: t('nav.features'), href: '/modules' },
    { label: t('nav.how_it_works'), href: '/how-it-works' },
    { label: t('nav.benefits'), href: '/benefits' },
    { label: t('nav.pricing'), href: '/pricing' },
    { label: t('nav.blog'), href: '/blog' },
    { label: t('nav.contact'), href: '/contact' },
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

  const ctaLabel = t('nav.cta');

  return (
    <nav
      style={{ top: offset + 100 }}
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm translate-y-0'
          : location.pathname === '/'
            ? 'bg-transparent translate-y-0'
            : 'bg-white/95 backdrop-blur-sm border-b border-gray-100 translate-y-0'
      }`}
    >
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

          {/* CTA Button and Language */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSelector />
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
                {ctaLabel}
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
                <LanguageSelector />
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
                    {ctaLabel}
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
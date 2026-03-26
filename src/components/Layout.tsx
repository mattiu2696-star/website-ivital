import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronRight, HeartPulse, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Page, NavItem } from '../types';
import { useLanguage } from '../i18n/LanguageContext';

const pageToPath: Record<Page, string> = {
  home: '/',
  about: '/about',
  projects: '/projects',
  ecosystem: '/ecosystem',
  contact: '/contact',
};

interface NavbarProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

const navIds: Page[] = ['home', 'about', 'ecosystem', 'projects'];

export const Navbar = ({ currentPage, onPageChange }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  const navItems: NavItem[] = navIds.map(id => ({
    label: t.nav[id],
    id,
  }));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/"
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-ivital-pink to-ivital-blue rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
            <HeartPulse className="w-6 h-6" />
          </div>
          <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-ivital-pink to-ivital-blue bg-clip-text text-transparent">
            iVital Technology
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={pageToPath[item.id]}
              className={`text-sm font-semibold transition-colors hover:text-ivital-pink ${
                currentPage === item.id ? 'text-ivital-pink' : 'text-ivital-dark/70'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 ml-2">
            <button
              onClick={() => setLocale(locale === 'vi' ? 'en' : 'vi')}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-bold text-ivital-dark/70 hover:text-ivital-pink hover:bg-ivital-pink/5 transition-colors"
            >
              <Globe size={15} />
              {locale === 'vi' ? 'EN' : 'VI'}
            </button>
            <Link 
              to="/contact"
              className="btn-primary flex items-center gap-2 text-sm px-5 py-2.5"
            >
              {t.nav.contact} <ChevronRight size={16} />
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-ivital-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl lg:hidden border-t border-gray-100"
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={pageToPath[item.id]}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-semibold text-left py-2 ${
                    currentPage === item.id ? 'text-ivital-pink' : 'text-ivital-dark'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary w-full mt-4 text-center"
              >
                {t.nav.contactCta}
              </Link>
              <button
                onClick={() => { setLocale(locale === 'vi' ? 'en' : 'vi'); setIsMobileMenuOpen(false); }}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full border border-gray-200 text-sm font-bold text-ivital-dark"
              >
                <Globe size={16} />
                {locale === 'vi' ? 'English' : 'Tiếng Việt'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = ({ onPageChange }: { onPageChange: (page: Page) => void }) => {
  const { t } = useLanguage();
  const navItems: NavItem[] = navIds.map(id => ({
    label: t.nav[id],
    id,
  }));

  return (
    <footer className="bg-ivital-dark text-white pt-20 pb-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-ivital-pink to-ivital-blue rounded-xl flex items-center justify-center text-white">
              <HeartPulse className="w-6 h-6" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-ivital-pink to-ivital-blue bg-clip-text text-transparent">
              iVital Technology
            </span>
          </div>
          <p className="text-gray-400 leading-relaxed">
            {t.footer.description}
          </p>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">{t.footer.quickLinks}</h4>
          <ul className="space-y-4 text-gray-400">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link 
                  to={pageToPath[item.id]}
                  className="hover:text-ivital-pink transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">{t.footer.services}</h4>
          <ul className="space-y-4 text-gray-400">
            <li><Link to="/ivital-care" className="hover:text-ivital-pink transition-colors">iVital Care</Link></li>
            <li><button className="hover:text-ivital-pink transition-colors text-left">iVital AI</button></li>
            <li><button className="hover:text-ivital-pink transition-colors text-left">iVital Lab</button></li>
            <li><button className="hover:text-ivital-pink transition-colors text-left">iVital BP</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">{t.footer.contactTitle}</h4>
          <ul className="space-y-4 text-gray-400">
            <li>Số 3A, Tổ 3 Cụm Kiến Thiết, P. Thanh Xuân, Hà Nội</li>
            <li>contact@ivital.vn</li>
            <li>+84 923 266 979</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
        <p>© 2026 iVital Technology. All rights reserved.</p>
        <div className="flex gap-8">
          <button className="hover:text-white transition-colors">{t.footer.terms}</button>
          <button className="hover:text-white transition-colors">{t.footer.privacy}</button>
        </div>
      </div>
    </footer>
  );
};

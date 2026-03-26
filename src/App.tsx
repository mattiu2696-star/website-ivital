import { useEffect, useMemo } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Navbar, Footer } from './components/Layout';
import { Home } from './components/Home';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Ecosystem } from './components/Ecosystem';
import { Contact } from './components/Contact';
import { NotFound } from './components/NotFound';
import { Page } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { LanguageProvider } from './i18n/LanguageContext';

const pageToPath: Record<Page, string> = {
  home: '/',
  about: '/about',
  projects: '/projects',
  ecosystem: '/ecosystem',
  contact: '/contact',
};

const pathToPage: Record<string, Page> = {
  '/': 'home',
  '/about': 'about',
  '/projects': 'projects',
  '/ecosystem': 'ecosystem',
  '/contact': 'contact',
};

const heartColors = ['#FF6B9D', '#4A90E2', '#a855f7', '#f472b6', '#60a5fa'];

function FloatingHearts() {
  const hearts = useMemo(() => 
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      size: 14 + Math.random() * 30,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 10 + Math.random() * 12,
      color: heartColors[i % heartColors.length],
      opacity: 0.06 + Math.random() * 0.1,
      drift: -30 + Math.random() * 60,
    })),
  []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          className="absolute"
          style={{ left: `${h.left}%`, bottom: '-5%' }}
          animate={{
            y: [0, -(typeof window !== 'undefined' ? window.innerHeight + 100 : 1000)],
            x: [0, h.drift],
            rotate: [0, h.drift > 0 ? 20 : -20, 0],
            scale: [0.6, 1, 0.8],
          }}
          transition={{
            duration: h.duration,
            delay: h.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg width={h.size} height={h.size} viewBox="0 0 24 24" fill={h.color} opacity={h.opacity}>
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = pathToPage[location.pathname] || 'home';

  const onPageChange = (page: Page) => {
    navigate(pageToPath[page]);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <FloatingHearts />
      <Navbar currentPage={currentPage} onPageChange={onPageChange} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home onPageChange={onPageChange} />} />
              <Route path="/about" element={<About onPageChange={onPageChange} />} />
              <Route path="/projects" element={<Projects onPageChange={onPageChange} />} />
              <Route path="/ecosystem" element={<Ecosystem onPageChange={onPageChange} />} />
              <Route path="/contact" element={<Contact onPageChange={onPageChange} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onPageChange={onPageChange} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </BrowserRouter>
  );
}

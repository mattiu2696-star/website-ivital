import { useState, useEffect, FC } from 'react';
import { Navbar, Footer } from './components/Layout';
import { Home } from './components/Home';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Ecosystem } from './components/Ecosystem';
import { Contact } from './components/Contact';
import { Page } from './types';
import { motion, AnimatePresence } from 'motion/react';

const pageComponents: Record<Page, FC<{ onPageChange: (page: Page) => void }>> = {
  home: Home,
  about: About,
  projects: Projects,
  ecosystem: Ecosystem,
  contact: Contact,
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const PageComponent = pageComponents[currentPage];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <PageComponent onPageChange={setCurrentPage} />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onPageChange={setCurrentPage} />
    </div>
  );
}

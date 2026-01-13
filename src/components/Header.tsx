import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/start', label: 'Start Here' },
  { path: '/templates', label: 'Templates' },
  { path: '/feedback', label: 'Feedback' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="glass-strong rounded-full px-6 py-3 shadow-lg">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <span className="font-bold text-xl bg-gradient-to-r from-[#9D5060] to-[#376380] bg-clip-text text-transparent">
                Transition OS
              </span>
            </Link>

            <nav className="hidden md:flex items-center space-x-2 bg-white/50 rounded-full px-2 py-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative px-4 py-2 text-sm font-medium transition-all rounded-full"
                >
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 gradient-primary rounded-full"
                      transition={{ type: "spring", duration: 0.3, bounce: 0.2 }}
                    />
                  )}
                  <span className={`relative z-10 ${isActive(link.path) ? 'text-white' : 'text-gray-700'}`}>
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>

            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-white/50 transition-colors"
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="md:hidden mt-4 glass-strong rounded-3xl p-4 shadow-xl"
            >
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-6 py-3 rounded-2xl text-sm font-medium transition-all ${
                      isActive(link.path)
                        ? 'gradient-primary text-white shadow-md'
                        : 'text-gray-700 hover:bg-white/50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

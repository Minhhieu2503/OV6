
import React, { useState } from 'react';
import { Menu, X, TrendingUp, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { NAV_ITEMS } from '../constants/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import { useTheme } from '../context/ThemeContext';
import { getAssetPath } from '../utils/paths';

const Navigation = ({ isScrolled, activeSection, isMenuOpen, setIsMenuOpen, scrollToSection }) => {
  const [imageError, setImageError] = useState(false);
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const profileImage = getAssetPath('images/profile.jpg');

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/80 dark:bg-rich-black/80 backdrop-blur-md border-b border-slate-200 dark:border-white/5 py-4 shadow-sm dark:shadow-none'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center group cursor-pointer space-x-4" onClick={() => scrollToSection('home')}>
            <div className="relative">
              {!imageError ? (
                <img
                  src={profileImage}
                  alt="OV6 Logo"
                  className="h-10 w-10 rounded-full object-cover border-2 border-neon-blue/20 group-hover:border-neon-blue transition-all duration-300"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="h-10 w-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
              )}
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-white dark:to-neon-blue bg-clip-text text-transparent">OV6</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-6">
              {NAV_ITEMS.map((item) => (
                item.id !== 'contact' && (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-sm font-medium tracking-wider transition-all duration-300 hover:text-neon-blue ${activeSection === item.id
                      ? 'text-neon-blue'
                      : 'text-slate-600 dark:text-slate-300'
                      }`}
                  >
                    {t(`nav.${item.id}`)}
                  </button>
                )
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              <LanguageSwitcher />

              <button
                onClick={() => scrollToSection('contact')}
                className="bg-slate-900/5 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/20 text-slate-900 dark:text-white px-6 py-2.5 rounded-full text-sm font-medium tracking-wider hover:bg-neon-blue/10 hover:border-neon-blue/50 hover:text-neon-blue transition-all duration-300"
              >
                {t('nav.contact')}
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 dark:text-gray-300 hover:text-neon-blue dark:hover:text-white transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-rich-black/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 shadow-xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium tracking-wide ${activeSection === item.id
                  ? 'text-neon-blue bg-neon-blue/10 dark:bg-white/5'
                  : 'text-slate-700 dark:text-gray-300 hover:text-neon-blue dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
              >
                {t(`nav.${item.id}`)}
              </button>
            ))}
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navigation;

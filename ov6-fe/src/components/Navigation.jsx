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
      className={`w-full transition-all duration-300
        bg-white/92 dark:bg-[#080808]/92 backdrop-blur-md
        border-b border-yellow-200/60 dark:border-yellow-500/10
        shadow-sm dark:shadow-none
        ${isScrolled ? 'py-4' : 'py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div
            className="flex items-center group cursor-pointer space-x-3"
            onClick={() => scrollToSection('home')}
          >
            <div className="relative">
              {!imageError ? (
                <img
                  src={profileImage}
                  alt="OV6 Logo"
                  className="h-10 w-10 rounded-full object-cover border-2 border-yellow-400/30 group-hover:border-yellow-400 transition-all duration-300"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="h-10 w-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-black" />
                </div>
              )}
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-800 dark:from-yellow-300 dark:to-yellow-500 bg-clip-text text-transparent">
              OV6
            </span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-6">
              {NAV_ITEMS.map((item) =>
                item.id !== 'contact' && (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-sm font-medium tracking-wider transition-all duration-300
                      ${activeSection === item.id
                        ? 'text-yellow-600 dark:text-yellow-400'
                        : 'text-slate-600 dark:text-slate-300 hover:text-yellow-600 dark:hover:text-yellow-400'
                      }`}
                  >
                    {t(`nav.${item.id}`)}
                  </button>
                )
              )}
            </div>

            <div className="flex items-center space-x-3">
              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-slate-600 dark:text-yellow-400/70
                  hover:bg-yellow-50 dark:hover:bg-yellow-500/10
                  hover:text-yellow-600 dark:hover:text-yellow-300
                  border border-transparent hover:border-yellow-300 dark:hover:border-yellow-500/30
                  transition-all duration-300"
                aria-label="Toggle Theme"
                title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark'
                  ? <Sun className="h-5 w-5" />
                  : <Moon className="h-5 w-5" />
                }
              </button>
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-600 dark:text-yellow-400/70 hover:bg-yellow-50 dark:hover:bg-yellow-500/10 transition-colors"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/98 dark:bg-[#080808]/98 backdrop-blur-xl border-b border-yellow-200/50 dark:border-yellow-500/10 shadow-xl">
          <div className="px-4 pt-4 pb-6 space-y-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium tracking-wide transition-all duration-200
                  ${activeSection === item.id
                    ? 'text-yellow-700 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-500/10 border border-yellow-200 dark:border-yellow-500/20'
                    : 'text-slate-700 dark:text-gray-300 hover:text-yellow-700 dark:hover:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-500/5'
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

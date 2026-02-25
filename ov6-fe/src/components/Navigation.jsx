import React, { useState } from 'react';
import { Menu, X, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { NAV_ITEMS } from '../constants/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import { getAssetPath } from '../utils/paths';

const Navigation = ({ isScrolled, activeSection, isMenuOpen, setIsMenuOpen, scrollToSection }) => {
  const [imageError, setImageError] = useState(false);
  const { t } = useTranslation();
  const profileImage = getAssetPath('images/profile.jpg');

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full transition-all duration-300
        bg-[#121212]/85 backdrop-blur-md
        border-b border-white/5
        ${isScrolled ? 'py-4' : 'py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between relative">

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
                  className="h-10 w-10 rounded-full object-cover border-2 border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-all duration-300"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="h-10 w-10 bg-[#1A1A1A] border border-[#D4AF37]/30 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-[#D4AF37]" />
                </div>
              )}
            </div>
            <span className="text-2xl font-serif font-bold text-[#EAEAEA] tracking-wide">
              OV6
            </span>
          </div>

          {/* Centered Desktop Nav */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center space-x-12 lg:space-x-16">
              {NAV_ITEMS.map((item) =>
                item.id !== 'contact' && (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative text-base font-sans font-medium tracking-wide transition-all duration-300
                      ${activeSection === item.id
                        ? 'text-[#F5F5F5]'
                        : 'text-[#EAEAEA]/70 hover:text-[#F5F5F5]'
                      }`}
                  >
                    {t(`nav.${item.id}`)}
                    {/* Active State Gold Dot */}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="navDot"
                        className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#D4AF37]"
                      />
                    )}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Right Controls */}
          <div className="hidden md:flex items-center relative z-10">
            <LanguageSwitcher />
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#EAEAEA]/70 hover:text-[#F5F5F5] transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#121212]/95 backdrop-blur-xl border-b border-white/5 shadow-xl">
          <div className="px-4 pt-4 pb-6 space-y-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsMenuOpen(false);
                }}
                className={`flex w-full items-center px-4 py-3 rounded-lg text-base font-sans font-medium tracking-wide transition-all duration-200
                  ${activeSection === item.id
                    ? 'text-[#F5F5F5] bg-white/5'
                    : 'text-[#EAEAEA]/70 hover:text-[#F5F5F5] hover:bg-white/5'
                  }`}
              >
                {t(`nav.${item.id}`)}
                {activeSection === item.id && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navigation;

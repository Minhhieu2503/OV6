import React from 'react';
import { useTranslation } from 'react-i18next';
import { Facebook, Youtube, Instagram, Mail, Phone, MessageCircle } from 'lucide-react';
import { NAV_ITEMS, CONTACT_INFO } from '../constants/navigation';

const Footer = ({ scrollToSection }) => {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: Facebook, href: CONTACT_INFO.facebook.url, label: 'Facebook', color: 'text-slate-400 hover:text-blue-600 dark:text-gray-400' },
    { icon: MessageCircle, href: CONTACT_INFO.zalo.url, label: 'Zalo', color: 'text-slate-400 hover:text-blue-500 dark:text-gray-400' },
    { icon: Youtube, href: CONTACT_INFO.youtube.url, label: 'YouTube', color: 'text-slate-400 hover:text-red-500 dark:text-gray-400' }
  ];

  return (
    <footer className="bg-slate-50 dark:bg-gray-950 border-t border-slate-200 dark:border-gray-800 pt-8 pb-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="space-y-3">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent block">
              OV6
            </span>
            <p className="text-slate-600 dark:text-gray-400 text-xs leading-relaxed transition-colors duration-300">
              {t('footer.about_desc')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent w-fit transition-colors duration-300">
              {t('footer.quick_links')}
            </h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-300 text-xs flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-blue-600 dark:bg-cyan-400 mr-0 group-hover:w-2 group-hover:mr-1.5 transition-all duration-300"></span>
                    {t(`nav.${item.id}`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent w-fit transition-colors duration-300">
              {t('footer.contact')}
            </h3>
            <ul className="space-y-3">
              <li>
                <a href={CONTACT_INFO.email.url} className="flex items-start group">
                  <Mail className="h-4 w-4 text-slate-500 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors mt-0.5" />
                  <span className="ml-2 text-slate-600 dark:text-gray-400 text-xs group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    {CONTACT_INFO.email.address}
                  </span>
                </a>
              </li>
              <li>
                <a href={CONTACT_INFO.phone.url} className="flex items-start group">
                  <Phone className="h-4 w-4 text-slate-500 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors mt-0.5" />
                  <span className="ml-2 text-slate-600 dark:text-gray-400 text-xs group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    {CONTACT_INFO.phone.number}
                  </span>
                </a>
              </li>
              <li>
                <a href={CONTACT_INFO.zalo.url} className="flex items-start group">
                  <MessageCircle className="h-4 w-4 text-slate-500 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors mt-0.5" />
                  <span className="ml-2 text-slate-600 dark:text-gray-400 text-xs group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    Zalo: {CONTACT_INFO.zalo.phone}
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-500 bg-clip-text text-transparent w-fit transition-colors duration-300">
              {t('footer.social')}
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-white dark:bg-gray-900 p-2 rounded-lg border border-slate-200 dark:border-gray-800 hover:border-slate-300 dark:hover:border-gray-700 transition-all duration-300 group shadow-sm dark:shadow-none ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer Section - Compacted */}
        <div className="border-t border-slate-200 dark:border-gray-800 pt-6 mb-6 transition-colors duration-300">
          <div className="bg-slate-100 dark:bg-gray-900/30 p-4 rounded-xl border border-slate-200 dark:border-gray-800/30 transition-colors duration-300">
            <h3 className="text-xs font-bold text-red-500/80 dark:text-red-400/80 mb-2 uppercase tracking-wide flex items-center transition-colors duration-300">
              <span className="w-1 h-1 rounded-full bg-red-500 mr-1.5 align-middle"></span>
              {t('footer.disclaimer.title')}
            </h3>
            <div className="text-[10px] text-slate-500 dark:text-gray-500 leading-relaxed text-justify transition-colors duration-300">
              <span dangerouslySetInnerHTML={{ __html: t('footer.disclaimer.risk') }} className="mr-1" />
              <span dangerouslySetInnerHTML={{ __html: t('footer.disclaimer.advice') }} className="mr-1" />
              <span dangerouslySetInnerHTML={{ __html: t('footer.disclaimer.performance') }} className="mr-1" />
              <span dangerouslySetInnerHTML={{ __html: t('footer.disclaimer.transparency') }} />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-200 dark:border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 dark:text-gray-600 transition-colors duration-300">
          <p className="mb-2 md:mb-0">
            {t('footer.rights', { year: '2025' })}
          </p>
          <p className="flex items-center">
            <span className="w-0.5 h-0.5 rounded-full bg-slate-400 dark:bg-gray-600 mx-1.5 hidden md:block"></span>
            {t('footer.dedication')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

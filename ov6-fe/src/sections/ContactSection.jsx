import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Youtube, Music } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CONTACT_INFO } from '../constants/navigation';

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi sớm nhất có thể.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactItems = [
    {
      icon: Phone,
      label: 'Điện thoại',
      value: CONTACT_INFO.phone.number,
      href: CONTACT_INFO.phone.url,
      color: 'cyan',
    },
    {
      icon: MessageCircle,
      label: 'Zalo',
      value: CONTACT_INFO.zalo.phone,
      href: CONTACT_INFO.zalo.url,
      color: 'blue',
      external: true
    },
    {
      icon: Mail,
      label: 'Email',
      value: CONTACT_INFO.email.address,
      href: CONTACT_INFO.email.url,
      color: 'purple',
    },
    {
      icon: Youtube,
      label: 'YouTube',
      value: CONTACT_INFO.youtube.username,
      href: CONTACT_INFO.youtube.url,
      color: 'red',
      external: true
    },
    {
      icon: Music,
      label: 'TikTok',
      value: CONTACT_INFO.tiktok.username,
      href: CONTACT_INFO.tiktok.url,
      color: 'pink',
      external: true
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-rich-black relative overflow-hidden transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-900/[0.04] dark:bg-grid-white/[0.02] -z-1 transition-colors duration-300"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-100 dark:bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none transition-colors duration-300"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-slate-500 dark:from-white dark:to-slate-400 uppercase tracking-widest mb-4">
            {t('contact.title')}
          </h2>
          <div className="h-1 w-24 bg-neon-blue mx-auto rounded-full shadow-[0_0_10px_#00D2FF]"></div>
          <p className="text-center text-slate-600 dark:text-slate-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed transition-colors duration-300">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3 transition-colors duration-300">
              <span className="w-8 h-1 bg-blue-500 dark:bg-neon-blue rounded-full"></span>
              {t('contact.connect_title')}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-10 leading-relaxed transition-colors duration-300">
              {t('contact.connect_desc')}
            </p>

            <div className="space-y-4">
              {contactItems.map((item, idx) => {
                const IconComponent = item.icon;
                const linkProps = item.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {};
                const labelKeys = ['phone', 'zalo', 'email', 'youtube', 'tiktok'];
                const key = labelKeys[idx] || 'phone';

                // Color mapping for neon effects
                const colorClasses = {
                  cyan: 'text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-300 bg-cyan-100 dark:bg-cyan-500/10 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-500/20 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]',
                  blue: 'text-blue-600 dark:text-blue-400 group-hover:text-blue-500 dark:group-hover:text-blue-300 bg-blue-100 dark:bg-blue-500/10 group-hover:bg-blue-200 dark:group-hover:bg-blue-500/20 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]',
                  purple: 'text-purple-600 dark:text-purple-400 group-hover:text-purple-500 dark:group-hover:text-purple-300 bg-purple-100 dark:bg-purple-500/10 group-hover:bg-purple-200 dark:group-hover:bg-purple-500/20 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]',
                  red: 'text-red-600 dark:text-red-400 group-hover:text-red-500 dark:group-hover:text-red-300 bg-red-100 dark:bg-red-500/10 group-hover:bg-red-200 dark:group-hover:bg-red-500/20 group-hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]',
                  pink: 'text-pink-600 dark:text-pink-400 group-hover:text-pink-500 dark:group-hover:text-pink-300 bg-pink-100 dark:bg-pink-500/10 group-hover:bg-pink-200 dark:group-hover:bg-pink-500/20 group-hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]'
                };

                return (
                  <motion.a
                    key={idx}
                    href={item.href}
                    {...linkProps}
                    whileHover={{ x: 5 }}
                    className="flex items-center p-4 bg-white/60 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-white/5 hover:border-blue-300 dark:hover:border-white/20 transition-all duration-300 group shadow-sm dark:shadow-none"
                  >
                    <div className={`p-3 rounded-xl transition-all duration-300 ${colorClasses[item.color]}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="ml-5 flex-1 min-w-0">
                      <div className="text-slate-900 dark:text-white font-bold text-base mb-0.5 group-hover:text-blue-600 dark:group-hover:text-neon-blue transition-colors">{t(`contact.labels.${key}`)}</div>
                      <div className="text-slate-500 dark:text-slate-500 text-sm truncate font-mono transition-colors">{item.value}</div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-[32px] border border-slate-200 dark:border-white/10 shadow-2xl relative">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-white/20 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-white/10 to-transparent"></div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 transition-colors duration-300">{t('contact.form.title')}</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-slate-700 dark:text-slate-300 mb-2 text-sm font-semibold tracking-wide transition-colors duration-300">
                    {t('contact.form.name')} <span className="text-blue-500 dark:text-neon-blue">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 bg-white dark:bg-rich-black/50 border border-slate-300 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:border-blue-500 dark:focus:border-neon-blue/50 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:focus:ring-neon-blue/50 transition-all"
                    placeholder="Nguyễn Văn A"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-slate-700 dark:text-slate-300 mb-2 text-sm font-semibold tracking-wide transition-colors duration-300">
                    {t('contact.form.email')} <span className="text-blue-500 dark:text-neon-blue">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 bg-white dark:bg-rich-black/50 border border-slate-300 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:border-blue-500 dark:focus:border-neon-blue/50 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:focus:ring-neon-blue/50 transition-all"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-700 dark:text-slate-300 mb-2 text-sm font-semibold tracking-wide transition-colors duration-300">
                    {t('contact.form.message')} <span className="text-blue-500 dark:text-neon-blue">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-4 bg-white dark:bg-rich-black/50 border border-slate-300 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:border-blue-500 dark:focus:border-neon-blue/50 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:focus:ring-neon-blue/50 resize-none transition-all"
                    placeholder={t('contact.form.message_placeholder')}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-neon-blue dark:to-blue-600 hover:from-blue-700 hover:to-cyan-600 dark:hover:from-cyan-300 dark:hover:to-blue-500 text-white dark:text-rich-black font-extrabold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl dark:shadow-[0_0_20px_rgba(0,210,255,0.3)] dark:hover:shadow-[0_0_30px_rgba(0,210,255,0.5)] hover:scale-[1.02] active:scale-[0.98] uppercase tracking-wider"
                >
                  {t('contact.form.submit')}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;

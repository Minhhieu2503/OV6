
import React from 'react';
import { Mail, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { HOME_FEATURES, HOME_STATS } from '../constants/homeData';

const HomeSection = ({ scrollToSection }) => {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-white dark:bg-rich-black transition-colors duration-300">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-sky-200/40 dark:bg-neon-blue/20 rounded-full blur-[100px]"
        ></motion.div>
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-purple-200/40 dark:bg-purple-600/20 rounded-full blur-[100px]"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
        <div className="text-center max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-8 leading-tight tracking-tight transition-colors duration-300"
          >
            <span dangerouslySetInnerHTML={{ __html: t('hero.title').replace('<br />', ' ') }} />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-normal transition-colors duration-300"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-neon-blue dark:to-neon-blue text-white dark:text-rich-black font-bold text-lg rounded-full transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl dark:shadow-[0_0_20px_rgba(0,210,255,0.4)] dark:hover:shadow-[0_0_30px_rgba(0,210,255,0.6)]"
            >
              <Mail className="mr-2 h-5 w-5" />
              {t('hero.cta_contact')}
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.youtube.com/@ov6forextrading"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/50 dark:bg-transparent border border-slate-200 dark:border-white/20 hover:border-slate-400 dark:hover:border-white/50 hover:bg-white/80 dark:hover:bg-white/5 text-slate-900 dark:text-white font-semibold text-lg rounded-full transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
            >
              <Youtube className="mr-2 h-5 w-5 text-red-500" />
              {t('hero.cta_youtube')}
            </motion.a>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-24">
          {HOME_FEATURES.map((item, idx) => {
            const IconComponent = item.icon;
            const featureKeys = ["discipline", "risk_management", "psychology"];
            const key = featureKeys[idx];

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white/60 dark:bg-rich-black/40 backdrop-blur-xl p-8 rounded-[20px] border border-slate-200 dark:border-white/5 hover:border-blue-400 dark:hover:border-neon-blue/50 transition-all duration-300 group shadow-lg dark:shadow-lg hover:shadow-xl dark:hover:shadow-neon-blue/10"
              >
                <div className="bg-blue-50 dark:bg-white/5 rounded-2xl p-4 w-fit mb-6 group-hover:bg-blue-100 dark:group-hover:bg-neon-blue/10 transition-colors duration-300">
                  <IconComponent className="h-8 w-8 text-blue-600 dark:text-neon-blue" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-neon-blue transition-colors duration-300">{t(`features.${key}.title`)}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">{t(`features.${key}.desc`)}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-12 mt-24 text-center border-t border-slate-200 dark:border-white/5 pt-16">
          {HOME_STATS.map((stat, idx) => {
            const statKeys = ["exp", "markets", "students"];
            return (
              <motion.div
                key={idx}
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 + 0.5 }}
                className="group"
              >
                <div className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500 dark:text-white dark:bg-none mb-2 group-hover:dark:text-neon-blue transition-colors duration-300">
                  {stat.num}
                </div>
                <div className="text-slate-500 dark:text-slate-500 font-medium text-lg uppercase tracking-wider">{t(`hero.stats.${statKeys[idx]}`)}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeSection;

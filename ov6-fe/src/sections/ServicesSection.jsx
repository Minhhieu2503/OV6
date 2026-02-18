import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SERVICES } from '../constants/servicesData';

const ServicesSection = ({ scrollToSection }) => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="services" className="py-24 bg-white dark:bg-rich-black relative transition-colors duration-300">
      {/* Ambient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl max-h-[800px] bg-blue-100 dark:bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none transition-colors duration-300"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-slate-500 dark:from-white dark:to-slate-400 uppercase tracking-widest mb-4">
            {t('services.title')}
          </h2>
          <div className="h-1 w-24 bg-neon-blue mx-auto rounded-full shadow-[0_0_10px_#00D2FF]"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {SERVICES.map((service, idx) => {
            const IconComponent = service.icon;
            // Map hardcoded services to keys based on index or some identifier.
            // SERVICES data has titles like "Khóa Học Trading", "Nhóm Tín Hiệu", "Mentoring 1-1"
            // Let's assume order [0, 1, 2] maps to ['course', 'signals', 'mentoring'].
            const serviceKeys = ['course', 'signals', 'mentoring'];
            const key = serviceKeys[idx] || 'course';

            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white/60 dark:bg-white/5 backdrop-blur-md p-8 rounded-[24px] border border-slate-200 dark:border-white/10 hover:border-blue-400 dark:hover:border-neon-blue/50 transition-all duration-300 hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(0,210,255,0.1)] group relative overflow-hidden shadow-lg dark:shadow-none"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent dark:from-white/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="bg-blue-100 dark:bg-neon-blue/10 p-4 rounded-2xl w-fit mb-6 group-hover:bg-blue-200 dark:group-hover:bg-neon-blue/20 transition-colors duration-300 border border-blue-200 dark:border-neon-blue/20">
                    <IconComponent className="h-8 w-8 text-blue-600 dark:text-neon-blue" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-neon-blue transition-colors duration-300">
                    {t(`services.items.${key}.title`)}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 mb-8 text-sm font-medium tracking-wide uppercase transition-colors duration-300">
                    {t(`services.items.${key}.audience`)}
                  </p>

                  <ul className="space-y-4 mb-8">
                    {[0, 1, 2, 3].map((i) => (
                      <li key={i} className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-blue-500 dark:text-neon-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed transition-colors duration-300">{t(`services.items.${key}.includes.${i}`)}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => scrollToSection('contact')}
                    className="w-full py-4 bg-transparent border border-slate-300 dark:border-white/20 hover:border-blue-500 dark:hover:border-neon-blue/50 hover:bg-blue-50 dark:hover:bg-neon-blue/10 text-slate-900 dark:text-white font-bold rounded-xl transition-all duration-300"
                  >
                    {t('services.cta')}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
export default ServicesSection;

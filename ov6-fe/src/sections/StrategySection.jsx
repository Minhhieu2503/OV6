import React, { useState } from 'react';
import { LineChart, CheckCircle2, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const StrategySection = () => {
  const { t } = useTranslation();
  const [imageError, setImageError] = useState(false);
  const strategyImage = '/images/strategy.jpg';

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
    <section id="strategy" className="py-24 bg-slate-50 dark:bg-rich-black relative overflow-hidden transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-200/40 dark:bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-200/40 dark:bg-purple-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-slate-500 dark:from-white dark:to-slate-400 uppercase tracking-widest mb-4">
            {t('strategy.title')}
          </h2>
          <div className="h-1 w-24 bg-neon-blue mx-auto rounded-full shadow-[0_0_10px_#00D2FF]"></div>
        </motion.div>

        {/* Layout: Method + Chart */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 flex items-center transition-colors duration-300">
                <span className="bg-blue-100 dark:bg-neon-blue/20 p-2 rounded-lg mr-4 border border-blue-200 dark:border-neon-blue/50">
                  <LineChart className="h-6 w-6 text-blue-600 dark:text-neon-blue" />
                </span>
                {t('strategy.method_title')}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed transition-colors duration-300">
                {t('strategy.method_desc')}
              </p>
            </motion.div>

            <motion.ul variants={containerVariants} className="space-y-4">
              {[0, 1, 2, 3].map((idx) => (
                <motion.li key={idx} variants={itemVariants} className="flex items-start group">
                  <div className="h-2 w-2 rounded-full mt-2.5 mr-4 bg-blue-500 dark:bg-neon-blue shrink-0 group-hover:scale-150 transition-transform duration-300 shadow-[0_0_8px_rgba(59,130,246,0.5)] dark:shadow-[0_0_8px_#00D2FF]"></div>
                  <span className="text-slate-700 dark:text-gray-300 group-hover:text-blue-700 dark:group-hover:text-white transition-colors duration-300 text-lg">
                    {t(`strategy.methods.${idx}`)}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Chart Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 dark:from-neon-blue dark:via-blue-500 dark:to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 group-hover:border-blue-400 dark:group-hover:border-neon-blue/50 transition-all duration-500 shadow-2xl">
              <div className="aspect-video overflow-hidden bg-slate-100 dark:bg-slate-900">
                {!imageError ? (
                  <img
                    src={strategyImage}
                    alt="Trading Strategy"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <LineChart className="h-20 w-20 text-slate-400 dark:text-slate-700" />
                  </div>
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </motion.div>
        </div>

        {/* Risk Management Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-24"
        >
          <motion.h3 variants={itemVariants} className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12 uppercase tracking-wide transition-colors duration-300">
            {t('strategy.risk_title')}
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[0, 1, 2].map((idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white/80 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 p-8 rounded-2xl text-center hover:bg-white dark:hover:bg-white/10 hover:border-blue-400 dark:hover:border-neon-blue/30 transition-all duration-300 shadow-lg hover:shadow-xl dark:shadow-xl group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 dark:via-neon-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {t(`strategy.risk_items.${idx}.value`)}
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors duration-300">{t(`strategy.risk_items.${idx}.title`)}</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm transition-colors duration-300">
                  {t(`strategy.risk_items.${idx}.desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Different Approach */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden p-[1px] bg-gradient-to-r from-slate-200 via-blue-400 to-slate-200 dark:from-white/10 dark:via-neon-blue/50 dark:to-white/10 shadow-xl"
        >
          <div className="bg-white dark:bg-rich-black/90 backdrop-blur-xl rounded-[23px] p-8 md:p-12 relative overflow-hidden transition-colors duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/30 dark:bg-neon-blue/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <h4 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8 transition-colors duration-300">
                {t('strategy.diff_title')}
              </h4>

              <div className="grid md:grid-cols-3 gap-6 text-left">
                {(Array.isArray(t('strategy.diff_desc', { returnObjects: true }))
                  ? t('strategy.diff_desc', { returnObjects: true })
                  : [t('strategy.diff_desc')]
                ).map((point, idx) => (
                  <div key={idx} className="flex items-start bg-slate-50 dark:bg-white/5 p-4 rounded-xl border border-slate-200 dark:border-white/5 hover:border-blue-400 dark:hover:border-neon-blue/30 transition-colors shadow-sm dark:shadow-none">
                    <div className="h-2 w-2 rounded-full mt-2 mr-3 bg-blue-500 dark:bg-neon-blue shrink-0 shadow-[0_0_5px_rgba(59,130,246,0.5)] dark:shadow-[0_0_5px_#00D2FF]"></div>
                    <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-relaxed transition-colors duration-300">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StrategySection;

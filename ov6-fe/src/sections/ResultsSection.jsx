import React, { useRef } from 'react';
import { Award, TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight, Clock } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { TRADE_HISTORY, PERFORMANCE_STATS } from '../constants/resultsData';

const ResultsSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="results" className="py-24 bg-slate-50 dark:bg-rich-black relative overflow-hidden transition-colors duration-300" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-200/40 dark:bg-neon-blue/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-200/40 dark:bg-purple-600/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-slate-500 dark:from-white dark:to-slate-400 uppercase tracking-widest mb-4">
            {t('results.title')}
          </h2>
          <div className="h-1 w-24 bg-neon-blue mx-auto rounded-full shadow-[0_0_10px_#00D2FF]"></div>
        </motion.div>

        {/* Notice Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-yellow-50 dark:bg-yellow-500/10 backdrop-blur-md border border-yellow-200 dark:border-yellow-500/20 p-6 rounded-2xl mb-16 max-w-4xl mx-auto flex items-start gap-4 shadow-sm dark:shadow-[0_0_30px_rgba(234,179,8,0.05)]"
        >
          <div className="bg-yellow-100 dark:bg-yellow-500/20 p-3 rounded-full shrink-0">
            <Award className="h-6 w-6 text-yellow-600 dark:text-yellow-500" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-yellow-700 dark:text-yellow-400 mb-2 uppercase tracking-wide transition-colors duration-300">{t('results.notice_title')}</h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed transition-colors duration-300">
              {t('results.notice_desc')}
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-10 mb-16"
        >
          {/* Trading Journal / History */}
          <motion.div variants={itemVariants} className="bg-white/60 dark:bg-white/5 backdrop-blur-md p-8 rounded-[24px] border border-slate-200 dark:border-white/10 hover:border-blue-400 dark:hover:border-neon-blue/30 transition-all duration-300 shadow-xl group">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-3 rounded-xl shadow-lg">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white transition-colors duration-300">{t('results.journal_title')}</h3>
            </div>

            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed transition-colors duration-300">
              {t('results.journal_desc')}
            </p>

            <div className="space-y-4">
              {TRADE_HISTORY.map((trade, idx) => (
                <div key={idx} className="bg-white/50 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 p-4 rounded-xl flex items-center justify-between border border-slate-200 dark:border-white/5 transition-colors duration-200 shadow-sm dark:shadow-none">
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg ${trade.result.startsWith('+') ? 'bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400' : 'bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400'}`}>
                      {trade.result.startsWith('+') ? <ArrowUpRight size={18} /> : <ArrowDownRight size={18} />}
                    </div>
                    <div>
                      <div className="text-slate-900 dark:text-white font-bold tracking-wide transition-colors duration-300">{trade.pair}</div>
                      <div className="text-xs text-slate-500 uppercase font-medium mt-0.5">{trade.date} • {trade.type}</div>
                    </div>
                  </div>
                  <div className={`text-lg font-bold ${trade.result.startsWith('+') ? 'text-green-600 dark:text-green-400 dark:shadow-green-500/20 dark:drop-shadow-sm' : 'text-red-600 dark:text-red-400'}`}>
                    {trade.result}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Performance Stats */}
          <motion.div variants={itemVariants} className="bg-white/60 dark:bg-white/5 backdrop-blur-md p-8 rounded-[24px] border border-slate-200 dark:border-white/10 hover:border-blue-400 dark:hover:border-neon-blue/30 transition-all duration-300 shadow-xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-3 rounded-xl shadow-lg">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white transition-colors duration-300">{t('results.stats_title')}</h3>
            </div>

            <div className="space-y-8">
              {PERFORMANCE_STATS.map((stat, idx) => {
                const keyMap = {
                  "Win Rate": "win_rate",
                  "Profit Factor": "profit_factor",
                  "Max Drawdown": "max_drawdown"
                };
                const labelKey = keyMap[stat.label] || stat.label;
                const colorMap = {
                  blue: "bg-blue-500 dark:bg-neon-blue dark:shadow-[0_0_10px_#00D2FF]",
                  green: "bg-green-500 dark:bg-green-500 dark:shadow-[0_0_10px_#22c55e]",
                  red: "bg-red-500 dark:bg-red-500 dark:shadow-[0_0_10px_#ef4444]"
                };

                return (
                  <div key={idx} className="relative">
                    <div className="flex justify-between mb-2 items-end">
                      <span className="text-slate-500 dark:text-slate-400 font-medium text-sm uppercase tracking-wider transition-colors duration-300">{t(`results.stats_labels.${labelKey}`) || stat.label}</span>
                      <span className="text-slate-900 dark:text-white font-bold text-xl transition-colors duration-300">{stat.value}</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-white/10 rounded-full h-2 overflow-hidden transition-colors duration-300">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${stat.percentage}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.5 + idx * 0.2 }}
                        className={`h-full rounded-full ${colorMap[stat.color] || 'bg-blue-500 dark:bg-neon-blue'}`}
                      ></motion.div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 transition-colors duration-300">
              <p className="text-xs text-slate-500 italic text-center">
                {t('results.stats_note')}
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-50 via-white to-purple-50 dark:from-cyan-900/20 dark:via-blue-900/20 dark:to-purple-900/20 backdrop-blur-md p-8 rounded-[24px] border border-blue-100 dark:border-cyan-500/20 text-center max-w-4xl mx-auto shadow-sm dark:shadow-none transition-all duration-300"
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-400 dark:to-blue-400 transition-colors duration-300">
            {t('results.explanation_title')}
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed transition-colors duration-300">
            {t('results.explanation_p1')}
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-300">
            {t('results.explanation_p2')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
export default ResultsSection;


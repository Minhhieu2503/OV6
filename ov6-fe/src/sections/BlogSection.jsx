import React from 'react';
import { ChevronRight, Calendar, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const BlogSection = () => {
  const { t } = useTranslation();

  const blogImages = [
    '/OV6/images/mentality.png',
    '/OV6/images/Capital_management.png',
    '/OV6/images/Analysis.png'
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="blog" className="py-24 bg-slate-50 dark:bg-rich-black relative transition-colors duration-300">
      {/* Ambient Background */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-100 dark:from-neon-blue/5 to-transparent pointer-events-none transition-colors duration-300"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-slate-500 dark:from-white dark:to-slate-400 uppercase tracking-widest mb-4">
            {t('blog.title')}
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
          {[0, 1, 2].map((idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-white/5 backdrop-blur-md rounded-[24px] overflow-hidden border border-slate-200 dark:border-white/10 hover:border-blue-400 dark:hover:border-neon-blue/50 transition-all duration-300 shadow-lg hover:shadow-xl dark:shadow-lg dark:hover:shadow-neon-blue/10 group flex flex-col"
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src={blogImages[idx]}
                  alt={t(`blog.posts.${idx}.title`)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 dark:opacity-80"></div>

                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <span className="text-xs font-bold text-white dark:text-rich-black bg-blue-600 dark:bg-neon-blue px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    {t(`blog.posts.${idx}.category`)}
                  </span>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-4 text-xs text-slate-500 dark:text-slate-400 font-medium transition-colors duration-300">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-blue-500 dark:text-neon-blue" />
                    {t(`blog.posts.${idx}.date`)}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5 text-blue-500 dark:text-neon-blue" />
                    OV6 Admin
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-neon-blue transition-colors duration-300 line-clamp-2">
                  {t(`blog.posts.${idx}.title`)}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-1 transition-colors duration-300">
                  {t(`blog.posts.${idx}.excerpt`)}
                </p>

                <button className="text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-neon-blue font-bold text-sm flex items-center group/btn transition-colors mt-auto w-fit">
                  {t('blog.read_more')}
                  <div className="bg-slate-100 dark:bg-white/10 p-1 rounded-full ml-2 group-hover/btn:bg-blue-100 dark:group-hover/btn:bg-neon-blue/20 transition-colors">
                    <ChevronRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </div>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;


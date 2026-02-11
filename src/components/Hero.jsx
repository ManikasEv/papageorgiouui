import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { heroData } from '../data/heroData';

const Hero = forwardRef((props, ref) => {
  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden"
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center space-y-8 md:space-y-12">
          {/* Logo Text */}
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-2"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
              {heroData.title}
            </h1>
            <div className="h-1 w-32 md:w-48 bg-blue-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Slogan */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-3xl lg:text-4xl text-gray-200 font-light italic max-w-4xl mx-auto leading-relaxed"
          >
            {heroData.slogan}
          </motion.p>

          {/* Project Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto pt-8">
            {heroData.stats.map((stat, index) => (
              <motion.div 
                key={stat.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105 transform"
              >
                <div className="text-5xl md:text-6xl font-bold text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg md:text-xl text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-8"
          >
            <a href={heroData.cta.link} className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 md:px-12 py-4 md:py-5 rounded-full text-lg md:text-xl transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-2xl hover:shadow-blue-500/50">
              {heroData.cta.text}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-white/70" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;


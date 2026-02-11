import { forwardRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData, projects } from '../data/projectsData';

const Projects = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play slideshow every 5 seconds
  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isOpen]);

  // Reset to first image when opening
  const handleOpen = () => {
    setCurrentIndex(0);
    setIsOpen(true);
  };

  // Navigate to next/previous image
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            {projectsData.heading}
          </h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {projectsData.subheading}
          </p>
        </motion.div>

        {/* Single Project Thumbnail - Click to open slideshow */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={handleOpen}
            className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer w-full max-w-3xl"
          >
            {/* Thumbnail Image */}
            <div className="relative overflow-hidden aspect-[16/10]">
              <img
                src={projects[0].image}
                alt="Projekt Galerie"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                  Projekt Galerie
                </h3>
                <p className="text-white/95 text-xl md:text-2xl mb-6 drop-shadow-lg">
                  {projects.length} Bilder ansehen
                </p>
                <div className="flex items-center gap-3 text-white">
                  <span className="text-lg font-medium">Klicken zum Öffnen</span>
                  <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Popup Slideshow Modal */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setIsOpen(false)}
            >
              {/* Modal Content */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-7xl w-full mx-4"
              >
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute -top-16 right-0 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-colors z-10 shadow-lg"
                  aria-label="Schließen"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Image Slideshow */}
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      className="relative w-full"
                      style={{ minHeight: '70vh' }}
                    >
                      <img
                        src={projects[currentIndex].image}
                        alt={projects[currentIndex].title}
                        className="w-full h-full object-contain"
                        style={{ minHeight: '70vh', maxHeight: '85vh' }}
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-blue-600 hover:text-white p-4 md:p-5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-10"
                    aria-label="Vorheriges Bild"
                  >
                    <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-blue-600 hover:text-white p-4 md:p-5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-10"
                    aria-label="Nächstes Bild"
                  >
                    <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Image Counter & Progress Dots */}
                  <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-3">
                    <div className="bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                      {currentIndex + 1} / {projects.length}
                    </div>
                    <div className="flex gap-2">
                      {projects.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentIndex
                              ? 'bg-blue-500 w-8'
                              : 'bg-white/50 hover:bg-white/80'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';

export default Projects;

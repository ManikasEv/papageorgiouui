import { forwardRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { partnersData, partners } from '../data/partnersData';

const Partners = forwardRef((props, ref) => {
  const [selectedPartner, setSelectedPartner] = useState(null);

  return (
    <section ref={ref} className="py-20 md:py-32 bg-white">
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
            {partnersData.heading}
          </h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {partnersData.subheading}
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => setSelectedPartner(partner)}
              className="flex items-center justify-center p-8 md:p-10 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300 hover:shadow-xl group h-48 md:h-56 cursor-pointer"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="max-w-full max-h-32 md:max-h-40 w-auto h-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>

        {/* Enlarged Partner Modal */}
        <AnimatePresence>
          {selectedPartner && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setSelectedPartner(null)}
            >
              {/* Modal Content */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full mx-4"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedPartner(null)}
                  className="absolute -top-16 right-0 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-colors z-10 shadow-lg"
                  aria-label="Schließen"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Partner Logo Display */}
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl p-12 md:p-16">
                  <div className="flex items-center justify-center" style={{ minHeight: '50vh' }}>
                    <img
                      src={selectedPartner.image}
                      alt={selectedPartner.name}
                      className="max-w-full max-h-[60vh] w-auto h-auto object-contain"
                    />
                  </div>
                  <div className="text-center mt-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {selectedPartner.name}
                    </h3>
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

Partners.displayName = 'Partners';

export default Partners;


import { useState } from 'react';
import { heroContent } from '../data/heroData';

const Hero = () => {
  const [activeContent, setActiveContent] = useState(0);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-4 py-8 md:px-8 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-6 md:gap-8">
          
          {/* Top Section - Buttons and Text */}
          <div className="flex flex-col md:flex-row md:gap-12">
            {/* Left Side - Navigation Buttons */}
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <div className="flex flex-row md:flex-col gap-3 md:gap-4 overflow-x-auto md:overflow-visible pb-4 md:pb-0">
                {heroContent.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveContent(index)}
                    className={`
                      flex-shrink-0 px-4 py-3 md:px-6 md:py-4 rounded-lg text-left transition-all duration-300
                      ${activeContent === index 
                        ? 'bg-blue-600 shadow-lg shadow-blue-500/50 scale-105' 
                        : 'bg-slate-700/50 hover:bg-slate-700 hover:scale-102'
                      }
                    `}
                  >
                    <span className="text-sm md:text-base font-semibold whitespace-nowrap md:whitespace-normal">
                      {item.buttonText}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side - Dynamic Content */}
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <div className="space-y-3 md:space-y-5 animate-fadeIn">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                  {heroContent[activeContent].title}
                </h1>
                <h2 className="text-lg md:text-2xl text-blue-400 font-medium">
                  {heroContent[activeContent].subtitle}
                </h2>
                <p className="text-sm md:text-lg text-slate-300 leading-relaxed">
                  {heroContent[activeContent].description}
                </p>
                <div className="pt-2 md:pt-4">
                  <a 
                    href="#contact"
                    className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105"
                  >
                    Get Free Quote
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Image Gallery */}
          <div className="mt-4 md:mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 animate-fadeIn">
              {heroContent[activeContent].images.map((image, index) => (
                <div 
                  key={index}
                  className="relative overflow-hidden rounded-xl shadow-2xl group aspect-[4/3]"
                >
                  <img 
                    src={image} 
                    alt={`${heroContent[activeContent].buttonText} project ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


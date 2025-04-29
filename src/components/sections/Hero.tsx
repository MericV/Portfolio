import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="h-screen flex items-center relative bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 lg:w-3/5 text-center md:text-left pb-12 md:pb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-gray-900 dark:text-white animate-fade-in-up">
              Meric <span className="text-blue-600 dark:text-blue-400">Vaillant</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 animate-fade-in-up animation-delay-200">
              Étudiant en BTS SIO — Développement d'Applications
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto md:mx-0 animate-fade-in-up animation-delay-400">
              Un étudiant motivé avec une solide formation en mathématiques et en informatique. 
              Méthodique, indépendant et avide d'apprendre de nouvelles technologies.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start animate-fade-in-up animation-delay-600">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-lg hover:shadow-xl"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Me contacter
              </a>
              <a 
                href="#about" 
                className="px-6 py-3 bg-transparent border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                En savoir plus
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 lg:w-2/5 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-blue-600 dark:bg-blue-500 rounded-full overflow-hidden shadow-2xl animate-fade-in">
              <img 
                src="public/IMG_4028 2.jpeg" 
                alt="Profile" 
                className="w-full h-full object-cover opacity-85"
              />
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 dark:text-gray-400 animate-bounce"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
        }}
        aria-label="Scroll down"
      >
        <ArrowDown size={28} />
      </a>
    </section>
  );
};

export default Hero;
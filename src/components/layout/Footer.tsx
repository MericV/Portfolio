import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-blue-600 dark:text-blue-400">Meric Vaillant</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Étudiant en BTS SIO passionné par l'informatique et les nouvelles technologies.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/MericV" target="_blank" rel="noopener noreferrer" aria-label="Github" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/meric-vaillant-256672295/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-blue-600 dark:text-blue-400">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <Mail size={18} />
                <a href="mailto:vaillant.meric@icloud.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  vaillant.meric@icloud.com
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <Phone size={18} />
                <a href="tel:+33787601907" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  +33 7 87 60 19 07
                </a>
              </li>
              <li className="flex items-start space-x-2 text-gray-600 dark:text-gray-400">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>1761 Route des Condamines, 06670 Saint-Martin-du-Var, France</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-blue-600 dark:text-blue-400">Navigation</h3>
            <ul className="space-y-2">
              {['Accueil', 'À propos', 'Formation', 'Expérience', 'Compétences', 'Projets', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-')}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      const href = `#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-')}`;
                      const element = document.querySelector(href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-6 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {currentYear} Meric Vaillant. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
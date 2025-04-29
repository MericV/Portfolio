import React from 'react';
import { Calendar, MapPin, Mail, Phone } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 relative after:content-[''] after:absolute after:w-20 after:h-1 after:bg-blue-500 after:-bottom-4 after:left-1/2 after:-translate-x-1/2">
            À Propos de Moi
          </h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-all hover:shadow-xl">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Profil</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Je suis un étudiant très motivé en informatique, avec une solide formation en mathématiques 
                et en sciences informatiques. Je me considère comme méthodique, indépendant et désireux 
                d'apprendre de nouvelles technologies. Connu pour être responsable, ponctuel et fiable, 
                je m'engage pleinement dans tous mes projets.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Actuellement en deuxième année de BTS SIO (Services Informatiques aux Organisations), 
                je me spécialise dans le développement d'applications. Mon parcours académique et mes 
                expériences professionnelles m'ont permis de développer des compétences techniques et 
                personnelles que je souhaite mettre au service d'une entreprise innovante.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Informations Personnelles</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                    <Calendar size={18} className="text-blue-500" />
                    <span>
                      <strong className="font-medium text-gray-700 dark:text-gray-300">Date de naissance:</strong> 26 avril 2004 (21 ans)
                    </span>
                  </li>
                  <li className="flex items-start space-x-3 text-gray-600 dark:text-gray-400">
                    <MapPin size={18} className="text-blue-500 mt-1" />
                    <span>
                      <strong className="font-medium text-gray-700 dark:text-gray-300">Adresse:</strong> 1761 Route des Condamines, 06670 Saint-Martin-du-Var, France
                    </span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                    <Mail size={18} className="text-blue-500" />
                    <span>
                      <strong className="font-medium text-gray-700 dark:text-gray-300">Email:</strong>{' '}
                      <a 
                        href="mailto:vaillant.meric@icloud.com" 
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        vaillant.meric@icloud.com
                      </a>
                    </span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                    <Phone size={18} className="text-blue-500" />
                    <span>
                      <strong className="font-medium text-gray-700 dark:text-gray-300">Téléphone:</strong>{' '}
                      <a 
                        href="tel:+33787601907" 
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        +33 7 87 60 19 07
                      </a>
                    </span>
                  </li>
                  <br/>
                  <li className="flex justify-center md:justify-start">
                    <a
                      href="/CV Vaillant 2025-1.pdf"
                      download
                      className="inline-flex items-center px-5 py-2.5 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 transition-all"
                    >
                      <svg 
                        xmlns="/CV Vaillant 2025-1.pdf" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth="1.5" 
                        stroke="currentColor" 
                        className="w-5 h-5 mr-2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0l-4-4m4 4l4-4" />
                      </svg>
                      Télécharger mon CV
                    </a>
                  </li>

                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Qualités</h3>
                <div className="flex flex-wrap gap-2">
                  {['Responsable', 'Ponctuel', 'Indépendant', 'Polyvalent', 'Engagé', 'Méthodique', 'Curieux', 'Persévérant'].map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800 dark:text-gray-200">Centres d'Intérêt</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Escalade</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>VTT</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Ski</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Galeries d'art</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Voyages</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { BookOpen, FileText, Link } from 'lucide-react';

const Epreuve: React.FC = () => {
  return (
    <section id="Epreuve" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 relative after:content-[''] after:absolute after:w-20 after:h-1 after:bg-blue-500 after:-bottom-4 after:left-1/2 after:-translate-x-1/2">
            Épreuve E4 - BTS SIO
          </h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-all hover:shadow-xl">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Présentation de l'Épreuve E4</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                L'épreuve E4 du BTS Services Informatiques aux Organisations (SIO) intitulée <strong>« Support et mise à disposition de services informatiques »</strong> 
                évalue la capacité du candidat à intervenir dans le support et le déploiement de services informatiques.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Elle repose sur des mises en situation professionnelle et s'appuie sur un portefeuille de compétences acquises lors des périodes de formation 
                en entreprise (stages) ainsi que durant la scolarité. L'étudiant doit démontrer son aptitude à :
                <ul className="list-disc ml-6 mt-2">
                  <li>Assister les utilisateurs et assurer le maintien en condition opérationnelle des systèmes informatiques</li>
                  <li>Déployer, mettre à disposition et maintenir des services informatiques</li>
                  <li>Suivre et faire évoluer l'infrastructure informatique</li>
                </ul>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Détails de l'Épreuve</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3 text-gray-600 dark:text-gray-400">
                    <FileText size={18} className="text-blue-500 mt-1" />
                    <span>
                      Épreuve orale basée sur un dossier présentant différentes interventions réalisées en entreprise ou en projet.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3 text-gray-600 dark:text-gray-400">
                    <BookOpen size={18} className="text-blue-500 mt-1" />
                    <span>
                      Durée de l'épreuve : environ 40 minutes (20 minutes de présentation + 20 minutes d'entretien).
                    </span>
                  </li>
                  <li className="flex items-start space-x-3 text-gray-600 dark:text-gray-400">
                    <FileText size={18} className="text-blue-500 mt-1" />
                    <span>
                      Basée sur des situations professionnelles réelles en lien avec les activités de support et de maintenance.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Veille Informatique</h3>
                <div className="space-y-3">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Dans le cadre de ma veille technologique, je me suis intéressé à l'<strong>évolution du Règlement Général sur la Protection des Données (RGPD)</strong>. 
                    J'ai analysé les dernières adaptations légales, les nouvelles exigences en matière de consentement et les impacts sur les entreprises européennes.
                  </p>
                  <a
                    href="src/components/public/Veille informatique RGPD_VF.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-2.5 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 transition-all"
                  >
                    <Link className="w-5 h-5 mr-2" />
                    Consulter ma veille
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Epreuve;

import React from 'react';
import Timeline from '../ui/Timeline';
import { BookOpen, Award } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      id: 1,
      period: '2019 - 2022',
      title: 'Baccalauréat Scientifique',
      institution: 'Lycée Les Eucalyptus, Nice',
      description: 'Spécialités : Mathématiques, Physique-Chimie, Sciences de l\'Ingénieur. Option supplémentaire : Mathématiques Avancées. Formation scientifique solide avec un accent sur les mathématiques et l\'ingénierie.',
      icon: <Award size={20} />
    },
    {
      id: 2,
      period: '2022 - 2023',
      title: '1ère Année de DCG (Diplôme de Comptabilité et de Gestion)',
      institution: 'Nice',
      description: 'Validation de l\'UE 8 – Systèmes d\'Information et de Gestion, qui m\'a permis d\'acquérir des connaissances en gestion des systèmes d\'information, mais aussi en comptabilité ainsi qu\'en droit',
      icon: <BookOpen size={20} />
    },
    {
      id: 3,
      period: '2023 - 2025',
      title: 'BTS SIO (Services Informatiques aux Organisations)',
      institution: 'Beau Site, Nice',
      description: 'Formation en informatique spécialisée dans le développement d\'applications. Apprentissage des langages de programmation, bases de données, et méthodologies de développement.',
      icon: <BookOpen size={20} />
    },    
    {
      id: 4,
      period: '2025 - 2026',
      title: 'Licence 3 MIASHS parcours MIAGE ',
      institution: 'Université, Biot',
      description: 'Accepté en L3, une formation en mathématiques, informatique et sciences humaines et sociales. Elle permet d’envisager un très large spectre de projets professionnels : finance, banque, assurance, santé, administration, collectivités et services',
      icon: <BookOpen size={20} />
    }
  ];

  const certificationData = [
    {
      id: 1,
      period: '2023',
      title: 'Projet Voltaire',
      institution: 'France',
      description: 'Certification en orthographe et grammaire française, attestant d\'une maîtrise avancée de la langue française écrite.',
      icon: <Award size={20} />
    },
    {
      id: 2,
      period: '2025',
      title: 'Certification PIX',
      institution: 'France',
      description: 'Certification des compétences numériques validant la maîtrise des outils informatiques et des compétences digitales essentielles. Score PIX : 517. Code de vérification : P-P9VD88JW.',
      icon: <Award size={20} />
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 relative after:content-[''] after:absolute after:w-20 after:h-1 after:bg-blue-500 after:-bottom-4 after:left-1/2 after:-translate-x-1/2">
          Formation & Certifications
        </h2>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-blue-600 dark:text-blue-400">Parcours Académique</h3>
          <Timeline items={educationData} />

          <h3 className="text-2xl font-semibold mt-16 mb-8 text-blue-600 dark:text-blue-400">Certifications</h3>
          <Timeline items={certificationData} />
        </div>
      </div>
    </section>
  );
};

export default Education;